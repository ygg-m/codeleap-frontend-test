// Define the interface for the post object
export interface Post {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

export interface rawFetch {
  count: number;
  next: string | null;
  previous: string | null;
  results: [
    {
      id: number;
      username: string;
      created_datetime: string;
      title: string;
      content: string;
    }
  ];
}
