import CMSClient from "@/lib/clients/CMSClient";
import Video from "./video";

export default async function RelatedVideos() {
   var videos = await CMSClient.videos.getAsync("&sort=updatedAt:desc")

   return (
      <div className="w-fit flex-1 mx-12 lg:max-w-screen-xl text-sm lg:flex-grow-0 lg:m-0 lg:mt-12">
         <h2 className="text-2xl font-semibold px-2">Related Videos:</h2>
         <div className="flex justify-between flex-wrap lg:flex-col">
            {videos.map((video) => <Video video={video} size="small" host={process.env.CMS_Host} />)}
         </div>
      </div>
   )
}