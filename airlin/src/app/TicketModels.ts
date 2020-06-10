export interface TicketModels {
    id: number;
    arival: string;
    departure: string;
    date: string;
    child: Boolean;
    user: number;
  }

  export interface TicketModelsReturn {
    arival: string;
    departure: string;
    date: string;
    child: Boolean;
  }

  export interface TicketModelsSend {
    arival: string;
    departure: string;
    date: string;
    child: Boolean;
    user: number;
  }