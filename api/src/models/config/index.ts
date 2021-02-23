export interface Config {
  port: number;
  apiVersion: string;
  nodeUrl: string;
  databaseUrl: string;
  databaseName: string;
  identityConfig: IdentityConfig;
}

export interface IdentityConfig {
  network: string;
  node: string;
  explorer: string;
}
