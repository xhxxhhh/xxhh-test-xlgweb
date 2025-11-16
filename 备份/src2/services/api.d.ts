declare module '@/services/api' {
  import { AxiosInstance } from 'axios';
  
  export interface LoginCredentials {
    username: string;
    password: string;
  }
  
  export interface RegisterData {
    username: string;
    email: string;
    password: string;
  }
  
  export interface User {
    id: number;
    username: string;
    email: string;
    created_at: string;
  }
  
  export interface AuthResponse {
    message: string;
    token: string;
    user: User;
  }
  
  export const authAPI: {
    register: (userData: RegisterData) => Promise<{ data: AuthResponse }>;
    login: (credentials: LoginCredentials) => Promise<{ data: AuthResponse }>;
    getUser: () => Promise<{ data: { user: User } }>;
  };
  
  const api: AxiosInstance;
  export default api;
}