export interface BlogData {
  id: number;
  title: string;
  author: string;
  content?: string;

  createDate: Date;
  updateDate: Date;
  tags: Tag[];
  summary?: string;
}

export interface Tag {
  name: string;
}
