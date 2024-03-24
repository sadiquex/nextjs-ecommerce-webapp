// contains items added to the cart
// display items in the cart

"use client";

import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, removeProduct } from "../redux/cart/cartSlice";
import { styled } from "styled-components";
import Image from "next/image";
import { FaTrashCan } from "react-icons/fa6";
import { BTN } from "../_ui/uiContainers";
import { useShoppingCart } from "use-shopping-cart";

export default function Cart() {
  const dispatch = useDispatch();
  const { itemsInCart, total } = useSelector((state) => state.cart);
  // const { redirectToCheckout } = useShoppingCart();

  // const handleCheckout = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const result = await redirectToCheckout(itemsInCart);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <ItemsWrapper>
      <CardsContainer>
        {itemsInCart.length === 0 ? (
          <p>Nothing in cart, continue shopping</p>
        ) : (
          itemsInCart?.map((item, i) => (
            <ItemCard key={i}>
              <ItemImage>
                <Image
                  src={item?.imageUrl}
                  alt={item.name}
                  priority
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </ItemImage>

              <ItemText>
                <NameAndAmount>
                  <ItemName>
                    {/* trim to show only 5 words */}
                    {item.name.split(" ").slice(0, 5).join(" ")}...
                  </ItemName>
                  <Amount>${item.price * item.quantity}</Amount>
                </NameAndAmount>

                {/* down */}
                <Buttons>
                  <div>
                    <BTN>-</BTN>
                    <BTN>{item.quantity}</BTN>
                    <BTN>+</BTN>
                  </div>

                  <FaTrashCan
                    size={24}
                    onClick={() => dispatch(removeProduct(item))}
                  />
                </Buttons>
              </ItemText>
            </ItemCard>
          ))
        )}
      </CardsContainer>
      <TotalWrapper>
        <hr />
        <TotalAndCheckout>
          <Total>${total}</Total>
          {/* <CheckoutBtn onClick={handleCheckout}>CHECKOUT</CheckoutBtn> */}
          <CheckoutBtn>CHECKOUT</CheckoutBtn>
        </TotalAndCheckout>
      </TotalWrapper>
    </ItemsWrapper>
  );
}

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 90vh;
  gap: 0.5em;
  padding: 1.4rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const ItemCard = styled.div`
  padding: 1rem;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f2f2f2;
  height: 120px;
`;

const ItemImage = styled.div`
  position: relative;
  min-width: 80px;
  min-height: 100%;

  img {
    object-fit: cover;
  }
`;

const ItemText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  gap: 1rem;
`;

const NameAndAmount = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemName = styled.h3`
  font-size: 1rem;
`;

const Amount = styled(ItemName)`
  display: inline;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 6px;
    font-weight: 600;
  }
`;

const TotalWrapper = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  hr {
    width: 100%;
    border: 1px solid #000;
    border-style: dashed;
  }
`;

const TotalAndCheckout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
`;

const Total = styled.div`
  font-size: 2rem;
`;

const CheckoutBtn = styled(BTN)``;
