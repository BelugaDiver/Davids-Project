import Footer from '@/components/footer'
import GlobalBar from '@/components/globalBar'
import { SectionComponent } from '@/components/homepage/sectionComponent'
import CMSClient from '@/lib/clients/CMSClient'
import { Section } from '@/lib/interfaces/ISectionClient.Interface'
import { useEffect } from 'react'

export default async function Home() {
  var sections = await CMSClient.sections.getAsync()

  var sectionComponent = sections.map(section =>
    <SectionComponent key={section.title} section={section} />
  )

  return (
    <main role="main" className="flex min-h-screen flex-col items-center justify-between">
      <GlobalBar />
      <div className="max-w-screen-xl w-full text-sm px-32 h-full">
        {sectionComponent}
      </div>
      <Footer />
    </main>
  )
}
