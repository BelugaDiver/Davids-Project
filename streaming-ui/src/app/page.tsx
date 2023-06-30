import Footer from '@/components/footer'
import GlobalBar from '@/components/globalBar'
import { SectionComponent } from '@/components/homepage/sectionComponent'
import { Section } from '@/lib/interfaces/ISectionClient.Interface'

export default function Home() {
  var sections: Section[] = [
    {
      title: "Embrace fitness to unlock a healthier future",
      body: "Use these videos to teach you how to live a more fulfilling life.",
      background: "mediaurl",
      justify: "left",
      size: "large"
    },
    {
      title: "Title",
      body: "Long form of text and sentences.",
      background: "mediaurl",
      justify: "left",
      size: "small"
    }
  ]

  var sectionComponent = sections.map(section =>
    <li><SectionComponent key={section.title} section={section} /></li>
  )

  return (
    <main role="main" className="flex min-h-screen flex-col items-center justify-between">
      <GlobalBar />
      <div className="max-w-screen-xl text-sm w-full px-32 h-full">
        <ul>{sectionComponent}</ul>
      </div>
      <Footer />
    </main>
  )
}
