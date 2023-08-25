import { IVideoClient } from "./IVideoClient.interface"
import { ISectionClient } from "./ISectionClient.Interface"
import { IHomepageCopyClient } from "./IHomepageCopyClient.Interface"

interface ICMSClient {
   videos: IVideoClient,
   sections: ISectionClient,
   homepageCopy: IHomepageCopyClient
}

export default ICMSClient