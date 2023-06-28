export interface IVideoClient {
   getAsync(): Video[],
   getByIdAsync(id: string): Video
}

export type Video = {
   name: string,
   description: string,
   views: number,
   videoid: string,
   thumbnail: string,
   url: string
}