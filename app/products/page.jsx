import { MAIN } from "../_ui/uiContainers";
import { client } from "../_lib/sanity";
import AddToCart from "../components/AddToCart";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import {
  CategoriesCardsContainer,
  CategoriesContainer,
  CategoryCard,
  CategoryName,
  CategoryTitleAndArrows,
  ProductsContainer,
} from "./ProductsPageStyles";
import {
  ProductCard,
  ProductImage,
  ProductsCardsContainer,
} from "./[category]/CategoryStyles";
import Image from "next/image";

/*
/products

this page contains cards for displaying all categories

*/

const getAllProducts = async () => {
  const queryProducts = `
  *[_type == "product"] {
    name,
    price,
    category->{name},
    description,
    "slug": slug.current,
    "imageUrl": images[0].asset->url,
  } | order(publishedAt desc)  
  `;

  const res = await client.fetch(queryProducts, {
    // revalidate the query after every hour
    next: { revalidate: 360 },
  });
  return res;
};

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
    next: { revalidate: 360 },
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
        <ProductsContainer>
          {products.map((product, i) => (
            <ProductCard
              key={i}
              href={`/products/${product.category.name}/${product.slug}`}
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
              <h2>{product.name}</h2>
              <h2>${product.price}</h2>
              <h2 style={{ fontWeight: "600", fontSize: "1.2rem" }}>
                {product.category.name}
              </h2>
              {/* <AddToCart product={product} /> */}
            </ProductCard>
          ))}
        </ProductsContainer>
      </CategoriesContainer>
    </MAIN>
  );
}
