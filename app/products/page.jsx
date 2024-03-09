import { MAIN } from "../_ui/uiContainers";
import { client } from "../_lib/sanity";
import Link from "next/link";
import AddToCart from "../components/AddToCart";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import {
  CategoriesCardsContainer,
  CategoriesContainer,
  CategoryCard,
  CategoryName,
  CategoryTitleAndArrows,
} from "./ProductsPageStyles";
/*
/products

this page contains cards for displaying all categories

*/

const getAllProducts = async () => {
  const queryProducts = `
  *[_type == "product"] {
    name,
    category->{name},
    description,
    images,
  } | order(publishedAt desc)  
  `;

  const res = await client.fetch(queryProducts, {
    // revalidate the query after every hour
    next: { revalidate: 10 },
  });
  return res;
};

// "imageUrl": images[0].asset->url,

// function to list all categories and display them
export const getAllCategories = async () => {
  const queryCategories = `
  *[_type == "category"] {
    name,
    "logoUrl": logo.asset->url
  }
  `;
  const res = await client.fetch(queryCategories, {
    // revalidate the query after every hour
    next: { revalidate: 10 },
  });
  return res;
};

export default async function Products() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <MAIN>
      <CategoriesContainer>
        <CategoryTitleAndArrows>
          <h2>SHOP BY CATEGORY</h2>
          <div>
            <BsFillArrowLeftSquareFill size={30} />
            <BsFillArrowRightSquareFill size={30} />
          </div>
        </CategoryTitleAndArrows>
        <CategoriesCardsContainer>
          {categories.map((category, i) => (
            <CategoryCard
              href={`/products/${category.name}`}
              key={i}
              bgimage={category.logoUrl}
            >
              <CategoryName>{category.name}</CategoryName>
            </CategoryCard>
          ))}
        </CategoriesCardsContainer>
        {/* all products */}
        <div>
          {products.map((product, i) => (
            <div key={i}>
              <h2>{product.name}</h2>
              <h2>{product.category.name}</h2>
              <AddToCart product={product} />
            </div>
          ))}
        </div>
      </CategoriesContainer>
    </MAIN>
  );
}
