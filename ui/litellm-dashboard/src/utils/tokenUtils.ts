import { jwtDecode, JwtPayload } from "jwt-decode";

interface UserInfo {
  user_id: string;
  user_info: {
    user_role: string;
    user_email: string;
    [key: string]: any;
  };
  [key: string]: any;
}

export function generateToken(userInfo: UserInfo): string {
  // 创建 token payload
  const payload = {
    user_id: userInfo.user_id,
    user_role: userInfo.user_info.user_role,
    user_email: userInfo.user_info.user_email,
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24小时过期
    iat: Math.floor(Date.now() / 1000),
  };

  // 使用 Base64 编码 payload
  const encodedPayload = btoa(JSON.stringify(payload));

  // 在实际应用中，你应该使用适当的签名算法
  // 这里我们简单地返回编码后的 payload
  return encodedPayload;
}

export function decodeToken(token: string): JwtPayload {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Error decoding token:", error);
    throw error;
  }
}
