import HoverVideoPlayer from "react-hover-video-player";
import Thirdpaused3ndover from "./Thirdpaused3ndover";
import LoadingOverlay from "../../imageVideoPlay/LoadingOverlay";
// import '../Application.css'

export default function App() {
  return (
    <HoverVideoPlayer
      videoSrc="https://www.mindinventory.com/img/video/successstory-video/enneagram-personality-teaster-app.mp4" style={{borderRadius:'15px',width:'100%',height:'100%'}}
      pausedOverlay={<Thirdpaused3ndover />}
      loadingOverlay={<LoadingOverlay />}
    />
  );
}
