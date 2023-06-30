import ICMSClient from "../interfaces/ICMSClient.interface";
import sectionClient from "./SectionClient";
import videoClient from "./VideoClient";


var CMSClient: ICMSClient = {
   videos: videoClient,
   sections: sectionClient
}

export default CMSClient