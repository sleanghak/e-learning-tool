export interface PaginationInterface<T> {
  pages: number;
  content: T[];
  total: number;
  pageNumber: number;
}

export interface CourseQuery {
  limit?: number;
  page?: number;
}
