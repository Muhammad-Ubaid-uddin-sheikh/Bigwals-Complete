import HoverVideoPlayer from "react-hover-video-player";
import SecPauseVideo from "./SecPauseVideo";
import LoadingOverlay from "../LoadingOverlay";
import '../../Application.css'
export default function App() {
  return (
    <HoverVideoPlayer
      videoSrc="https://www.mindinventory.com/img/video/portfolio-video/bus-ticket-app.mp4" style={{width:'100%',height:'100%'}}
      pausedOverlay={<SecPauseVideo />}
      loadingOverlay={<LoadingOverlay />}
    />
  );
}