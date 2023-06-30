import { IVideoClient } from "./IVideoClient.interface"
import { ISectionClient } from "./ISectionClient.Interface"

interface ICMSClient {
   videos: IVideoClient,
   sections: ISectionClient
}

export default ICMSClient