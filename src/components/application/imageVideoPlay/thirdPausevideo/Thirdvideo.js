import HoverVideoPlayer from "react-hover-video-player";
import ThirdPausevideo from "./ThirdPausevideo";
import LoadingOverlay from "../LoadingOverlay";
import '../../Application.css'
export default function App() {
  return (
    <HoverVideoPlayer
      videoSrc="https://www.mindinventory.com/img/video/portfolio-video/cam4sell.mp4" style={{width:'100%',height:'100%'}}
      pausedOverlay={<ThirdPausevideo />}
      loadingOverlay={<LoadingOverlay />}
    />
  );
}