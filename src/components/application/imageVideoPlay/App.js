import HoverVideoPlayer from "react-hover-video-player";
import PausedOverlay from "./PausedOverlay";
import LoadingOverlay from "./LoadingOverlay";
// import '../Application.css'

export default function App() {
  return (
    <HoverVideoPlayer
      videoSrc="https://www.mindinventory.com/img/video/portfolio-video/implus.mp4" style={{borderRadius:'15px',width:'100%',height:'100%'}}
      pausedOverlay={<PausedOverlay />}
      loadingOverlay={<LoadingOverlay />}
    />
  );
}
