import Footer from '@/components/footer'
import GlobalBar from '@/components/globalBar'
import Comments from '@/components/videos/comments'
import CMSClient from '@/lib/clients/CMSClient'
import { metadata } from '../../layout'
import Script from 'next/script'

export default async function Page({ params }: { params: { videoId: string } }) {
  var video = await CMSClient.videos.getByIdAsync(params.videoId)

  // Set page title and meta
  metadata.title = "Play | Segun"
  metadata.description = "Video page"

  return (
    <main role="main" className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex min-w-full flex-col items-center justify-between">
        <GlobalBar />
        <div className="max-w-screen-xl w-full text-sm min-h-[600px] p-6 m-6 flex justify-between flex-wrap">
          <video
            id="my-video"
            className="video-js"
            controls
            preload="auto"
            width="1690"
            height="700"
            data-setup="{}">
            <source src={`${process.env.CMS_Host}${video.url}`} type="video/mp4" />
            <p className="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a
              web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank"
              >supports HTML5 video</a
              >
            </p>
          </video>
          <div id='videoDescription' className="mt-6 w-full flex">
            <div className="videoInfo w-2/3 p-8 rounded-lg mr-2">
              <h2 className="text-2xl font-semibold">{video.name}</h2>
              <p className="text-base pb-4">{video.description}</p>
            </div>
            <div className="videoInfo w-1/3 p-8 rounded-lg ml-2">
              <h2 className="text-xl font-semibold">Views: {video.views ?? 0}</h2>
              <h2 className="text-xl pb-4">{new Date(video.createdAt).toLocaleString()}</h2>
            </div>
          </div>
          <Comments videoId={params.videoId} />
        </div>
      </div>
      <Footer />
      <link href="//vjs.zencdn.net/8.3.0/video-js.min.css" rel="stylesheet" />
      <Script src="//vjs.zencdn.net/8.3.0/video.min.js" />
    </main>
  )
}
