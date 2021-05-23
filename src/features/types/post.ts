import user from "./user";

type post = {
  id: string,
  image: string,
  likes: number,
  link: string,
  publishDate: string,
  tags: string[],
  text: string,
  owner: user
}

export default post;
