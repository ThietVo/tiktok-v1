import { useEffect } from "react";
import styles from "./VideoA.module.scss";

function VideoA({src}) {
    useEffect(() => {}, [src])
  return (
    <video loop muted playsInline controls>
            <source src={src} type="video/mp4" />
    </video>
  )
}

export default VideoA