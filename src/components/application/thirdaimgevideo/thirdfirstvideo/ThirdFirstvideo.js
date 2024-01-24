import HoverVideoPlayer from "react-hover-video-player";
import Thirdpausedover from "./Thirdpausedover";
import LoadingOverlay from "../../imageVideoPlay/LoadingOverlay";
// import '../Application.css'

export default function App() {
  return (
    <HoverVideoPlayer
      videoSrc="https://www.mindinventory.com/img/video/successstory-video/kids-elearning-app.mp4" style={{borderRadius:'15px',width:'100%',height:'100%'}}
      pausedOverlay={<Thirdpausedover />}
      loadingOverlay={<LoadingOverlay />}
    />
  );
}
