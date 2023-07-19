import { Video } from "@/lib/interfaces/IVideoClient.interface"

function Video(props: Video) {
   return (
      <div className="p-2 m-2 w-fit h-fit mb-10">
         <div className="w-64 h-40 rounded-2xl bg-violet-400 flex items-center justify-center">
            <PlayArrowSVG width={70} height={70} />
         </div>
         <h2 className="text-2xl pt-5">{props.name ? props.name : "Title"}</h2>
         <div className="text-base opacity-80">
            <p className="py-1">{props.description ? props.description : "description for videos."}</p>
            <div className="flex">
               <p className="">{props.views ? props.views : "200"} Views</p>
               <p className="px-1">•</p>
               <p className="">{props.createdDate ? props.createdDate.toISOString() : "7 months ago"}</p>
            </div>
         </div>
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
         <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-427.000000, -3765.000000)" fill="#000000">
               <g id="icons" transform="translate(56.000000, 160.000000)">
                  <polygon id="play-[#1001]" points="371 3605 371 3613 378 3609">

                  </polygon>
               </g>
            </g>
         </g>
      </svg>
   )
}

export default Video