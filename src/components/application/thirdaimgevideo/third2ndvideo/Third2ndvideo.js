import HoverVideoPlayer from "react-hover-video-player";
import Thirdpaused2ndover from "./Thirdpaused2ndover";
import LoadingOverlay from "../../imageVideoPlay/LoadingOverlay";
// import '../Application.css'

export default function App() {
  return (
    <HoverVideoPlayer
      videoSrc="https://www.mindinventory.com/img/video/successstory-video/6pp-video.mp4" style={{borderRadius:'15px',width:'100%',height:'100%'}}
      pausedOverlay={<Thirdpaused2ndover />}
      loadingOverlay={<LoadingOverlay />}
    />
  );
}
