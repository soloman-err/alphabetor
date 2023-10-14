import { Account, Client } from 'appwrite';

// Web SDK Init:
// const client = new Client()
//   .setEndpoint('https://cloud.appwrite.io/v1')
//   .setProject('6527e0f85a578f019c34');

// export const account = new Account(client);
// export const databases = new Databases(client);

export const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6527e0f85a578f019c34');

export const account = new Account(client);
export { ID } from 'appwrite';
