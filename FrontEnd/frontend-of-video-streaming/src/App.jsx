import VideoPlayer from "./VideoPlayer"
import { useRef } from "react"
import './App.css'

function App() {

  const playerRef = useRef(null)

  const videoLink = "http://localhost:8000/uploads/courses/303ec193-ff6a-4267-8a35-cda34983803b/index.m3u8"

  const videoPlayerOptions = {
    controls: true,
    responsive:true,
    fluid:true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL"
      }
    ]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <div className="videoDiv">
        <h1>Video Player</h1>
      <VideoPlayer options = {videoPlayerOptions} onReady = {handlePlayerReady}/>
      </div>
    </>
  )
}

export default App
