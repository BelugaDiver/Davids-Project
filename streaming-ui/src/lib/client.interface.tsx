interface HydratedPage {
   title: string,
   description: string
}

interface ICDNClient {
   hydrate(id: string): HydratedPage
}

export default ICDNClient