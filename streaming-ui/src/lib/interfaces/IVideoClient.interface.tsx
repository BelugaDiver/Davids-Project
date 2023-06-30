export interface IVideoClient {
   getAsync(): Promise<Video[]>,
   getByIdAsync(id: string): Promise<Video>
}

export type Video = {
   name: string,
   description: string,
   views: number,
   videoid: string,
   thumbnail: string,
   url: string
}