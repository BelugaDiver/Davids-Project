"use client"

import { Video } from "@/lib/interfaces/IVideoClient.interface"
import { VideoThumbnailGenerator } from "browser-video-thumbnail-generator";
import { useEffect, useState } from "react";

function timeSince(date: Date) {

   var seconds = Math.floor((new Date() - date) / 1000);

   var interval = seconds / 31536000;

   if (interval > 1) {
      return Math.floor(interval) + " year(s) ago";
   }
   interval = seconds / 2592000;
   if (interval > 1) {
      return Math.floor(interval) + " month(s) ago";
   }
   interval = seconds / 86400;
   if (interval > 1) {
      return Math.floor(interval) + " day(s) ago";
   }
   interval = seconds / 3600;
   if (interval > 1) {
      return Math.floor(interval) + " hour(s) ago";
   }
   interval = seconds / 60;
   if (interval > 1) {
      return Math.floor(interval) + " minute(s) ago";
   }
   return Math.floor(seconds) + " second(s) ago";
}

function Video(props: { video: Video, size: "small" | "large", host: string | undefined }) {
   const videoSrc = `${props.host}${props.video.url}`;
   var [url, setUrl] = useState("");

   useEffect(() => {
      const generator = new VideoThumbnailGenerator(videoSrc);
      generator.getThumbnail()
         .then(({ thumbnail }) => {
            setUrl(thumbnail);

            setTimeout(() => {
               URL.revokeObjectURL(url);
               console.log("freed")
            }, 1000)
         });
   }, [props.video])

   var bgStyle = {
      backgroundImage: `url("${url}")`,
      backgroundSize: 'cover'
   }

   if (props.size == "large") {
      return (
         <div className="p-2 m-2 w-fit h-fit mb-10 hover:opacity-90">
            <a href={`/play/${props.video.videoId}`}>
               <div style={bgStyle} className="w-64 h-40 rounded-2xl bg-violet-400 flex items-end justify-end">
                  <div className="m-3">
                     <PlayArrowSVG width={25} height={25} />
                  </div>
               </div>
               <h2 className="text-2xl pt-5">{props.video.name ?? "Title"}</h2>
               <div className="text-base opacity-80">
                  <p className="py-1">{props.video.description ?? "Description for videos."}</p>
                  <div className="flex">
                     <p className="">{props.video.views ?? "0"} Views</p>
                     <p className="px-1">•</p>
                     <p className="">{timeSince(new Date(props.video.createdAt)) ?? "7 months ago"}</p>
                  </div>
               </div>
            </a>
         </div>
      )
   } else {
      return (
         <div className="p-2 m-2 w-fit h-fit mb-10 hover:opacity-90">
            <a href={`/play/${props.video.videoId}`}>
               <div className="flex">
                  <div style={bgStyle} className="w-40 h-24 rounded-2xl bg-violet-400 flex items-center justify-center">
                     <PlayArrowSVG width={30} height={30} />
                  </div>
                  <div className="mx-2 flex flex-col justify-between">
                     <h2 className="text-base">{props.video.name ?? "Title"}</h2>
                     <div className="text-xs opacity-80 my-2">
                        <p className="py-1">{props.video.description ?? "Description for videos."}</p>
                        <div className="flex flex-wrap">
                           <p className="">{props.video.views ?? "0"} Views</p>
                           <p className="px-1">•</p>
                           <p className="">{timeSince(new Date(props.video.createdAt)) ?? "7 months ago"}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </a>
         </div>
      )
   }


}

function PlayArrowSVG(props: any) {
   return (
      <svg width={props.width} height={props.height} viewBox="-0.5 0 8 8" version="1.1">

         <title>play [#1001]</title>
         <desc>Created with Sketch.</desc>
         <defs>

         </defs>
         <g id="Page-1" stroke="none" strokeWidth="1" fill="white" fillRule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-427.000000, -3765.000000)" fill="#000000">
               <g id="icons" transform="translate(56.000000, 160.000000)">
                  <polygon id="play-[#1001]" fill="white" points="371 3605 371 3613 378 3609" />
               </g>
            </g>
         </g>
      </svg>
   )
}

export default Video