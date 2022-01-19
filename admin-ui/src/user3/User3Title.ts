import { User3 as TUser3 } from "../api/user3/User3";

export const USER3_TITLE_FIELD = "ahmed";

export const User3Title = (record: TUser3): string => {
  return record.ahmed || record.id;
};
