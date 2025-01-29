import {  groq } from 'next-sanity';

export const popularCars = groq` *[_type == "car"][4..7]`;
export const allcars = groq` *[_type == "car"]`;