import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: '32dr44ij', // Replace with your Sanity project ID
    dataset: 'production', // Replace with your dataset (e.g., 'production')
    useCdn: true, // Set true for faster, cached queries
    apiVersion: '2023-01-01', // Replace with the current date
});
