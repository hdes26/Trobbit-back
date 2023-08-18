export interface IFavorites {
  id: string;
  user_id: string;
  image_id: string;
  sub_id: string;
  created_at: Date;
  image: IImage;
}
export interface IImage {
  id: string;
  url: string;
}
