import { User2 as TUser2 } from "../api/user2/User2";

export const USER2_TITLE_FIELD = "ouisssema";

export const User2Title = (record: TUser2): string => {
  return record.ouisssema || record.id;
};
