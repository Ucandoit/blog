export interface BlogData {
  id: number;
  title: string;
  author: string;
  content: string;

  created_at: Date;
  tags: Tag[];
}

export interface Tag {
  name: string;
}
