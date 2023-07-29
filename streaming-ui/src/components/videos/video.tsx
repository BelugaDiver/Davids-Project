import { Video } from "@/lib/interfaces/IVideoClient.interface"
import Link from "next/link"

function Video(props: { video: Video }) {
   console.log(props)

   var bgStyle = {
      background: `url("${props.video.url}")`
   }

   return (
      <div className="p-2 m-2 w-fit h-fit mb-10 hover:opacity-90">
         <Link href={`/play/${props.video.videoId}`}>
            <div className="w-64 h-40 rounded-2xl bg-violet-400 flex items-center justify-center">
               <PlayArrowSVG width={70} height={70} />
            </div>
            <h2 className="text-2xl pt-5">{props.video.name ?? "Title"}</h2>
            <div className="text-base opacity-80">
               <p className="py-1">{props.video.description ?? "Description for videos."}</p>
               <div className="flex">
                  <p className="">{props.video.views ?? "200"} Views</p>
                  <p className="px-1">•</p>
                  <p className="">{new Date(props.video.createdAt).toLocaleDateString() ?? "7 months ago"}</p>
               </div>
            </div>
         </Link>
      </div>
   )
}

function PlayArrowSVG(props: any) {
   return (
      <svg width={props.width} height={props.height} viewBox="-0.5 0 8 8" version="1.1">

         <title>play [#1001]</title>
         <desc>Created with Sketch.</desc>
         <defs>

         </defs>
         <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-427.000000, -3765.000000)" fill="#000000">
               <g id="icons" transform="translate(56.000000, 160.000000)">
                  <polygon id="play-[#1001]" points="371 3605 371 3613 378 3609" />
               </g>
            </g>
         </g>
      </svg>
   )
}

export default Video