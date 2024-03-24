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
              SAQ&CO began in Accra as a passion project among a group of
              friends who shared a common frustration with the lack of options
              for quality products in the online shopping landscape.
              Dissatisfied with the overwhelming array of mediocre offerings and
              impersonal shopping experiences, they envisioned creating a
              platform that would prioritize quality, authenticity, and customer
              satisfaction above all else.
              <br />
              What started as a small-scale endeavor quickly gained momentum as
              word spread about SAQ&COs unique approach to ecommerce. Customers
              were drawn to the platforms curated selection of premium goods,
              personalized service, and dedication to ethical business
              practices.
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
                products to fit our customers modern and evolving lifestyles.
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
