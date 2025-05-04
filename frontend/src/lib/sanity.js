import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


  export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: process.env.SANITY_API_VERSION,
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



