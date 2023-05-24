# Youtube Clone (iTube)

#### Description
- Prototype for a Youtube Clone
- Built with ReactJS (CRA), Axios, MaterialUI, Emotion Library
- Deployed on Netlify
- Still early in development..
- Live URL: https://yt-clone-raccoonwannafly.netlify.app/

****** For CRA stuff head on to CRA_README.MD
****** For dev stuff head on to DEV_README.MD

#### Features
- Fetch data from Rapid API Youtube V3 Freemium (https://rapidapi.com/ytdlfree/api/youtube-v31/)
- Display videos, search videos, watch videos (embeded Youtube)
- Display related videos
- Display view counts and like counts
- Channel page
- If fetch scripts fail to fetch thumbnails or other info, it will instead display demo placeholder. 
- Images:
![image](https://github.com/raccoonwannafly/yt-clone/assets/130273473/1a2d65fc-4edd-43bd-92f7-543c83ebe269)
![image](https://github.com/raccoonwannafly/yt-clone/assets/130273473/1502c6ef-83b5-4d93-9a5a-7b741cfe639b)
![image](https://github.com/raccoonwannafly/yt-clone/assets/130273473/9fd7295c-dbdc-42b7-9a6b-e7bd89ffbe4b)
![image](https://github.com/raccoonwannafly/yt-clone/assets/130273473/e78f9a57-25c6-4a5b-aaf0-8ccc02981b0f)

#### Quirks
- Search result display channels in different col / row
- Home page doesn't randomize videos, as the api returns first 50 results.
- No channel banner available in this API
- API slow response due to freemium model

#### Planned features:
- Use official Google dev Youtube Data API
- Display comments
- Login with Google via OAuth v2
- UI Revamp
- Darkmode toggle



#### Development:
Huge thanks to JSM: https://www.youtube.com/@javascriptmastery (https://gist.github.com/adrianhajdin)
Rapid API Freemium is budget and fast to deploy.
Currently its limited to 500 req per month.
But RapidAPI at the time just layoff'd 80% of its staff. Most likely a sinking ship.
So using its API is not future proof at all.
Initially I tried using Google Dev API but its just too painful to set up with credentials and oauth and all that.

#### Resources:
The net ninja: https://www.youtube.com/@NetNinja
F8: https://www.youtube.com/@F8VNOfficial
WDS: https://www.youtube.com/@WebDevSimplified
Traversy Media: https://www.youtube.com/@TraversyMedia
FCC: https://www.youtube.com/@freecodecamp
Developedbyed: https://www.youtube.com/@developedbyed
Academind: https://www.youtube.com/@academind
JSM: https://www.youtube.com/@javascriptmastery
FireShip: https://www.youtube.com/@Fireship
