import { $ok } from "foundation-ts/commons";
import { EntryPerPage } from "../interface/APIContant";

export function validatePage(page: number | undefined): number {
  return $ok(page) && Number(page) > 1 ? Number(page) - 1 : 0;
}
export function validateLimit(limit: number | undefined) {
  return $ok(limit) ? Number(limit) : EntryPerPage;
}
export function countPages(total: number, limit: number) {
  const t = total / validateLimit(limit);
  return t > 1 ? Math.ceil(t) : 1;
}
