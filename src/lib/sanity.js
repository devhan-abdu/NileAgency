import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId: 'olhg782p', 
    dataset: 'production',
    apiVersion: '2025-04-28', 
    useCdn: true, 
    token: process.env.SANITY_WRITE_TOKEN,
  });

  export async function fetchProjects(queries) {
    return await client.fetch(queries);
  }

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}



