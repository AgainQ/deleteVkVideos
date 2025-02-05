import fs from 'fs';
import { getGroupVideoIds } from './getGroupVideoIds';
import chalk from 'chalk';

const cookieFromRequest = '';

async function getDeleteHash(
  videoId: number,
  groupId: number
): Promise<string | 'deleted' | undefined> {
  const response = await fetch('https://vkvideo.ru/al_video.php?act=show', {
    method: 'POST',
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9,ru;q=0.8',
      origin: 'https://vkvideo.ru',
      priority: 'u=1, i',
      referer: 'https://vkvideo.ru/@footballingame',
      'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
      'x-kl-ajax-request': 'Ajax_Request',
      'x-requested-with': 'XMLHttpRequest',
      cookie: cookieFromRequest,
    },
    body: new URLSearchParams({
      act: 'show',
      al: '1',
      al_ad: '0',
      autoplay: '1',
      list: `club${groupId}`,
      module: 'video_group_main',
      screen: '0',
      show_next: '1',
      // If you need to include track_code, uncomment and fill in the value below.
      // track_code: 'your_track_code_here',
      video: `-${groupId}_${videoId}`,
      webcast: '0',
    }),
  });

  const data = await response.json();
  // Uncomment the following line for debugging the payload structure:
  // console.log(JSON.stringify(data, null, 2));

  // Check if any of the items in data.payload[1] indicate that the video "was deleted"
  const isDeleted = data?.payload?.[1]?.some(
    (msg: unknown) => typeof msg === 'string' && msg.includes('was deleted')
  );
  if (isDeleted) return 'deleted';

  // Try to get the deleteHash from the payload. Adjust the property access based on your data structure.
  const deleteHash = data?.payload?.[1]?.at(-1)?.mvData?.deleteHash;
  console.log('Delete hash:', deleteHash);
  return deleteHash;
}

async function deleteVideo(videoId: number, groupId: number): Promise<boolean> {
  const deleteHash = await getDeleteHash(videoId, groupId);
  console.log('Obtained deleteHash:', deleteHash);

  // If the video is already deleted, return true.
  if (deleteHash === 'deleted') {
    console.log(chalk.green(`Video was aread deleted ${videoId}`));
    return true;
  }

  if (!deleteHash) {
    console.error(`Could not retrieve deleteHash for video ${videoId}`);
    return false;
  }

  const response = await fetch('https://vkvideo.ru/al_video.php?act=delete_video', {
    method: 'POST',
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9,ru;q=0.8',
      origin: 'https://vkvideo.ru',
      priority: 'u=1, i',
      referer:
        'https://vkvideo.ru/@footballingame?z=clip-228898457_456239125%2Fclub228898457',
      'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
      'x-kl-ajax-request': 'Ajax_Request',
      'x-requested-with': 'XMLHttpRequest',
      cookie: cookieFromRequest,
    },
    body: new URLSearchParams({
      al: '1',
      from: 'videoviewer',
      hash: deleteHash,
      oid: `-${groupId}`,
      sure: '0',
      vid: String(videoId),
    }),
  });

  const data = await response.json();
  // console.log('Delete video response:', data);

  // Check if the deletion message contains "deleted"
  const msgs: unknown[] = data?.payload?.[1] ?? [];
  const isDeleted = msgs.some(
    (msg: unknown) => typeof msg === 'string' && msg.includes('deleted')
  );
  if (isDeleted) {
    console.log(chalk.green(`Deleted video ${videoId}`));
  }
  return isDeleted;
}

const GROUP_ID = 228898457;
const OUTPUT_FILE = 'output.txt';

async function main() {
  try {
    const ids = await getGroupVideoIds(GROUP_ID);

    for (const [i, id] of ids.entries()) {
      console.log(`Deleting video ${i + 1} of ${ids.length} (videoId: ${id})`);
      const deletionResult = await deleteVideo(id, GROUP_ID);
      fs.appendFileSync(OUTPUT_FILE, `${id}=${deletionResult ? 1 : 0}\n`);
    }
  } catch (err: any) {
    console.error('Error in main:', err.message);
  }
}

main();
