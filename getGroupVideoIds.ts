import axios from 'axios';
import { fetchNewVkApiToken } from './fetchNewVkApiToken';

// export async function getGroupVideoLinks(groupId: number) {
//   const url = 'https://api.vk.com/method/shortVideo.getOwnerVideos';
//   const videoIds: number[] = [];
//   let startFrom = '';

//   let params: any = {
//     owner_id: groupId * -1,
//     v: 5.243,
//     access_token: await fetchNewVkApiToken(),
//     count: 100,
//     start_from: '3GrdWwcFWl9-XV5ODWtfU3BZWk8DA1lkImjKF0ZXb6haObDNMFA',
//   };

//   // offset
//   // next_from
//   // if (startFrom) params.startFrom = startFrom;

//   try {
//     const { data } = await axios.get(url, { params });
//     console.log(data?.response?.next_from);

//     if (data.error) throw new Error(data.error.error_msg);

//     if (data.response.items.length === 0) {
//       console.log(`No videos in group ${groupId} for some reason`);
//     }

//     const items = data.response.items;

//     const res = items.map(item => item.id);
//     videoIds.push(res);
//     console.log(res);
//     // const videos = items.map(item => ({
//     //   downloadUrl: item.files.mp4_720 || item.files.mp4_480 || item.files.mp4_360,
//     //   description: item.description || '',
//     //   videoId: item.id,
//     // }));

//     return videoIds;
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// const groupId = 211986788;

// async function main() {
//   const res = await getGroupVideoLinks(groupId);
//   // console.log(res);
//   // console.log(res.length);
// }

// main();

export async function getGroupVideoIds(groupId: number): Promise<number[]> {
  const url = 'https://api.vk.com/method/shortVideo.getOwnerVideos';
  const videoIds: number[] = [];
  let startFrom: string | undefined = undefined;

  while (true) {
    const params: any = {
      owner_id: -groupId,
      v: 5.243,
      access_token: await fetchNewVkApiToken(),
      count: 100,
    };

    if (startFrom) {
      params.start_from = startFrom;
    }

    try {
      const { data } = await axios.get(url, { params });

      if (data.error) {
        throw new Error(data.error.error_msg);
      }

      const response = data.response;

      console.log('Next from:', response.next_from);

      // If there are no items, exit the loop.
      if (!response.items || response.items.length === 0) {
        console.log(`No videos found for group ${groupId}.`);
        break;
      }

      // Extract video IDs from the items.
      const ids = response.items.map((item: any) => item.id);
      videoIds.push(...ids);

      // Check if there's a next_from token for pagination.
      if (response.next_from) {
        startFrom = response.next_from;
      } else {
        // No more pages to fetch.
        break;
      }
    } catch (err: any) {
      console.error('Error fetching videos:', err.message);
      break;
    }
  }

  console.log('Got all group ids');
  return videoIds;
}

// Example usage:
// const groupId = 211986788;

// async function main() {
//   const videoIds = await getGroupVideoLinks(groupId);
//   console.log(`Total video count: ${videoIds.length}`);
//   console.log('All video IDs:', videoIds);
// }

// main();
