export interface Post{
  title: string;
  author:string;
  selftext:string;
  score: number;
  url:string;
  permalink:string;
  thumbnail?: string;
  subreddit_name_prefixed: string;
  fallback_url: string;
  num_comments:string;
}
