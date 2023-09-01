import Footer from '@/components/footer'
import GlobalBar from '@/components/globalBar'
import Comments from '@/components/videos/comments'
import CMSClient from '@/lib/clients/CMSClient'
import { metadata } from '../../layout'
import Script from 'next/script'
import RelatedVideos from '@/components/videos/relatedVideos'
import VideoPlayer from './videoPlayer'
import NotFound from './notFound'
import { getVideoViews } from '@/lib/clients/videoViewsClient'


export default async function Page({ params }: { params: { videoId: string } }) {
  var video;
  var views;
  try {
    video = await CMSClient.videos.getByIdAsync(params.videoId)
    views = await getVideoViews(process.env.CMS_Host as string, params.videoId)
  } catch (error) {
    return (<NotFound />)
  }


  // Set page title and meta
  metadata.title = "Play | Segun"
  metadata.description = "Video page"

  return (
    <main role="main" className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex min-w-full flex-col items-center justify-between">
        <GlobalBar />
        <div className="flex w-full flex-col lg:justify-center lg:flex-row">
          <div className="max-w-screen-xl lg:w-3/4 text-sm min-h-[600px] p-6 m-6 flex justify-between flex-wrap">
            <VideoPlayer id={video.videoId} host={process.env.CMS_Host} videoUrl={`${process.env.CMS_Host}${video.url}`} />
            <div id='videoDescription' className="mt-6 w-full flex flex-col md:flex-row">
              <div className="videoInfo md:w-2/3 p-8 rounded-lg mb-2 md:mb-0 md:mr-2">
                <h2 className="text-lg md:text-2xl font-semibold">{video.name}</h2>
                <p className="text-base pb-4">{video.description}</p>
              </div>
              <div className="videoInfo md:w-1/3 p-8 rounded-lg mt-2 md:mt-0 md:ml-2">
                <h2 className="text-base md:text-xl font-semibold">Views: {views ?? 0}</h2>
                <br />
                <div className="lg:flex">
                  <h2 className="text-base md:text-xl font-semibold lg:pr-1">Posted:</h2>
                  <h2 className="text-base lg:text-xl pb-4 lg:pl-1">{timeSince(new Date(video.createdAt))}</h2>
                </div>
              </div>
            </div>
            <Comments videoId={params.videoId} />
          </div>
          <RelatedVideos />
        </div>
      </div>
      <Footer />
      <link href="//vjs.zencdn.net/8.3.0/video-js.min.css" rel="stylesheet" />
      <Script src="//vjs.zencdn.net/8.3.0/video.min.js" />
    </main>
  )
}


function timeSince(date: Date) {

  var seconds = Math.floor((Date.now() - date.getTime()) / 1000);

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