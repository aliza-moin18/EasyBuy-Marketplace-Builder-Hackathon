// lib/sanity.js
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'dh190t1a', 
  dataset: 'production', 
  useCdn: true, 
});

export default client;