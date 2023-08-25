import Footer from '@/components/footer'
import GlobalBar from '@/components/globalBar'
import { SectionComponent } from '@/components/homepage/sectionComponent'
import CMSClient from '@/lib/clients/CMSClient'
import { metadata } from './layout'
import InfoOutlined from '@mui/icons-material/InfoOutlined'


export default async function Home() {
  var sections = await CMSClient.sections.getAsync()

  var sectionComponent = sections.map(section =>
    <SectionComponent key={section.title} section={section} />
  )

  var copy = await CMSClient.homepageCopy.getAsync()
  console.log(copy)
  var homepageCopy = copy.map(c =>
    <div>
      <p className='px-2' key={c.Copy}>{c.Copy}</p>
      <br />
    </div>
  )

  // Set page title and meta
  metadata.title = "Welcome | Segun"
  metadata.description = "Landing page"

  return (
    <main role="main" className="flex min-h-screen flex-col items-center justify-between">
      {/* <PictureAnimation /> */}
      <GlobalBar />
      <div className="max-w-screen-lg w-full text-sm flex-1">
        {sectionComponent}
        <div id='about' className="px-2 py-1 mb-6">
          <h1 className="text-4xl font-bold py-1 flex items-center"><InfoOutlined color="primary" fontSize="large" />About</h1>
          {homepageCopy}
        </div>
      </div>
      <Footer />
    </main>
  )
}