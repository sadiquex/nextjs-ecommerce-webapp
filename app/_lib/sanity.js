// sanity client to query content from our studio
// (link) to backend

import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "cjzjcm11",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

// create an image url
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
