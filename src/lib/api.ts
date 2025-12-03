import { Message } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export interface ChatResponse {
  message: string;
  timestamp: Date
}

export interface ErrorResponse {
  error: string;
  details?: string
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          error: 'An error occurred',
          details: response.statusText,
        }));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error('An unexpected error occurred')
    }
  }

  async sendMessage(message: string, conversationHistory: Message[]): Promise<ChatResponse> {
    const messages = conversationHistory.map(msg => ({
      role: msg.role,
      content: msg.content,
    }));

    messages.push({
      role: 'user',
      content: message,
    });

    const response = await this.request<ChatResponse>('/chat', {
      method: 'POST',
      body: JSON.stringify({ messages }),
    });

    return {
      ...response,
      timestamp: new Date(response.timestamp),
    }
  }

  async getProducts(): Promise<any[]> {
    return this.request<any[]>('/products')
  }

  async getInventoryStats(): Promise<any> {
    return this.request<any>('/inventory/stats')
  }

  async healthCheck(): Promise<{ status: string; timestamp: Date }> {
    const response = await this.request<{ status: string; timestamp: Date }>('/health');
    return {
      ...response,
      timestamp: new Date(response.timestamp),
    }
  }
}

export const apiClient = new ApiClient();

export default apiClient;
