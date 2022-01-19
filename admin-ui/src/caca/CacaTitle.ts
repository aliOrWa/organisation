import { Caca as TCaca } from "../api/caca/Caca";

export const CACA_TITLE_FIELD = "id";

export const CacaTitle = (record: TCaca): string => {
  return record.id || record.id;
};
