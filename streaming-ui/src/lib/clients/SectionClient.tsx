import { ISectionClient, Section } from "../interfaces/ISectionClient.Interface"

function mapSection(input: any): Section {
   var section = input["attributes"]
   var background = input["attributes"].background.data.attributes.url
   section.background = background;

   return section as Section
}

var sectionClient: ISectionClient = {
   getAsync: async function (): Promise<Section[]> {
      var options: RequestInit = {
         method: "GET",
         mode: "cors",
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.CMS_TOKEN}`
         }
      }

      var result = await fetch(`${process.env.CMS_Host}/api/sections?populate=*`, options)
      var json = await result.json()
      var data = json["data"]
      var sections = data.map((s: any) => mapSection(s)) as Section[]

      return sections
   },

   getByIdAsync: function (id: string): Promise<Section> {
      throw new Error("Function not implemented.");
   }
}

export default sectionClient