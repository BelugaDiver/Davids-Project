import ICMSClient from "../interfaces/ICMSClient.interface";
import { ISectionClient, Section } from "../interfaces/ISectionClient.Interface";
import { IVideoClient, Video } from "../interfaces/IVideoClient.interface";

var VideoClient: IVideoClient = {
   getAsync: function (): Video[] {
      throw new Error("Function not implemented.");
   },
   getByIdAsync: function (id: string): Video {
      throw new Error("Function not implemented.");
   }
}

var SectionClient: ISectionClient = {
   getAsync: function (): Section[] {
      throw new Error("Function not implemented.");
   },
   getByIdAsync: function (id: string): Section {
      throw new Error("Function not implemented.");
   }
}

var CMSClient: ICMSClient = {
   videos: VideoClient,
   sections: SectionClient
}

export default CMSClient