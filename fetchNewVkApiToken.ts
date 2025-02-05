// Import Axios (Ensure your environment supports ESM)
import axios from 'axios';
// const cookieMain =
//   'remixscreen_depth=24; remixcolor_scheme_amode=auto; tmr_lvid=931ea16862fa601a834ecee7d3482ffc; tmr_lvidTS=1699554349615; remixsuc=1%3A; remixscreen_orient=1; remixnttpid=vk1.a.Zp4o4IkYYe51j4tdWwPA0uk2RiOeRc0MOcAEmN7_m2fxg8b9Z8k7SFVhmqgjQOkmPlU3KeiMWrAfSGJW5qVwmyDi-6IDi1oI4cNaf9Arr_0-V1YplbhGaHsMEl4mztk6Dq4WNZK3v2AVo69tKJO0nFRYg4Wb7wGHnzCUsv-dPDjDEhtPhmJ1I0g5hWvLFctu; remixsf=1; remixdark_color_scheme=0; remixscreen_width=1920; remixscreen_height=1080; remixstlid=9069453080424030771_wFM8GYgNL6dJoc5FAZuNgSgJHMDmIt5g1okIZjNbAEX; remixdt=14400; remixstid=987201272_zdJQZHf0nrMrbVNlcYYArrys8zvfQzt7TeQfLHi0zlz; remixlang=3; remixuacck=4582d1091e743445a4; remixua=43%7C-1%7C214%7C2527455907; remixvb_range=last7Days-1732122000000-1732669200000; remixuas=MGMzZGNhYmQ2ZDliOWUzNGZmZjUxZTU3; sui=187311606%2CazCqCC98yyIwR3pMB5JjS7zM7M-dRIBPJTSZBzu-YkU; remixseenads=1; remixscreen_dpr=1; remixrt=0; remixgp=9534072dc048261f1b389dde1bc06262; remixrefkey=505bc68b35fa86c9a0; solution429=H7xpc2bhvh-BmGfX5oQ4CVKZ96iQ1TR4MZ1YhC8vO6QVgBt3fkwf1nfmAv6d-kyqUKC3Babw_GxMmv7viw2OCse_0JYGT-jMeYPR_s7JQNLHI1fPUcNlR1a_zJEEEUosUUsJmFxi8LhlgGA_; httoken=wAz6pZjHsMts18yV_lL4sFWSexEb60JN4aa8wPiF_P3Hq7oGJV154BXcnemnwBjSnlilSunPntnjsbVRTHAsLFBJNGhVLpRbKTiijVxAKhHz0tMr4B5lf8GLFCvaLki7ih8; remixscreen_winzoom=1.97; p=vk1.a.ZgAhIw35so6eCCdwJedWAFeXSgu7MU6NEzIsko4jQ5-LY-euniFyCsVcsfdI6nb8C-s9ql5I_od3SzbZINAqwkl4iNWVvJNCWCO7vX1Ibw1vnIJqbobQKdzMK2PA0M8TnI47EHun5AyrCr7xeYOkiCaYA3_ugCRNC2UO5DhVA2A; sua=R7_Qxf3IkeMschOzsMjRD_xHWpfgEX7EaACJh14kjTo%23187311606%5Evk1.a.Kr4JtygYrsLplNhMBlE_O968pHs5YenuqOUb6YDC9e0dSqtTew4x99RfmWBeIft7uojOzZUdKw3bitEGrV9xCUs0SanPJJ5envlF1NiqvISlGtcPrrM0Wk1US0g5KbMlPVvRYoBLnIWJXSVebttg7UK3e90Xvuiht4x3TMEOJLSD21zeg3Xgko5n0QL9Xx6r%5E1735394329; remixsid=1_lbiaw9xMrFdjrxD3PFkB5a2n2z-QNLuszI8C81TUkToRfD9h8-yyuSWzYAGHKZ3fmFX8dLJ5zkznVIMwwKdvbg; remixpuad=sTtnZ3xhmMNaUKwWYfn_uNhcu_rn07NQoLHEtRZQ-v8; remixdmgr_tmp=78e805578a77a91d2f177fb26c7aabf7d7c1f07ae8a09ead7588e580aece6780; remixdmgr=187119e10f3dec5c72856a1eacad1380822b62219af132383bc88b60ebdf2cd8';
// const cookie =
//   'remixlang=0; remixstlid=9109286900009009541_S0ERfsCSSRuBeAQeRgCxGcZwV7ZQYvu4buckbsxuSSP; remixua=43%7C-1%7C214%7C2987383930; remixstid=1126039543_NyY2CrTrwHplXfugtVZl8oFzwBELHcUWxrF06qJDNEL; remixscreen_width=1920; remixscreen_height=1080; remixscreen_dpr=1; remixscreen_depth=24; remixscreen_orient=1; remixsf=1; remixgp=79b9109b3807dcc42800ddf1b5a1ad62; remixdark_color_scheme=0; remixcolor_scheme_mode=auto; remixuas=NTFlNzEwY2EzM2JlOWEzMTYzZDk4ZGQ0; tmr_lvid=3874379f38afb71b4a415445a0938919; tmr_lvidTS=1736419773329; remixseenads=1; remixuacck=9ba514086ee8b71306; _ym_uid=1736420236886748117; _ym_d=1736420236; remixpuad=sgxqPcdRmYfWzZltt5iy1oe4pqD1G8UUN9vNMx8elpM; remixdt=0; sui=353424486%2CHnAt1S9Lu06iA65JRcUc54mz5qGSom5-QxuffwEUWKU%7C685004953%2CKrTIHhfVHMjsCKGsPnlTfS0yN1_qAyf9sdH050x1B_I%7C539509039%2CmT7lRWgPhgjCykDGWlhcWF7sYrRX0r4EyxugzMjrHLQ%7C1019677267%2CziaoiRngEva9Qh1To9TWTJj_NSRRHPChYc8nZup6UAE; remixsuc=4%3A; _ym_isad=2; remixrefkey=e6a3c4603662a5b18d; httoken=66_WGY_glCKHJwh7c0DzQd0mZhQ5-cYe2hpXmbxkXaq1UYaeZ0-kUGLoLFShshCMRyTnxCF3U4T4lhk6IUunmk9RAg-LpR4bu2fXBFiP0U8Iz15xtbqjU9tp0pXNA6NWlhM; p=vk1.a.xVR-vwqN-HRqoIjPAFulxsLZizleC3PfMtDZCS6hfGB3vlKYLXAl4bW2GgFzASUrPEe-XTIWlQyttZC9enU4UVrWJcA_plRKjRyaX6l_wDu8FKxlHdTyV96DKPOn6PqA7rrmZS7siSUEZtz0ckSGuNRp270JS6nfOquw2k6nvHI; sua=Zx8WW1jbiezFRLKjTNUkTthLVk1Mz7KiNCN5bSKQBnk%23353424486%5Evk1.a.qwRHgrux7BqgkBKkJyjvZCWXy01UVI6QgYmFbbkajCvCKJm7FOliYeRuUeUGMT_xtKTttqogSQtzJaugu2o2En3VlsNB_uzUAZpM1f0Xt7PYySqJ5SE5NjdICNbzX3bZgJv5Db36KR2ZCrsudkAb7RG01BDc6F5mEymOy0LINUaXefztYYCk6wAMPh10QQB5%5E1736941467%7CPrxbb35fQCwvkMEezda4yuzvapacRWqufnjbpYYO0-U%23685004953%5Evk1.a.-h3rs_e2XDGxaNzvod_ORdiKcLDe9KnAOkQ1ePm5cmYyYEW3uVXlae3QEqjkh7lmnbVOd1ujYb0Rnd2vnLf5LnH6O5byKe7mGLF8uvPwbDyHJwAWGbAsGIjAqJ-wdgb9M9iHRTNVvIBSm_sC35WQcF9iS2QV5tPWZr8Eo4gWUdcD-pM7jOxyoHltY4Pv6m3b%5E1736927091%7CPn5fK5pABgTRWuoIBG5YXtPH5FPT2l37iMRJM8pZdpE%23539509039%5Evk1.a.0uOJy9Kle5Wz6NmicVb8Vpp1iOHqt36fQCb2JG4YLolDyVmy3BkWzWuo1HJGPUhrYj8d5Qqn3QphfErdqOdNa9bUf_7JfbSw7HNlr4q9lM6CqIb6z7W2E3PpUbsf9nbAhUYUaaQyhUNwxr8BMaCkdWWpBUfChFtSEDr9y4zdY32o-A2J_fENpKbX4xFprcQv%5E1736420043%7CHRc_gy53GQTPIyKJxbGXYnNwul_Q8SOkXORfWmVH7FQ%231019677267%5Evk1.a.Sb-4UmS6DO6olqV9FDWVxsae5gmovM0NslJvRINlSn5hDVpHIMFmjWkHqj_CNm9WKc5ekLONMpRKj1aHhw6y_wkneOW-TY1hYlc__LTMOQCKlDtrypXK_RwotuJN6Rzx9CXSLAOTwAy-cmlhlKUC4LKd2fttGxUU10nNkJWZ3lx67PlmRTioWH3euPdoTkZ9%5E1736419781; remixdmgr_tmp=91397dd54d7d3c530c34b78e4ae026121478b28afa00373f7f6a8da281495b2a; remixsid=1_JFB06dRf3Qu0SPi2pj0-uvN1141SoYVHJc8vLFtKuO95XTKpnD3ywfxECpr7xfOcc1gxb8qYbFTYgcS3qvxYuQ; remixdmgr=825096d5de824979305b3f8623ddda96e20b7f40d43215020bad13a36548cb30; remixscreen_winzoom=1.69; remixsts=%7B%22data%22%3A%5B%5B1736941482%2C%22web_dark_theme%22%2C%22auto%22%2C%22vkcom_light%22%2C0%5D%2C%5B1736941482%2C%22browser_features%22%2C%22current_scheme%3A1/is_auto_schemes_supported%3A1/is_schemes_supported%3A1%22%5D%5D%2C%22uniqueId%22%3A895861641.8038299%7D';

const cookie =
  'remixlang=0; remixstlid=9109286900009009541_S0ERfsCSSRuBeAQeRgCxGcZwV7ZQYvu4buckbsxuSSP; remixua=43%7C-1%7C214%7C2987383930; remixstid=1126039543_NyY2CrTrwHplXfugtVZl8oFzwBELHcUWxrF06qJDNEL; remixscreen_width=1920; remixscreen_height=1080; remixscreen_dpr=1; remixscreen_depth=24; remixscreen_orient=1; remixsf=1; remixdark_color_scheme=0; remixcolor_scheme_mode=auto; remixuas=NTFlNzEwY2EzM2JlOWEzMTYzZDk4ZGQ0; tmr_lvid=3874379f38afb71b4a415445a0938919; tmr_lvidTS=1736419773329; remixseenads=1; remixuacck=9ba514086ee8b71306; _ym_uid=1736420236886748117; _ym_d=1736420236; remixdt=0; sui=353424486%2CHnAt1S9Lu06iA65JRcUc54mz5qGSom5-QxuffwEUWKU%7C685004953%2CKrTIHhfVHMjsCKGsPnlTfS0yN1_qAyf9sdH050x1B_I%7C539509039%2CmT7lRWgPhgjCykDGWlhcWF7sYrRX0r4EyxugzMjrHLQ%7C1019677267%2CziaoiRngEva9Qh1To9TWTJj_NSRRHPChYc8nZup6UAE; remixsuc=4%3A; remixrefkey=e6a3c4603662a5b18d; httoken=Tl92z26QHW_teWv8oMZZGaYMD-geJLVj55ToFhEZZRIJylMu5-FLVpSdYleFi8Lbo7y0fAaIg6H-u3gHw2i3bziQlwV65dmGVnEAQD4hnRZmNyOQgbPK3thJO3H3Q-EW_b0; httoken=0e4SnABTYirxDtLbcbVPJhYdqpk1TJ_m-RlAdb2rX5A_nV9Ps7ihlzCp2HtjI0-wN27T9J-9SgmwthAU6v8U5sFD1txb6kUH9qqa9FAifBQrC15miMXFlSdsOLbCYIHi_Fo; remixgp=852b29fe0cfcd7e5af6bfaa249361d07; p=vk1.a.6rYwFwbXGtqqdkc0j00HzuvffbZJMFQC2A6-Vvh3bqoQF2lOQwiaJVMWVHVCEDTRNFQqFy8qWBK9kI2mvoZ-nQf33tTToRs8iAWI9E6S7CyNP-ko7oFP5A5fSa5Gt6eQ_zpzr0fPajfZ72kfO2RRtUwaek84RQtvviAcY0aAiEo; remixpuad=lyHMSIdpHTsVMptRTDFprXBRqCGx7ib3zh_vTVCly9k; sua=TX9Fqf_zretY7PhCuoqXditEKvB7JFTnnc_nlie6O_k%23353424486%5Evk1.a.qwRHgrux7BqgkBKkJyjvZCWXy01UVI6QgYmFbbkajCvCKJm7FOliYeRuUeUGMT_xtKTttqogSQtzJaugu2o2En3VlsNB_uzUAZpM1f0Xt7PYySqJ5SE5NjdICNbzX3bZgJv5Db36KR2ZCrsudkAb7RG01BDc6F5mEymOy0LINUaXefztYYCk6wAMPh10QQB5%5E1737897060%7CPrxbb35fQCwvkMEezda4yuzvapacRWqufnjbpYYO0-U%23685004953%5Evk1.a.-h3rs_e2XDGxaNzvod_ORdiKcLDe9KnAOkQ1ePm5cmYyYEW3uVXlae3QEqjkh7lmnbVOd1ujYb0Rnd2vnLf5LnH6O5byKe7mGLF8uvPwbDyHJwAWGbAsGIjAqJ-wdgb9M9iHRTNVvIBSm_sC35WQcF9iS2QV5tPWZr8Eo4gWUdcD-pM7jOxyoHltY4Pv6m3b%5E1736927091%7CPn5fK5pABgTRWuoIBG5YXtPH5FPT2l37iMRJM8pZdpE%23539509039%5Evk1.a.0uOJy9Kle5Wz6NmicVb8Vpp1iOHqt36fQCb2JG4YLolDyVmy3BkWzWuo1HJGPUhrYj8d5Qqn3QphfErdqOdNa9bUf_7JfbSw7HNlr4q9lM6CqIb6z7W2E3PpUbsf9nbAhUYUaaQyhUNwxr8BMaCkdWWpBUfChFtSEDr9y4zdY32o-A2J_fENpKbX4xFprcQv%5E1736420043%7CHRc_gy53GQTPIyKJxbGXYnNwul_Q8SOkXORfWmVH7FQ%231019677267%5Evk1.a.Sb-4UmS6DO6olqV9FDWVxsae5gmovM0NslJvRINlSn5hDVpHIMFmjWkHqj_CNm9WKc5ekLONMpRKj1aHhw6y_wkneOW-TY1hYlc__LTMOQCKlDtrypXK_RwotuJN6Rzx9CXSLAOTwAy-cmlhlKUC4LKd2fttGxUU10nNkJWZ3lx67PlmRTioWH3euPdoTkZ9%5E1736419781; remixsid=1_GqFMoWgxvEJcGwKuuDRPUnEeJiDamSZ-AZtBXrW_RFAa6nYfW6dgsiKH1983TEqNfjPLSUxg5F5lP1aIGnKTJA; remixdmgr_tmp=91397dd54d7d3c530c34b78e4ae026121478b28afa00373f7f6a8da281495b2a; remixdmgr=825096d5de824979305b3f8623ddda96e20b7f40d43215020bad13a36548cb30; remixscreen_winzoom=1.69; remixsts=%7B%22data%22%3A%5B%5B1737897068%2C%22web_dark_theme%22%2C%22auto%22%2C%22vkcom_light%22%2C0%5D%2C%5B1737897068%2C%22browser_features%22%2C%22current_scheme%3A1/is_auto_schemes_supported%3A1/is_schemes_supported%3A1%22%5D%5D%2C%22uniqueId%22%3A618329108.4660822%7D';

export async function fetchNewVkApiToken(): Promise<string> {
  // Define the headers
  const headers = {
    Accept: '*/*',
    'Accept-Language': 'en-US,en;q=0.9,ru;q=0.8',
    Cookie: cookie,
    Origin: 'https://vk.com',
    Priority: 'u=1, i', // Verify if this header is necessary
    Referer: 'https://vk.com/',
    'Sec-CH-UA': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'Sec-CH-UA-Mobile': '?0',
    'Sec-CH-UA-Platform': '"Windows"',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded', // Ensure the correct Content-Type
  };

  // Create URLSearchParams for the request body
  const body = new URLSearchParams({
    version: '1',
    app_id: '6287487',
  });

  // Define the URL with the query parameter
  const url = 'https://login.vk.com/?act=web_token';

  try {
    // Make the POST request using Axios
    const { data } = await axios.post(url, body, { headers });
    const accessToken = data?.data?.access_token;
    // console.log('VK API ACCESS TOKEN RECEIVED');
    return accessToken;
  } catch (error) {
    // Handle errors
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Error Response:', error.response.data);
      console.error('Status Code:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else if (error.request) {
      // No response received
      console.error('No response received:', error.request);
    } else {
      // Other errors
      console.error('Error:', error.message);
    }
    throw error;
  }
}
