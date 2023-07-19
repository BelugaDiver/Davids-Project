import Footer from '@/components/footer'
import GlobalBar from '@/components/globalBar'
import { SectionComponent } from '@/components/homepage/sectionComponent'
import CMSClient from '@/lib/clients/CMSClient'
import { metadata } from './layout'

export default async function Home() {
  var sections = await CMSClient.sections.getAsync()

  var sectionComponent = sections.map(section =>
    <SectionComponent key={section.title} section={section} />
  )

  // Set page title and meta
  metadata.title = "Welcome | Segun"
  metadata.description = "Landing page"

  return (
    <main role="main" className="flex min-h-screen flex-col items-center justify-between">
      <GlobalBar />
      <div className="max-w-screen-lg w-full text-sm h-full">
        {sectionComponent}
      </div>
      <Footer />
    </main>
  )
}
