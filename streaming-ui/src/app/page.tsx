import Footer from '@/components/footer'
import GlobalBar from '@/components/globalBar'

export default function Home() {
  return (
    <main role="main" className="flex min-h-screen flex-col items-center justify-between">
      <GlobalBar />
      <div className="max-w-screen-xl text-sm w-full px-32 h-full">
        Empty Homepage

      </div>
      <Footer />
    </main>
  )
}
