export interface Log {
    id?: number;
    user: number;
    metodo: string;
    url: string;
    ip: string;
    agent: string;
    query?: string ;
    datos?: any;
  
}