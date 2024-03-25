"use client";

import { styled } from "styled-components";
import { urlFor } from "@/app/_lib/sanity";
import Image from "next/image";
import { useState } from "react";

export default function ProductImages({ product }) {
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);

  //   function to switch active image
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <ImageDisplayWrapper>
      <BigImage>
        <Image
          src={selectedImage && urlFor(selectedImage.asset?._ref)?.url()}
          alt={product?.name}
          priority
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </BigImage>
      <SwitchImageWrapper>
        {product?.images?.map((image, i) => (
          <SmallImage key={i} onClick={() => handleImageClick(image)}>
            <Image
              src={image && urlFor(image.asset?._ref)?.url()}
              alt={product?.name}
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </SmallImage>
        ))}
      </SwitchImageWrapper>
    </ImageDisplayWrapper>
  );
}

const ImageDisplayWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

const BigImage = styled.div`
  position: relative;
  height: 300px;
  width: 100%;

  img {
    object-fit: contain;
    transition: all 0.3s ease-in-out;
  }
`;

const SwitchImageWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SmallImage = styled(BigImage)`
  height: 60px;
  width: 60px;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid #000;

  &:hover img {
    transform: scale(1.06);
  }
`;
