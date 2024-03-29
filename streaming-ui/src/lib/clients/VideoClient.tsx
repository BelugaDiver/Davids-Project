import { IVideoClient, Video } from "../interfaces/IVideoClient.interface"

function mapVideo(input: any): Video {
   var video = input["attributes"]
   video.videoId = input.id
   video.url = input["attributes"].video.data.attributes.url

   return video as Video
}

var videoClient: IVideoClient = {
   getAsync: async function (sort: string = ""): Promise<Video[]> {
      var options: RequestInit = {
         method: "GET",
         mode: "cors",
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.CMS_TOKEN}`
         }
      }

      var result = await fetch(`${process.env.CMS_Host}/api/videos?populate=*${sort}`, options)
      var json = await result.json()
      var data = json["data"]
      var videos = data.map((v: any) => mapVideo(v))

      return videos
   },

   getByIdAsync: async function (id: string): Promise<Video> {
      var options: RequestInit = {
         method: "GET",
         mode: "cors",
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.CMS_TOKEN}`
         }
      }

      var result = await fetch(`${process.env.CMS_Host}/api/videos/${id}?populate=*`, options)
      var json = await result.json()
      var data = json["data"]

      return mapVideo(data)
   },

   getVideoViews: async function (host: string, id: string, address) {
      "use server"
      var options: RequestInit = {
         method: "POST",
         mode: "cors",
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.CMS_TOKEN}`
         },
         body: JSON.stringify({
            data: {
               videoId: id,
               IpAddress: address
            }
         })
      }

      var result = await fetch(`${host}/api/views/`, options)
   }
}

export default videoClient