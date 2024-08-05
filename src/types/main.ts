export interface News {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  timeAgo: string;
  commentsCount: number;
  type: string;
  url?: string;
  domain?: string;
}
interface NewsItem {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  timeAgo: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: NewsItem[];
  level?: number;
  commentsCount: number;
  open?: boolean;
}

// Интерфейс получаемых данных для одной новости
export interface NewsItemTransform {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  timeAgo: string;
  content: string;
  url?: string;
  commentsCount: number;
}

export interface Comments extends NewsItem {}
