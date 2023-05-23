# Youtube Clone (iTube)

###### Description
- Prototype for a Youtube Clone
- Built with ReactJS (CRA), Axios, MaterialUI
- Deployed on Netlify
- Still early in development..

****** For CRA stuff head on to CRA_README.MD

###### Features
- Fetch data from Rapid API Youtube V3 Freemium (https://rapidapi.com/ytdlfree/api/youtube-v31/)
- Display videos, search videos, watch videos (embeded Youtube)
- Display related videos
- Display view counts and like counts
- Channel page
- If fetch scripts fail to fetch thumbnails or other info, it will instead display demo placeholder. 
- Images:


###### Quirks
- Search result display channels in different col / row
- Home page doesn't randomize videos
- No channel banner available in this API
- API slow response due to freemium model

###### Planned features:
- Use official Google dev Youtube Data API
- Display comments
- Login with Google via OAuth v2
- UI Revamp
- Darkmode toggle



###### Development:
Rapid API Freemium is budget and fast to deploy so I picked it :).
Currently its limited to 500 req per month.
But RapidAPI at the time just layoff'd 80% of its staff. Most likely a sinking ship.
So using its API is not future proof at all.
Initially I tried using Google Dev API but its just too painful to set up with credentials and oauth and all that.


