import PocketBase from 'pocketbase';

const client = new PocketBase('http://localhost:8090');
const adminData = await client.admins.authViaEmail('nikurb@icloud.com', '123457890');

export const pocketbase = createClient(client, adminData)