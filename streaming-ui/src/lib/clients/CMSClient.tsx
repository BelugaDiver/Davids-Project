import ICMSClient from "../interfaces/ICMSClient.interface";
import homepageCopyClient from "./HomepageCopyClient";
import sectionClient from "./SectionClient";
import videoClient from "./VideoClient";


var CMSClient: ICMSClient = {
   videos: videoClient,
   sections: sectionClient,
   homepageCopy: homepageCopyClient
}

export default CMSClient