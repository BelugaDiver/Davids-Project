import { IVideoClient, Video } from "../interfaces/IVideoClient.interface"

var videoClient: IVideoClient = {
   getAsync: async function (): Promise<Video[]> {
      var options: RequestInit = {
         method: "GET",
         mode: "cors",
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.CMS_TOKEN}`
         }
      }

      var result = await fetch(`${process.env.CMS_Host}/api/videos?populate=*`, options)
      var json = await result.json()
      var data = json["data"] as Video[]

      return data
   },

   getByIdAsync: function (id: string): Promise<Video> {
      throw new Error("Function not implemented.");
   }
}

export default videoClient