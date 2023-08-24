import Footer from '@/components/footer'
import GlobalBar from '@/components/globalBar'
import Comments from '@/components/videos/comments'
import CMSClient from '@/lib/clients/CMSClient'
import { metadata } from '../../layout'
import Script from 'next/script'
import RelatedVideos from '@/components/videos/relatedVideos'
import VideoPlayer from './videoPlayer'

export default async function Page({ params }: { params: { videoId: string } }) {
  var video = await CMSClient.videos.getByIdAsync(params.videoId)

  // Set page title and meta
  metadata.title = "Play | Segun"
  metadata.description = "Video page"

  return (
    <main role="main" className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex min-w-full flex-col items-center justify-between">
        <GlobalBar />
        <div className="flex w-full flex-col lg:justify-center lg:flex-row">
          <div className="max-w-screen-xl lg:w-3/4 text-sm min-h-[600px] p-6 m-6 flex justify-between flex-wrap">
            <VideoPlayer videoUrl={`${process.env.CMS_Host}${video.url}`} />
            <div id='videoDescription' className="mt-6 w-full flex flex-col lg:flex-row">
              <div className="videoInfo lg:w-2/3 p-8 rounded-lg mb-2 lg:mb-0 lg:mr-2">
                <h2 className="text-lg lg:text-2xl font-semibold">{video.name}</h2>
                <p className="text-base pb-4">{video.description}</p>
              </div>
              <div className="videoInfo lg:w-1/3 p-8 rounded-lg mt-2 lg:mt-0 lg:ml-2">
                <h2 className="text-base lg:text-xl font-semibold">Views: {video.views ?? 0}</h2>
                <br />
                <h2 className="text-base lg:text-xl font-semibold">Posted On:</h2>
                <h2 className="text-base lg:text-xl pb-4">{new Date(video.createdAt).toLocaleString()}</h2>
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
