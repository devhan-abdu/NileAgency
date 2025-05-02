import { createClient } from '@sanity/client';
import { getProjectsQuery } from './queries';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId: 'olhg782p', 
    dataset: 'production',
    apiVersion: '2025-04-28', 
    useCdn: true, 
    token: process.env.SANITY_WRITE_TOKEN,
  });

export async function fetchProjects() {
  return await client.fetch(getProjectsQuery);
}

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}



