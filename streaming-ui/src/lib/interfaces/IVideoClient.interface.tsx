export interface IVideoClient {
   getAsync(): Promise<Video[]>,
   getByIdAsync(id: string): Promise<Video>
}

export type Video = {
   name: string,
   description: string,
   createdDate: Date,
   views: number,
   videoid: string,
   thumbnail: string,
   url: string
}