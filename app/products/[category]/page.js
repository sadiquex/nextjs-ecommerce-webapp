// pages/products/[slug].js

import { client } from "@/app/_lib/sanity";
import { MAIN } from "@/app/_ui/uiContainers";
import AddToCart from "@/app/components/AddToCart";
import {
  CategoryContainer,
  CategoryHeader,
  CategoryTitle,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductsCardsContainer,
} from "./CategoryStyles";
import { getAllCategories } from "../page";
import Image from "next/image";

// get products by Category

export const getProductsByCategory = async (category) => {
  const productsByCategory = `*[_type == "product" && category->name == "${category}"] {
    _id,
      "imageUrl": images[0].asset->url,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name,
      price_id
  }`;

  const res = await client.fetch(productsByCategory, {
    // revalidate the query after every hour
    next: { revalidate: 10 },
  });
  return res;
};

export default async function ProductsByCategory({ params }) {
  // query all products using the URL params
  const productsByCategory = await getProductsByCategory(params.category);

  const allCategories = await getAllCategories();

  return (
    <CategoryContainer>
      <CategoryHeader>
        <p>By Category</p>
        <CategoryTitle>{params.category}</CategoryTitle>
        <select>
          {allCategories?.map((category, i) => (
            <option key={i}>{category.name}</option>
          ))}
        </select>
      </CategoryHeader>
      <ProductsCardsContainer>
        {productsByCategory.map((product, i) => (
          // each product's card
          <ProductCard
            key={i}
            href={`/products/${params.category}/${product.slug}`}
          >
            <ProductImage>
              <Image
                src={product.imageUrl}
                alt={product.name}
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </ProductImage>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price}</ProductPrice>
            {/* pass the product as a prop to the cart */}
            {/* <AddToCart product={product} /> */}
            {/* <button>View Item</button> */}
          </ProductCard>
        ))}
      </ProductsCardsContainer>
    </CategoryContainer>
  );
}
