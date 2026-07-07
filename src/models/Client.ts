import type { Client as IClient } from "@/types";

export class ClientModel implements IClient {
  name: string;
  logo: string;
  url: string;

  constructor(client: IClient) {
    this.name = client.name;
    this.logo = client.logo;
    this.url = client.url;
  }
}
