import CMSClient from "@/lib/clients/CMSClient";
import Video from "./video";

export default async function RelatedVideos() {
   var videos = await CMSClient.videos.getAsync()

   return (
      <div className="max-w-screen-xl w-1/4 text-sm min-h-[600px] mt-12">
         <h2 className="text-2xl font-semibold px-2">Related Videos:</h2>
         <div>
            {videos.map((video) => <Video video={video} size="small" host={process.env.CMS_Host} />)}
         </div>
      </div>)
}