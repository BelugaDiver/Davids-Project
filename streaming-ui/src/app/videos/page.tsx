import Footer from '@/components/footer'
import GlobalBar from '@/components/globalBar'
import CMSClient from '@/lib/clients/CMSClient'
import { metadata } from '../layout'
import Video from '@/components/videos/video'

export default async function Home() {
  var videos = await CMSClient.videos.getAsync()

  // Set page title and meta
  metadata.title = "Videos | Segun"
  metadata.description = "Video page"

  return (
    <main role="main" className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex min-w-full flex-col items-center justify-between">
        <GlobalBar />
        <div className="max-w-screen-xl w-full text-sm min-h-[600px] p-6 m-6 flex justify-between flex-wrap">
          {videos.map((video) => <Video video={video} />)}
        </div>
      </div>
      <Footer />
    </main>
  )
}
