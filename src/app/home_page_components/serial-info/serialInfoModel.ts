import {ActorModel} from "./ActorModel";

export class SerialInfoModel{
  id:number
  description:string
  image_url:string
  originalName:string

  premiere:Date
  rating:string
  start_of_filming:string
  status:string
  youtube_trailer_url:string
  audioTracks:Array<any>
  actors:Array<ActorModel>






}
