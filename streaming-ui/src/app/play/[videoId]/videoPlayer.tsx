"use client"

import incrementVideoView from "@/lib/clients/IncrementVideoViews";
import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid'

export default function VideoPlayer(props: { id: string, host: string | undefined, videoUrl: string }) {
   var [watched, setWatched] = useState(false);

   useEffect(() => {
      var player: any = document.getElementById("video-player");

      player.ontimeupdate = () => {
         if (player?.currentTime >= 5 && !watched) {
            setWatched(true);

            incrementVideoView(props.host as string, props.id, uuid())

            console.log("watched");
            player.ontimeupdate = null;
         }
      };
   }, [watched]);

   return (
      <video
         id="video-player"
         className="video-js vjs-16-9"
         controls
         data-setup="{}">
         <source src={props.videoUrl} type="video/mp4" />
         <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank"
            >supports HTML5 video</a
            >
         </p>
      </video>
   );
}