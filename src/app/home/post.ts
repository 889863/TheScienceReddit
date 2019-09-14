export class Post {

  public title: string;
  public ups: number;
  public score: number;
  public thumbnail: string;
  public subreddit_id: string;
  public author: string;
  public is_video: boolean;
  public media_embed: object;

  constructor(title: string, ups: number, score: number, thumbnail: string,
    subreddit_id: string, author: string, is_video: boolean, media_embed: object) {
    this.title = title;
    this.ups = ups;
    this.score = score;
    this.thumbnail = thumbnail;
    this.subreddit_id = subreddit_id;
    this.author = author;
    this.is_video = is_video;
    this.media_embed = media_embed;
  }

}