import Image from "next/image";
import {
  OurStrongHold,
  OurValuesWrapper,
  PageDescription,
  PageHeader,
  PageTitle,
  StoryDescription,
  StoryImage,
  StoryText,
  StoryTitle,
  StoryWrapper,
  ValueCard,
  ValuesContainer,
} from "./AboutStyles";
import { MAIN } from "../_ui/uiContainers";
import { FaHandshake } from "react-icons/fa";
import { PiUniteSquareFill } from "react-icons/pi";
import { BsLightningCharge } from "react-icons/bs";
import { GrGrow } from "react-icons/gr";

export default function About() {
  return (
    <div>
      <PageHeader>
        <PageTitle>Our Story</PageTitle>
        <PageDescription>Developed in Ghana, By Saddik.</PageDescription>
      </PageHeader>

      <MAIN>
        <StoryWrapper>
          <StoryImage>
            <Image
              src="https://images.pexels.com/photos/10048829/pexels-photo-10048829.jpeg"
              alt="Our story"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </StoryImage>
          <StoryText>
            <StoryTitle>How It Started</StoryTitle>
            <StoryDescription>
              Saq&CO was founded in Accra in 2024, with a mission to create an
              apparel brand that would speak to a new generation of creatives
              and entrepreneurs. What once started as a favourite in Montreal’s
              Mile End quickly blossomed into one of Canada’s leading lifestyle
              brands and digital retailers. A certified B Corp, HM&CO is now a
              leader in sustainable fashion and using innovative fabrics from
              nature to make products that are thoughtfully designed to help you
              live better, enjoy more, and feel good in everything you wear.
            </StoryDescription>
          </StoryText>
        </StoryWrapper>
        <OurStrongHold>
          We believe in considering the impact of the choices we make every day
          and view those choices as an opportunity to be better.
        </OurStrongHold>
        <OurValuesWrapper>
          <StoryTitle>Our Values</StoryTitle>
          <ValuesContainer>
            {/* 1 */}
            <ValueCard>
              <FaHandshake size={30} />
              <h2 className="title">Act with purpose</h2>
              <p className="description">
                We design durable products that blend timeless style with
                functional features that help lay the foundation for better
                living.
              </p>
            </ValueCard>
            {/* 2 */}
            <ValueCard>
              <PiUniteSquareFill size={30} />
              <h2 className="title">Create communities</h2>
              <p className="description">
                We bring together a community of passionate and diverse
                individuals who want to be part of something bigger.
              </p>
            </ValueCard>
            {/* 3 */}
            <ValueCard>
              <BsLightningCharge size={30} />
              <h2 className="title">Inspire innovations</h2>
              <p className="description">
                We are a forward-thinking brand that delivers cutting-edge
                products to fit our customers' modern and evolving lifestyles.
              </p>
            </ValueCard>
            {/* 4 */}
            <ValueCard>
              <GrGrow size={30} />
              <h2 className="title">Be authentic</h2>
              <p className="description">
                We are driven by passion. We recognize and celebrate our
                individuality, strengths, and even weaknesses, but remain humble
                and open to improvement.
              </p>
            </ValueCard>
          </ValuesContainer>
        </OurValuesWrapper>
      </MAIN>
    </div>
  );
}
