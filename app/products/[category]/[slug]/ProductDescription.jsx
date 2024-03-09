"use client";
import { BTN } from "@/app/_ui/uiContainers";
import AddToCart from "@/app/components/AddToCart";
import { addProduct } from "@/app/redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";

export default function ProductDescription({ product }) {
  const dispatch = useDispatch();

  console.log(product);
  console.log("ada");

  //   dispatch a function to add received prop(product) to the cart
  const handleAddToCart = () => {
    dispatch(addProduct({ ...product }));
  };

  return (
    <DescriptionWrapper>
      <Description>{product.description}</Description>
      <QtyAndPrice>
        <h3>Quantity:</h3>
        <Quantity>
          <BTN>-</BTN>
          <BTN>1</BTN>
          <BTN>+</BTN>
        </Quantity>
        <Price>${product.price}</Price>
      </QtyAndPrice>

      <Buttons>
        <AddToCartBtn onClick={handleAddToCart}>Add to cart</AddToCartBtn>
        {/* go straight to stripe page */}
        <BuyNowBtn>Buy Now</BuyNowBtn>
      </Buttons>
    </DescriptionWrapper>
  );
}

const DescriptionWrapper = styled.div`
  flex: 1;
  background: #e5e5e5;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 960px) {
    padding: 1rem;
  }
`;

const Description = styled.p`
  line-height: 1.4;
  font-size: 1rem;
`;

const QtyAndPrice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;

  h3 {
    font-weight: 600;
  }
`;

const Quantity = styled.div`
  button {
    /* border: 2px solid #000; */
  }
`;

const Price = styled.h3`
  font-size: 2rem;
  font-weight: 600;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;

  button {
    flex: 1;
    text-transform: uppercase;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const AddToCartBtn = styled(BTN)`
  background: transparent;
  border: 2px solid #141415;

  &:hover {
    background: #141415;
    color: #fff;
  }
`;

const BuyNowBtn = styled(AddToCartBtn)`
  background: #b6002c;
  color: #fff;
  border: 2px solid #b6002c;

  &:hover {
    background: transparent;
    color: #b6002c;
  }
`;
