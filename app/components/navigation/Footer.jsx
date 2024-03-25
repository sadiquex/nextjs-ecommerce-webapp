import { MAIN } from "@/app/_ui/uiContainers";
import {
  Copyright,
  FooterContainer,
  FooterContent,
  SocialWrapper,
} from "./FooterStyles";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterContainer>
      <MAIN>
        <FooterContent>
          <p className="logo">SAQ&CO</p>
          <Copyright>SAQ&CO 2024 | Privacy | Terms to Use</Copyright>
          <SocialWrapper>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagramSquare />
            <FaPinterest />
          </SocialWrapper>
        </FooterContent>
      </MAIN>
    </FooterContainer>
  );
}
