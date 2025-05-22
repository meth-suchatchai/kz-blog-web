export interface LoginReq {
  mobile_number: string;
  password: string;
}

export interface LoginRes {
  access_token: string;
  refresh_token: string;
  user: {
    id: number;
    name: string;
    email: string;
    mobile_number: string;
    role: string;
    created_at: string;
    updated_at: string;
  };
}
