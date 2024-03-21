import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

const PresentationVideo = () => {
  return (
    <MediaPlayer
      title="Le Village des bébés - Concours de pitch Incubateur Enracine 2023"
      src="https://www.youtube.com/watch?v=WZpseuTM1Ws"
    >
      <MediaProvider>
        <Poster
          className="vds-poster"
          src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870348/youtube_thumbnail_bab15d90ae.jpg"
          alt="Le Village des bébés - Concours de pitch Incubateur Enracine 2023"
        />
      </MediaProvider>
      <DefaultVideoLayout
        thumbnails="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870348/youtube_thumbnail_bab15d90ae.jpg"
        icons={defaultLayoutIcons}
        noScrubGesture
      />
    </MediaPlayer>
  );
};

export { PresentationVideo };
