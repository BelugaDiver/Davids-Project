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
          <p className="px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra nam. Augue interdum velit euismod in. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Sit amet commodo nulla facilisi nullam vehicula. Nibh ipsum consequat nisl vel pretium lectus quam. Egestas dui id ornare arcu. Suscipit adipiscing bibendum est ultricies. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Morbi quis commodo odio aenean.
            <br />
            <br />
            Est sit amet facilisis magna. At quis risus sed vulputate odio ut enim blandit. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Integer quis auctor elit sed. Turpis egestas integer eget aliquet. Ornare suspendisse sed nisi lacus sed. In iaculis nunc sed augue lacus viverra vitae. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Varius quam quisque id diam vel quam. Leo a diam sollicitudin tempor. Tempor commodo ullamcorper a lacus vestibulum. Adipiscing diam donec adipiscing tristique. Commodo viverra maecenas accumsan lacus vel facilisis. At lectus urna duis convallis convallis. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Ligula ullamcorper malesuada proin libero nunc consequat. Eget dolor morbi non arcu risus quis.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}