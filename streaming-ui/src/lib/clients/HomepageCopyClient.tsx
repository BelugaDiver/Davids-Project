import { IHomepageCopyClient, Copy } from "../interfaces/IHomepageCopyClient.Interface"

function mapSection(input: any): Copy {
   var copy = input["attributes"]

   return copy as Copy
}

var homepageCopyClient: IHomepageCopyClient = {
   getAsync: async function (): Promise<Copy[]> {
      var options: RequestInit = {
         method: "GET",
         mode: "cors",
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.CMS_TOKEN}`
         }
      }

      var result = await fetch(`${process.env.CMS_Host}/api/homepage-copies?populate=*`, options)
      var json = await result.json()
      var data = json["data"]
      var copy = data.map((s: any) => mapSection(s)) as Copy[]

      return copy
   }
}

export default homepageCopyClient