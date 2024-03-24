/*
/products/furniture/wardrobe-4

the page for each item

*/

import { client } from "@/app/_lib/sanity";
import { MAIN } from "@/app/_ui/uiContainers";
import { ProductContent, ProductName } from "./ProductStyles";
import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";

export const getProductDetails = async (product) => {
  // query the product whose slug is the same as the one from the params
  const getProductDetails = `*[_type == "product" && slug.current == "${product}"][0] {
    _id,
    images,
    "imageUrl": images[0].asset->url,
      price,
      name,
      price_id,
      description,
      "slug": slug.current,
      "categoryName": category->name,
  }`;

  const res = await client.fetch(getProductDetails, {
    // revalidate the query after every hour
    next: { revalidate: 10 },
  });
  return res;
};

export default async function page({ params }) {
  const product = await getProductDetails(params.slug);

  return (
    <MAIN>
      <ProductName>{product?.name}</ProductName>
      <ProductContent>
        <ProductImages product={product} />
        <ProductDescription product={product} />
      </ProductContent>
    </MAIN>
  );
}
