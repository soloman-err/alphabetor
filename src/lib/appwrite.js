import { Account, Client } from 'appwrite';

export const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6527e0f85a578f019c34');

export const account = new Account(client);
export { ID } from 'appwrite';
