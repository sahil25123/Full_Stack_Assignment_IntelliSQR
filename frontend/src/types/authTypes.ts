export interface LoginFormData {
    uid: string;
    password: string;
  }
  
  export interface LoginResponse {
    token: string;
    user: {
      id: string;
      email: string;
    };
  }
  
  export interface ApiError {
    message: string;
    statusCode: number;
  }