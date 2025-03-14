import { UserInfo } from "@/components/view_users/types";

export interface UserInfoResponse {
  user_id: string;
  user_info: UserInfo;
  keys: Array<{
    token: string;
    [key: string]: any;
  }>;
  teams: Array<any>;
}
