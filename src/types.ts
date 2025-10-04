export interface BookEntry {
  status: string;
  series: string | null;
  number: string | null;
  title: string;
  author: string | null;
  tags: string[];
}
