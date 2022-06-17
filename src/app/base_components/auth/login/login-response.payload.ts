export interface LoginResponse{
  token: string;
  refreshToken: string;
  expireTime: Date;
  userId:number;

}
