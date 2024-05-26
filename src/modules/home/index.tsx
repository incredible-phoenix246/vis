"use client";

import * as React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { cn } from "@/utils";
import useInView from "@/hooks/useInView";
import "./styles.scss";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <section className="w-full relative min-h-full overflow-hidden">
      <div className="w-full h-full max-h-[600px] absolute object-cover">
        <Slider {...settings}>
          {HeroImage.map((image) => (
            <div key={image.id}>
              <Image
                src={image.image}
                alt="heroImage"
                width={1280}
                height={600}
                priority
                loading="eager"
                className="w-full max-h-[650px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-col relative z-10 text-white min-h-[650px] w-full justify-center items-center px-4 sm:px-8 xl:px-16 2xl:px-24 transition-colors duration-500 mt-[70px]">
        <div
          className="flex flex-col items-center text-center text-white
          max-w-[966px] mx-auto"
        >
          <h1 className="text-6xl font-semibold bg-clip-text max-md:text-4xl self-center w-[787px] max-md:max-w-full">
            Maximizing Efficiency in{" "}
            <span
              style={{
                background: "-webkit-linear-gradient(180deg, #00A651, #FFF)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Agro
            </span>
            -Logistics
          </h1>
          <p className="mt-6 text-2xl w-full max-md:max-w-full">
            Empowering Farmers and Agro-Logistics Providers for Reliable,
            Affordable, and Predictable Transport Solutions
          </p>
        </div>
        <div className="flex justify-between pl-[14px]  pr-[8px] min-h-[72px] py-[12px] text-xl leading-6 bg-white rounded-xl border border-solid border-primary border-opacity-60 max-md:flex-wrap max-md:pl-5 min-w-[543px] max-w-[545px] mt-[100px]">
          <input
            type="text"
            id="trackingIdInput"
            placeholder=" Input tracking ID"
            className="outline-none placeholder:text-black/40 text-black  text-[16px] w-full max-w-[320px] px-4"
            // className="sr-only"
            // value={trackingId}

            aria-label="Tracking ID"
          />
          <button
            type="button"
            className="px-16 py-4 text-white whitespace-nowrap bg-primary rounded-xl max-md:px-7 justify-end min-h-[56px]"
            // onClick={onTrack}
          >
            Track
          </button>
        </div>
      </div>
    </section>
  );
};

interface image {
  image: string;
  id: number;
}

export const HeroImage: image[] = [
  {
    id: 1,
    image: "/hero/hero1.png",
  },
  {
    id: 2,
    image: "/hero/hero3.png",
  },
  {
    id: 3,
    image: "/hero/hero3.png",
  },
];

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col p-6 whitespace-nowrap bg-white rounded-2xl border border-solid items-center justify-center shadow-sm border-neutral-200 leading-[140%] text-neutral-900 w-[198px]">
      <div className="flex flex-col  justify-center items-center w-full text-center self-center">
        <div className="mt-1 text-xl text-neutral-600 w-full">{label}</div>
        <div className="text-2xl font-semibold text-black">{value}</div>
      </div>
    </div>
  );
};

const statData = [
  {
    value: "400+",
    label: "Customers",
  },
  {
    value: "1312+",
    label: "trips",
  },
  {
    value: "200+",
    label: "Active Vendors",
  },
  {
    value: "15+",
    label: "Operations Base",
  },
  {
    value: "24/7",
    label: "Availability",
  },
];

function Statistics() {
  return (
    <section className="flex justify-center z-[99] relative bg-white mx-auto items-center py-4 md:py-2 h-full md:h-[182px] md:-mt-[20px] w-full md:w-[70%] rounded-3xl shadow-2xl leading-[150%]">
      <div className="flex w-full items-center justify-between px-5 h-fit">
        {statData.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </section>
  );
}

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const CustomImage = ({ src, alt, className }: ImageProps) => (
  <Image src={src} alt={alt} className={className} width={500} height={500} />
);

const images = [
  {
    src: "/hero/patner1.png",
    alt: "Image 1",
    className: "max-w-full aspect-[1.89] w-[189px] max-md:mt-10",
  },
  {
    src: "/hero/patner2.png",
    alt: "Image 2",
    className:
      "shrink-0 self-stretch my-auto max-w-full aspect-[3.03] w-[190px] max-md:mt-10",
  },
  {
    src: "/hero/patner3.png",
    alt: "Image 3",
    className:
      "shrink-0 self-stretch my-auto max-w-full aspect-[1.92] w-[160px] max-md:mt-10",
  },
  {
    src: "/hero/patner4.png",
    alt: "Image 4",
    className: "w-44 max-w-full aspect-[1.75] max-md:mt-10",
  },
];

const Patners = () => {
  const PatnersRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: PatnersRef });
  const PatnersLogoRef = React.useRef<HTMLDivElement>(null);
  const isInView1 = useInView({ ref: PatnersLogoRef });
  const AboutusRef = React.useRef<HTMLDivElement>(null);
  const isInView2 = useInView({ ref: AboutusRef });

  return (
    <section className="w-full flex flex-col items-center mt-[100px]">
      <div
        ref={PatnersRef}
        className={cn(
          "flex flex-col container items-center max-w-[1000px] px-2 sm:px-4 justify-center mx-auto",
          isInView
            ? "opacity-100 translate-y-0 md:delay-300 duration-500"
            : " opacity-0 translate-y-36"
        )}
      >
        <h2 className="font-semibold text-xl sm:text-3xl lg:text-5xl text-header mb-4 font-montserrat text-primary">
          Our Patners
        </h2>
      </div>
      <section
        className={cn(
          "flex gap-5 max-md:flex-col max-md:gap-0 w-full mx-auto max-w-[1200px]",
          isInView1
            ? "opacity-100 translate-y-0 md:delay-300 duration-500"
            : " opacity-0 translate-y-36"
        )}
        ref={PatnersLogoRef}
      >
        <div className="flex gap-5 w-full max-h-[100px] items-center mx-auto justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn("flex w-full", index > 0 ? "ml-5" : "")}
            >
              <CustomImage key={index} {...image} />
            </div>
          ))}
        </div>
      </section>
      <section
        ref={AboutusRef}
        className={cn(
          "grid grid-cols-2 w-full items-center justify-center mt-[100px] px-4 sm:px-8 xl:px-16 2xl:px-24 my-8 max-md:pt-12 lg:my-20 h-[648px] max-h-[650px]",
          isInView2
            ? "opacity-100 translate-y-0 md:delay-300 duration-500"
            : " opacity-0 translate-y-36"
        )}
        style={{
          backgroundImage: `url("/aboutback.png")`,
          backgroundSize: "cover",
        }}
      >
        <div
          // ref={AboutusRef}
          className={cn("flex flex-col space-y-8")}
        >
          <h2 className="text-2xl font-bold text-primary text-[48px] mb-[30px]">
            About Us
          </h2>
          <div className="text-[18px]">
            <p className="text-black">
              We make back-loading logistics profitable for agro-logistics
              providers and enable farmers/food aggregators move their produce
              from farm to market affordably & predictably. The African
              logistics scene is riddled with infrastructure gaps, high
              operating costs and overly fragmented activities.
            </p>
            <p className="text-black mt-5">
              Viscio express platform serves as a reliable collaboration tool
              for various logistics agents across multiple locations leveraging
              on technology tools and a smart operations framework.
            </p>
          </div>
          <button className="justify-center self-start h-[56px] text-[22px] w-[193px] mt-28 text-2xl font-light text-blue-900 rounded-xl text-center border-t-2 border-r-4 border-b-4 border-l-2 border-blue-900 border-solid max-md:px-5 max-md:mt-10">
            Learn more
          </button>
        </div>
        <div className="flex mt-8 md:mt-0 object-cover justify-end">
          <Image
            src="/hero/rightImage.png"
            alt="Logistics Illustration"
            width={600}
            height={520}
            className="max-w-full h-auto aspect-[1.15] max-md:mt-10 max-md:max-w-full object-cover"
          />
        </div>
      </section>
    </section>
  );
};

const WhatWeDo = () => {
  const SectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: SectionRef });
  return (
    <>
      <section className="w-full flex flex-col px-4 sm:px-8 xl:px-16 2xl:px-24  mt-[100px]">
        <div
          ref={SectionRef}
          className={cn(
            "flex flex-col",
            isInView
              ? "opacity-100 translate-y-0 md:delay-300 duration-500"
              : " opacity-0 translate-y-36"
          )}
        >
          <h1 className="w-full text-5xl font-medium text-primary leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            What we do
          </h1>
          <div className="mt-12 w-full flex items-center justify-center">
            {cardData.map((data, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col",
                  index !== 2
                    ? "w-[37%] max-md:ml-0 max-md:w-full"
                    : "w-[27%] max-md:ml-0 max-md:w-full"
                )}
              >
                <div className="box bg-white">
                  <div className="content flex flex-col justify-center items-start max-w-[320px] max-h-[250px]">
                    <div className="flex flex-col gap-2 items-start">
                      <div className="flex justify-center items-center self-start p-2.5 mt-9 rounded-xl bg-slate-200 bg-opacity-70 h-[62px] w-[62px]">
                        <Image
                          src="/track.png"
                          alt="Decorative icon"
                          width={44}
                          height={44}
                          className="w-11 aspect-square"
                        />
                      </div>
                      <h1 className="mt-3 text-xl font-medium leading-8 text-neutral-900">
                        {data.text}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const cardData = [
  {
    text: "We Minimize Empty Miles for general cargo logistics",
  },
  {
    text: "Re-engineer Food Security by reducing Agro-logistics costs",
  },
  {
    text: "Cut down avoidable Carbon Emissions by un-maximized mobility assets",
  },
];

const locations = [
  {
    image: "/lagos",
    locationName: "Lagos",
  },
  {
    image: "/ogbomoso",
    locationName: "Ogbomosho",
  },
  {
    image: "/akwaibom",
    locationName: "Akwa Ibom",
  },
  {
    image: "/kaduna",
    locationName: "Kaduna",
  },
  {
    image: "/calabar",
    locationName: "calabar",
  },
  {
    image: "/markudi",
    locationName: "markudi",
  },
  {
    image: "/plateau",
    locationName: "plateau",
  },
  {
    image: "/kano",
    locationName: "kano",
  },
];

const CoveredLocation = () => {
  const SectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: SectionRef });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      ref={SectionRef}
      className={cn(
        "flex flex-col bg-black px-4 sm:px-8 xl:px-16 2xl:px-24 py-8 pb-12 mt-[100px]",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500"
          : " opacity-0 translate-y-36"
      )}
    >
      <h2 className="text-5xl font-medium text-white leading-[57.6px] max-md:max-w-full max-md:text-4xl">
        Our Coverage Cities
      </h2>
      <p className="mt-6 text-xl font-light leading-6 text-white w-full md:w-[50%]">
        Our commitment to serve you constantly propels us to enlarge our
        coverage locations to ensure efficient service delivery and proximity to
        our priority channels.
      </p>
      <Slider {...settings} className="mt-[50px]">
        {locations.map((location, index) => (
          <div className="flex w-full max-w-[380px]">
            <div
              style={{
                backgroundImage: `url(/states${location.image}.png)`,
                backgroundSize: "cover",
              }}
              key={index}
              className="relative flex w-full max-w-[380px] items-center justify-center text-2xl font-medium leading-7 mb-[30px] whitespace-nowrap rounded-3xl text-center border border-white border-solid aspect-[0.96] text-zinc-100"
            >
              <span className="capitalize text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
                {location.locationName}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

type CardProps = {
  image: string;
  review: string;
  name: string;
};

const FeedbackcardData: CardProps[] = [
  {
    image: "/feedback",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum tristique id lorem integer massa. Et pretium non turpis id volutpat fringilla dictumst nunc. Laoreet egestas enim quam venenatis tortor proin.",
    name: "Ajani Ben",
  },
  {
    image: "/feedback",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum tristique id lorem integer massa. Et pretium non turpis id volutpat fringilla dictumst nunc. Laoreet egestas enim quam venenatis tortor proin.",
    name: "Ajani Ben",
  },
  {
    image: "/feedback",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum tristique id lorem integer massa. Et pretium non turpis id volutpat fringilla dictumst nunc. Laoreet egestas enim quam venenatis tortor proin.",
    name: "Ajani Ben",
  },
  {
    image: "/feedback",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum tristique id lorem integer massa. Et pretium non turpis id volutpat fringilla dictumst nunc. Laoreet egestas enim quam venenatis tortor proin.",
    name: "Ajani Ben",
  },
];

const Feedbackcard = ({ image, name, review }: CardProps) => (
  <article className="flex flex-col items-center px-12 py-14 w-full bg-white rounded-3xl shadow-xl max-w-[411px]">
    <Image
      src={`${image}.png`}
      alt="feedback"
      className="rounded-full w-[80px] h-[80px]"
      width={80}
      height={80}
      loading="lazy"
    />
    <p className="self-stretch mt-6 text-lg font-light leading-6 text-center">
      {review}
    </p>
    <hr className="shrink-0 mt-8 h-0.5 border-2 border-solid bg-zinc-800 border-zinc-800 w-[134px]" />
    <p className="mt-4 text-xl leading-6">{name}</p>
  </article>
);

const FeedBack = () => {
  const SectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: SectionRef });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section
        ref={SectionRef}
        className={cn(
          "flex flex-col bg-white px-4 sm:px-8 xl:px-16 2xl:px-24 py-8 mt-[100px]",
          isInView
            ? "opacity-100 translate-y-0 md:delay-300 duration-500"
            : " opacity-0 translate-y-36"
        )}
      >
        <h2 className="text-5xl font-medium text-primary leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          What our Customers says
        </h2>
        <p className="mt-6 text-xl font-light leading-6 text-black w-full md:w-[40%]">
          Take a dive into the reviews of what our user have to say about their
          experience at with Viscio Express
        </p>
        <Slider {...settings} className="my-[30px] py-[30px]">
          {FeedbackcardData.map((data, index) => (
            <Feedbackcard {...data} key={index} />
          ))}
        </Slider>
      </section>
    </>
  );
};

const GiveReview = () => {
  const SectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: SectionRef });
  return (
    <>
      <section
        ref={SectionRef}
        className={cn(
          "flex overflow-hidden relative flex-col justify-center items-center p-20 text-white min-h-[492px]",
          isInView
            ? "opacity-100 translate-y-0 md:delay-300 duration-500"
            : " opacity-0 translate-y-36"
        )}
      >
        <Image
          src="/review.png"
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <h1 className="relative mt-5 text-6xl font-semibold text-center max-md:max-w-full max-md:text-4xl">
          Rider&apos;s Reviews
        </h1>
        <p className="relative mt-4 text-2xl text-center w-[785px] max-md:max-w-full">
          Are you a Logistics Operator, looking to employ a new driver/rider for
          your vehicle? Find his past work records here.
        </p>
        <Button className="relative justify-center h-[56px] mt-14 text-xl leading-6 text-white rounded-xl border-t-2 border-r-4 border-b-4 border-l-2 bg-transparent hover:bg-transparent border-white border-solid max-md:px-5 max-md:mt-10">
          See Reviews
        </Button>
      </section>
    </>
  );
};

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="xl:p-24 gap-32 p-12 rounded-2xl bg-gradient-to-r from-primary to-violet-600 flex  justify-between flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-2/6 relative">
            <Image
              src="/phone.png"
              alt="phone"
              width={315}
              height={630}
              className="xl:absolute xl:bottom-0 -mb-12 mx-auto lg:-mb-12 xl:-mb-24 lg:mx-0"
            />
          </div>
          <div className="w-full lg:w-2/3">
            <h2 className="font-manrope text-5xl text-white font-semibold mb-7 text-center lg:text-left">
              Download Viscio Express
            </h2>
            <p className="text-lg text-white leading-8 mb-12 text-center lg:text-left">
              Download our app now from app stores & play store and experience
              the ease of financing on your finger tips.
            </p>
            <div className="flex items-center flex-col gap-7 md:flex-row lg:justify-start justify-center">
              <Link
                href="https://apps.apple.com/us/app/viscio/id1591767811"
                className="cursor-pointer "
              >
                <svg
                  width="134"
                  height="45"
                  viewBox="0 0 134 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_8866_64159)">
                    <path
                      d="M123.217 1.93565e-06H10.6672C10.257 1.93565e-06 9.85164 1.93575e-06 9.44247 0.00225194C9.09995 0.00450194 8.76016 0.0110382 8.41436 0.0165394C7.66311 0.025429 6.91363 0.0918877 6.17243 0.215338C5.43227 0.341476 4.7153 0.579282 4.04576 0.920713C3.37704 1.26503 2.76602 1.71244 2.23485 2.24671C1.70089 2.77947 1.25579 3.39527 0.916674 4.07043C0.576621 4.74425 0.340826 5.46631 0.217435 6.21167C0.0928712 6.95609 0.0258421 7.70909 0.0169496 8.46392C0.00656725 8.80884 0.00547084 9.15491 0 9.49988V35.5034C0.00547084 35.8527 0.00656725 36.1911 0.0169496 36.5406C0.0258448 37.2954 0.0928739 38.0483 0.217435 38.7927C0.340486 39.5385 0.576294 40.261 0.916674 40.935C1.25564 41.608 1.7008 42.2213 2.23485 42.7511C2.764 43.2878 3.37542 43.7355 4.04576 44.0772C4.7153 44.4195 5.43219 44.6587 6.17243 44.7868C6.91376 44.9093 7.66316 44.9758 8.41436 44.9857C8.76016 44.9934 9.09995 44.9978 9.44247 44.9978C9.85163 45 10.257 45 10.6672 45H123.217C123.619 45 124.027 45 124.43 44.9978C124.77 44.9978 125.12 44.9934 125.461 44.9857C126.211 44.9763 126.959 44.9098 127.699 44.7868C128.441 44.6578 129.161 44.4187 129.833 44.0772C130.503 43.7353 131.114 43.2876 131.643 42.7511C132.175 42.2192 132.621 41.6064 132.965 40.935C133.302 40.2605 133.536 39.5381 133.657 38.7927C133.782 38.0482 133.851 37.2954 133.865 36.5406C133.869 36.1911 133.869 35.8527 133.869 35.5034C133.878 35.0947 133.878 34.6883 133.878 34.2729V10.7281C133.878 10.3162 133.878 9.90747 133.869 9.49988C133.869 9.15491 133.869 8.80884 133.865 8.46387C133.851 7.70898 133.782 6.95614 133.657 6.21162C133.536 5.46669 133.302 4.74469 132.965 4.07039C132.274 2.7171 131.179 1.61553 129.833 0.920612C129.161 0.580015 128.441 0.342272 127.699 0.215237C126.959 0.0912426 126.211 0.0247607 125.461 0.0163819C125.12 0.0108919 124.77 0.00429944 124.43 0.00210569C124.027 -0.000144314 123.619 1.93565e-06 123.217 1.93565e-06Z"
                      fill="black"
                    />
                    <path
                      d="M9.44793 44.0157C9.10705 44.0157 8.77442 44.0113 8.43622 44.0037C7.73562 43.9945 7.03666 43.9332 6.34506 43.8202C5.70018 43.7085 5.07547 43.5008 4.49153 43.2038C3.91294 42.9093 3.38523 42.5232 2.92859 42.0601C2.46535 41.6026 2.07968 41.0719 1.78686 40.4891C1.49082 39.9025 1.28594 39.2738 1.17937 38.6247C1.06427 37.9274 1.002 37.2222 0.993088 36.5154C0.985995 36.2781 0.976709 35.4881 0.976709 35.4881V9.49999C0.976709 9.49999 0.986599 8.72216 0.993144 8.49363C1.00168 7.7879 1.06358 7.08384 1.17834 6.38756C1.28511 5.73677 1.49015 5.1062 1.78635 4.51769C2.07809 3.9353 2.46162 3.4042 2.92207 2.945C3.382 2.48143 3.91141 2.09329 4.49098 1.79472C5.07358 1.49872 5.69711 1.29243 6.34069 1.18279C7.03455 1.06868 7.73594 1.00698 8.43897 0.998221L9.44847 0.984485H124.424L125.446 0.998772C126.142 1.0071 126.837 1.06824 127.525 1.18169C128.175 1.29271 128.805 1.50043 129.394 1.79802C130.555 2.39972 131.5 3.35167 132.096 4.52044C132.388 5.10488 132.589 5.7303 132.695 6.37547C132.811 7.07748 132.876 7.78707 132.889 8.49858C132.893 8.81718 132.893 9.15941 132.893 9.49999C132.901 9.92187 132.901 10.3234 132.901 10.7283V34.273C132.901 34.6817 132.901 35.0805 132.893 35.4826C132.893 35.8485 132.892 36.1836 132.888 36.5285C132.875 37.2273 132.811 37.9243 132.697 38.6137C132.593 39.2674 132.389 39.9011 132.093 40.4925C131.798 41.0689 131.414 41.595 130.957 42.0514C130.5 42.5169 129.971 42.9053 129.391 43.2017C128.803 43.5009 128.174 43.7094 127.525 43.8202C126.833 43.9338 126.134 43.9951 125.434 44.0037C125.106 44.0113 124.763 44.0157 124.43 44.0157L123.217 44.018L9.44793 44.0157Z"
                      fill="white"
                    />
                    <path
                      d="M27.9654 22.3759C27.9779 21.3994 28.2359 20.442 28.7152 19.5927C29.1946 18.7434 29.8798 18.0299 30.7071 17.5184C30.1815 16.7637 29.4882 16.1425 28.6822 15.7043C27.8761 15.2662 26.9796 15.023 26.0637 14.9942C24.1101 14.788 22.2161 16.1697 21.2205 16.1697C20.2057 16.1697 18.6729 15.0147 17.0223 15.0488C15.9547 15.0835 14.9142 15.3957 14.0022 15.955C13.0902 16.5142 12.3379 17.3015 11.8184 18.2401C9.56845 22.1574 11.2467 27.9144 13.4021 31.0809C14.4805 32.6314 15.7408 34.3633 17.3899 34.3019C19.0036 34.2346 19.6063 33.2672 21.5542 33.2672C23.484 33.2672 24.0495 34.3019 25.732 34.2628C27.4636 34.2346 28.5546 32.7055 29.5952 31.1403C30.37 30.0355 30.9662 28.8144 31.3617 27.5224C30.3557 27.0945 29.4972 26.3783 28.8932 25.4631C28.2893 24.5479 27.9666 23.4742 27.9654 22.3759Z"
                      fill="black"
                    />
                    <path
                      d="M24.7874 12.9118C25.7316 11.772 26.1967 10.3071 26.0841 8.82812C24.6416 8.98047 23.3092 9.67369 22.3523 10.7697C21.8845 11.3051 21.5261 11.928 21.2978 12.6027C21.0695 13.2775 20.9757 13.9909 21.0217 14.7021C21.7432 14.7096 22.4569 14.5523 23.1092 14.2422C23.7615 13.9321 24.3353 13.4772 24.7874 12.9118Z"
                      fill="black"
                    />
                    <path
                      d="M47.326 30.5288H42.0304L40.7586 34.3048H38.5156L43.5316 20.3345H45.862L50.8779 34.3048H48.5967L47.326 30.5288ZM42.5789 28.7863H46.7765L44.7072 22.6581H44.6493L42.5789 28.7863Z"
                      fill="black"
                    />
                    <path
                      d="M61.7107 29.2126C61.7107 32.3777 60.026 34.4113 57.4836 34.4113C56.8395 34.4452 56.199 34.296 55.6354 33.9808C55.0718 33.6657 54.6078 33.1973 54.2966 32.6293H54.2485V37.6742H52.1693V24.1193H54.1818V25.8134H54.2201C54.5456 25.2481 55.0174 24.7822 55.5853 24.4651C56.1533 24.148 56.796 23.9917 57.4453 24.0127C60.0161 24.0128 61.7107 26.0562 61.7107 29.2126ZM59.5736 29.2126C59.5736 27.1505 58.5138 25.7947 56.8969 25.7947C55.3083 25.7947 54.2398 27.179 54.2398 29.2126C54.2398 31.2648 55.3083 32.6392 56.8969 32.6392C58.5139 32.6392 59.5736 31.2934 59.5736 29.2126Z"
                      fill="black"
                    />
                    <path
                      d="M72.8597 29.2126C72.8597 32.3777 71.1744 34.4113 68.632 34.4113C67.988 34.4452 67.3475 34.296 66.7839 33.9808C66.2202 33.6657 65.7562 33.1973 65.445 32.6293H65.3969V37.6742H63.3178V24.1193H65.3303V25.8134H65.3685C65.694 25.2481 66.1659 24.7822 66.7338 24.4651C67.3017 24.148 67.9445 23.9917 68.5938 24.0127C71.1646 24.0128 72.8597 26.0562 72.8597 29.2126ZM70.7221 29.2126C70.7221 27.1505 69.6623 25.7947 68.0453 25.7947C66.4567 25.7947 65.3882 27.179 65.3882 29.2126C65.3882 31.2648 66.4567 32.6392 68.0453 32.6392C69.6623 32.6392 70.7221 31.2934 70.7221 29.2126Z"
                      fill="black"
                    />
                    <path
                      d="M80.2264 30.4123C80.3804 31.7977 81.7188 32.7073 83.5478 32.7073C85.3002 32.7073 86.5611 31.7976 86.5611 30.5485C86.5611 29.4641 85.8006 28.8148 84.0001 28.3699L82.1996 27.9337C79.6484 27.3141 78.4641 26.1144 78.4641 24.1676C78.4641 21.7572 80.5531 20.1016 83.5183 20.1016C86.4551 20.1016 88.4676 21.7572 88.5353 24.1676H86.4365C86.3109 22.7734 85.1647 21.9319 83.4899 21.9319C81.815 21.9319 80.6689 22.7833 80.6689 24.0226C80.6689 25.0103 81.4009 25.5914 83.1916 26.0363L84.7223 26.4143C87.5727 27.0921 88.756 28.2435 88.756 30.287C88.756 32.9006 86.6867 34.5376 83.3937 34.5376C80.3126 34.5376 78.2324 32.939 78.098 30.4122L80.2264 30.4123Z"
                      fill="black"
                    />
                    <path
                      d="M93.2458 21.7089V24.1193H95.172V25.775H93.2458V31.3901C93.2458 32.2624 93.6315 32.6689 94.4782 32.6689C94.7069 32.6649 94.9352 32.6487 95.1622 32.6205V34.2663C94.7815 34.3378 94.3945 34.3702 94.0073 34.363C91.9566 34.363 91.1568 33.5884 91.1568 31.6131V25.775H89.6841V24.1193H91.1568V21.7089H93.2458Z"
                      fill="black"
                    />
                    <path
                      d="M96.2867 29.2126C96.2867 26.0079 98.1638 23.9941 101.091 23.9941C104.028 23.9941 105.896 26.0078 105.896 29.2126C105.896 32.4261 104.037 34.4311 101.091 34.4311C98.1452 34.4311 96.2867 32.4261 96.2867 29.2126ZM103.777 29.2126C103.777 27.0142 102.775 25.7167 101.091 25.7167C99.406 25.7167 98.4041 27.0241 98.4041 29.2126C98.4041 31.4197 99.406 32.7073 101.091 32.7073C102.775 32.7073 103.777 31.4197 103.777 29.2126Z"
                      fill="black"
                    />
                    <path
                      d="M107.61 24.1193H109.593V25.853H109.641C109.775 25.3115 110.09 24.833 110.534 24.4979C110.978 24.1628 111.523 23.9915 112.077 24.0127C112.317 24.0119 112.556 24.0381 112.79 24.0908V26.0463C112.487 25.9534 112.172 25.9107 111.855 25.92C111.553 25.9077 111.252 25.9612 110.973 26.077C110.693 26.1927 110.442 26.3679 110.236 26.5905C110.03 26.8132 109.875 27.0779 109.78 27.3667C109.686 27.6554 109.655 27.9613 109.689 28.2634V34.3047H107.61L107.61 24.1193Z"
                      fill="black"
                    />
                    <path
                      d="M122.376 31.3132C122.096 33.1622 120.305 34.4311 118.014 34.4311C115.068 34.4311 113.239 32.4459 113.239 29.2609C113.239 26.0661 115.077 23.9941 117.927 23.9941C120.729 23.9941 122.491 25.9299 122.491 29.0181V29.7345H115.337V29.8608C115.304 30.2356 115.351 30.6133 115.474 30.9686C115.598 31.3239 115.795 31.6488 116.052 31.9217C116.31 32.1945 116.623 32.4091 116.969 32.5512C117.316 32.6933 117.688 32.7596 118.062 32.7458C118.554 32.7921 119.047 32.6777 119.468 32.4195C119.89 32.1614 120.217 31.7734 120.401 31.3132L122.376 31.3132ZM115.347 28.2733H120.411C120.43 27.9362 120.379 27.5989 120.262 27.2826C120.145 26.9662 119.964 26.6776 119.731 26.4349C119.497 26.1921 119.217 26.0005 118.906 25.872C118.596 25.7435 118.262 25.6809 117.927 25.6882C117.588 25.6862 117.253 25.7516 116.939 25.8807C116.626 26.0097 116.341 26.1999 116.101 26.4403C115.862 26.6806 115.671 26.9663 115.542 27.2809C115.413 27.5955 115.346 27.9328 115.347 28.2733Z"
                      fill="black"
                    />
                    <path
                      d="M42.3175 9.82296C42.7534 9.7915 43.1908 9.85772 43.5982 10.0168C44.0055 10.1759 44.3727 10.424 44.6732 10.7431C44.9737 11.0621 45.2 11.4443 45.3358 11.862C45.4717 12.2797 45.5136 12.7224 45.4586 13.1584C45.4586 15.3029 44.306 16.5357 42.3175 16.5357H39.9062V9.82296H42.3175ZM40.9431 15.5863H42.2017C42.5132 15.6051 42.8249 15.5537 43.1141 15.436C43.4034 15.3183 43.6629 15.1373 43.8738 14.906C44.0847 14.6747 44.2416 14.3991 44.3332 14.0992C44.4248 13.7992 44.4487 13.4825 44.4032 13.1721C44.4454 12.8629 44.4191 12.5482 44.3261 12.2504C44.2331 11.9527 44.0757 11.6793 43.8653 11.4499C43.6549 11.2204 43.3967 11.0407 43.1091 10.9234C42.8214 10.8061 42.5116 10.7543 42.2017 10.7716H40.9431V15.5863Z"
                      fill="black"
                    />
                    <path
                      d="M46.6303 14.0005C46.5986 13.6676 46.6365 13.3317 46.7414 13.0143C46.8464 12.697 47.0162 12.4053 47.2399 12.1578C47.4636 11.9103 47.7363 11.7126 48.0404 11.5772C48.3445 11.4419 48.6734 11.372 49.006 11.372C49.3386 11.372 49.6675 11.4419 49.9717 11.5772C50.2758 11.7126 50.5485 11.9103 50.7722 12.1578C50.9958 12.4053 51.1656 12.697 51.2706 13.0143C51.3756 13.3317 51.4135 13.6676 51.3818 14.0005C51.4141 14.3337 51.3767 14.6701 51.2719 14.9879C51.1672 15.3057 50.9976 15.598 50.7738 15.846C50.5501 16.094 50.2772 16.2921 49.9727 16.4277C49.6683 16.5633 49.339 16.6334 49.006 16.6334C48.6731 16.6334 48.3438 16.5633 48.0393 16.4277C47.7349 16.2921 47.462 16.094 47.2383 15.846C47.0145 15.598 46.8448 15.3057 46.7401 14.9879C46.6354 14.6701 46.598 14.3337 46.6303 14.0005ZM50.3592 14.0005C50.3592 12.9024 49.8686 12.2602 49.0077 12.2602C48.1435 12.2602 47.6573 12.9024 47.6573 14.0005C47.6573 15.1074 48.1435 15.7446 49.0077 15.7446C49.8686 15.7445 50.3592 15.1029 50.3592 14.0005Z"
                      fill="black"
                    />
                    <path
                      d="M57.6974 16.5355H56.666L55.6248 12.8046H55.5462L54.5093 16.5355H53.4878L52.0991 11.4697H53.1076L54.01 15.3352H54.0843L55.1201 11.4697H56.0739L57.1096 15.3352H57.1883L58.0864 11.4697H59.0806L57.6974 16.5355Z"
                      fill="black"
                    />
                    <path
                      d="M60.2481 11.4697H61.2052V12.2745H61.2795C61.4056 11.9855 61.6181 11.7432 61.8876 11.5814C62.1571 11.4196 62.4701 11.3464 62.7829 11.372C63.028 11.3534 63.2741 11.3906 63.503 11.4807C63.7319 11.5708 63.9377 11.7116 64.1052 11.8925C64.2727 12.0735 64.3975 12.29 64.4705 12.526C64.5434 12.7621 64.5626 13.0116 64.5266 13.2561V16.5355H63.5324V13.5072C63.5324 12.6931 63.1806 12.2882 62.4453 12.2882C62.2789 12.2804 62.1127 12.3089 61.9583 12.3717C61.8038 12.4345 61.6647 12.5302 61.5504 12.6521C61.4362 12.7741 61.3495 12.9194 61.2963 13.0782C61.2431 13.2369 61.2247 13.4054 61.2424 13.572V16.5355H60.2481L60.2481 11.4697Z"
                      fill="black"
                    />
                    <path
                      d="M66.1108 9.49219H67.105V16.5355H66.1108V9.49219Z"
                      fill="black"
                    />
                    <path
                      d="M68.4876 14.0004C68.4559 13.6675 68.4938 13.3316 68.5988 13.0143C68.7038 12.6969 68.8736 12.4051 69.0973 12.1577C69.3211 11.9102 69.5937 11.7124 69.8979 11.5771C70.2021 11.4418 70.531 11.3719 70.8636 11.3719C71.1962 11.3719 71.5251 11.4418 71.8293 11.5771C72.1335 11.7124 72.4061 11.9102 72.6299 12.1577C72.8536 12.4051 73.0234 12.6969 73.1284 13.0143C73.2334 13.3316 73.2713 13.6675 73.2396 14.0004C73.2719 14.3337 73.2344 14.6701 73.1297 14.9879C73.0249 15.3057 72.8552 15.598 72.6315 15.846C72.4077 16.0939 72.1348 16.2921 71.8303 16.4277C71.5259 16.5633 71.1966 16.6333 70.8636 16.6333C70.5306 16.6333 70.2013 16.5633 69.8969 16.4277C69.5924 16.2921 69.3195 16.0939 69.0957 15.846C68.872 15.598 68.7023 15.3057 68.5975 14.9879C68.4928 14.6701 68.4553 14.3337 68.4876 14.0004ZM72.2165 14.0004C72.2165 12.9024 71.7259 12.2602 70.865 12.2602C70.0007 12.2602 69.5146 12.9024 69.5146 14.0004C69.5146 15.1073 70.0008 15.7445 70.865 15.7445C71.7259 15.7445 72.2165 15.1029 72.2165 14.0004Z"
                      fill="black"
                    />
                    <path
                      d="M74.2863 15.1029C74.2863 14.1911 74.9615 13.6654 76.16 13.5907L77.5247 13.5116V13.0743C77.5247 12.5393 77.1729 12.2372 76.4933 12.2372C75.9383 12.2372 75.5537 12.4421 75.4433 12.8002H74.4808C74.5824 11.9301 75.3964 11.372 76.5392 11.372C77.8022 11.372 78.5145 12.0042 78.5145 13.0743V16.5356H77.5574V15.8236H77.4788C77.3191 16.079 77.0949 16.2872 76.8291 16.4269C76.5632 16.5667 76.2652 16.633 75.9656 16.619C75.7541 16.6411 75.5403 16.6185 75.3381 16.5524C75.1359 16.4864 74.9496 16.3785 74.7914 16.2356C74.6332 16.0928 74.5065 15.9182 74.4195 15.7231C74.3325 15.528 74.2871 15.3167 74.2863 15.1029ZM77.5247 14.6701V14.2466L76.2944 14.3257C75.6007 14.3723 75.286 14.6096 75.286 15.0562C75.286 15.5122 75.6793 15.7775 76.2202 15.7775C76.3786 15.7936 76.5387 15.7775 76.6909 15.7302C76.843 15.6828 76.9842 15.6052 77.1059 15.5019C77.2276 15.3985 77.3274 15.2717 77.3993 15.1288C77.4713 14.9859 77.5139 14.8299 77.5247 14.6701Z"
                      fill="black"
                    />
                    <path
                      d="M79.8217 14.0004C79.8217 12.3997 80.64 11.3857 81.9128 11.3857C82.2277 11.3711 82.5402 11.4469 82.8137 11.6043C83.0873 11.7617 83.3107 11.9941 83.4577 12.2744H83.532V9.49219H84.5263V16.5355H83.5735V15.7352H83.4949C83.3365 16.0136 83.1053 16.2431 82.8264 16.3989C82.5476 16.5547 82.2316 16.6308 81.9129 16.619C80.6313 16.6191 79.8217 15.605 79.8217 14.0004ZM80.8487 14.0004C80.8487 15.0749 81.3524 15.7215 82.1948 15.7215C83.0327 15.7215 83.5506 15.0656 83.5506 14.0048C83.5506 12.9491 83.0273 12.2838 82.1948 12.2838C81.3578 12.2838 80.8487 12.9348 80.8487 14.0004Z"
                      fill="black"
                    />
                    <path
                      d="M88.6393 14.0004C88.6076 13.6675 88.6455 13.3317 88.7505 13.0143C88.8554 12.697 89.0252 12.4052 89.2489 12.1578C89.4726 11.9103 89.7453 11.7125 90.0494 11.5772C90.3536 11.4419 90.6825 11.372 91.015 11.372C91.3476 11.372 91.6765 11.4419 91.9807 11.5772C92.2848 11.7125 92.5575 11.9103 92.7812 12.1578C93.0049 12.4052 93.1746 12.697 93.2796 13.0143C93.3846 13.3317 93.4225 13.6675 93.3908 14.0004C93.4231 14.3337 93.3857 14.6701 93.281 14.9879C93.1763 15.3057 93.0066 15.598 92.7828 15.846C92.5591 16.094 92.2862 16.2921 91.9818 16.4277C91.6773 16.5633 91.348 16.6334 91.015 16.6334C90.6821 16.6334 90.3528 16.5633 90.0483 16.4277C89.7439 16.2921 89.471 16.094 89.2473 15.846C89.0235 15.598 88.8538 15.3057 88.7491 14.9879C88.6444 14.6701 88.607 14.3337 88.6393 14.0004ZM92.3682 14.0004C92.3682 12.9024 91.8776 12.2602 91.0167 12.2602C90.1525 12.2602 89.6663 12.9024 89.6663 14.0005C89.6663 15.1073 90.1525 15.7445 91.0167 15.7445C91.8776 15.7445 92.3682 15.1029 92.3682 14.0004Z"
                      fill="black"
                    />
                    <path
                      d="M94.7248 11.4697H95.6819V12.2745H95.7562C95.8823 11.9855 96.0948 11.7432 96.3643 11.5814C96.6338 11.4196 96.9468 11.3464 97.2596 11.372C97.5047 11.3534 97.7508 11.3906 97.9797 11.4807C98.2086 11.5708 98.4144 11.7115 98.5819 11.8925C98.7494 12.0734 98.8742 12.29 98.9472 12.526C99.0201 12.7621 99.0393 13.0116 99.0033 13.2561V16.5355H98.0091V13.5072C98.0091 12.6931 97.6573 12.2882 96.922 12.2882C96.7556 12.2804 96.5894 12.3089 96.435 12.3717C96.2805 12.4345 96.1414 12.5302 96.0271 12.6521C95.9129 12.774 95.8262 12.9194 95.773 13.0782C95.7198 13.2369 95.7014 13.4054 95.7191 13.572V16.5355H94.7248V11.4697Z"
                      fill="black"
                    />
                    <path
                      d="M104.621 10.2085V11.4928H105.713V12.3349H104.621V14.9398C104.621 15.4704 104.839 15.7028 105.334 15.7028C105.46 15.7024 105.587 15.6946 105.713 15.6797V16.5124C105.534 16.5446 105.353 16.5617 105.172 16.5635C104.066 16.5635 103.626 16.1724 103.626 15.1957V12.3349H102.826V11.4928H103.626V10.2085H104.621Z"
                      fill="black"
                    />
                    <path
                      d="M107.071 9.49219H108.057V12.2838H108.135C108.267 11.9921 108.486 11.7484 108.761 11.586C109.036 11.4236 109.354 11.3504 109.671 11.3763C109.915 11.363 110.159 11.4039 110.385 11.4962C110.612 11.5885 110.815 11.7299 110.981 11.9103C111.146 12.0907 111.27 12.3056 111.344 12.5398C111.418 12.7739 111.439 13.0215 111.406 13.2649V16.5355H110.411V13.5115C110.411 12.7024 110.036 12.2926 109.334 12.2926C109.163 12.2785 108.991 12.3021 108.83 12.3618C108.669 12.4215 108.523 12.5158 108.403 12.6381C108.282 12.7605 108.189 12.9079 108.131 13.07C108.073 13.2322 108.05 13.4052 108.065 13.5769V16.5355H107.071L107.071 9.49219Z"
                      fill="black"
                    />
                    <path
                      d="M117.203 15.1677C117.068 15.6307 116.775 16.0312 116.376 16.2991C115.977 16.567 115.497 16.6853 115.02 16.6333C114.688 16.6421 114.359 16.5782 114.054 16.446C113.749 16.3138 113.476 16.1164 113.255 15.8676C113.033 15.6188 112.868 15.3246 112.771 15.0053C112.674 14.686 112.648 14.3493 112.693 14.0186C112.649 13.6868 112.676 13.3494 112.773 13.0291C112.87 12.7089 113.034 12.4133 113.254 12.1623C113.474 11.9114 113.745 11.7109 114.049 11.5746C114.353 11.4382 114.683 11.3691 115.016 11.372C116.418 11.372 117.263 12.335 117.263 13.9257V14.2746H113.706V14.3306C113.69 14.5165 113.714 14.7036 113.774 14.88C113.835 15.0563 113.931 15.218 114.058 15.3546C114.184 15.4912 114.337 15.5998 114.508 15.6734C114.678 15.747 114.862 15.7839 115.048 15.7818C115.285 15.8105 115.526 15.7675 115.74 15.6581C115.953 15.5488 116.129 15.3781 116.246 15.1677L117.203 15.1677ZM113.706 13.5352H116.25C116.263 13.3651 116.24 13.1944 116.183 13.0338C116.126 12.8733 116.036 12.7265 115.919 12.6029C115.803 12.4793 115.661 12.3816 115.505 12.3162C115.348 12.2507 115.18 12.2189 115.01 12.2229C114.838 12.2207 114.668 12.2531 114.509 12.3183C114.349 12.3835 114.205 12.4801 114.083 12.6024C113.961 12.7247 113.865 12.8703 113.801 13.0305C113.736 13.1906 113.704 13.3623 113.706 13.5352Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8866_64159">
                      <rect width="133.878" height="45" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=ng.com.viscio.viscio"
                className="cursor-pointer "
              >
                <svg
                  width="153"
                  height="45"
                  viewBox="0 0 153 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_8866_64160)">
                    <path
                      d="M146.733 0H6.48866C3.39048 0 0.878906 2.5184 0.878906 5.625V39.375C0.878906 42.4816 3.39048 45 6.48866 45H146.733C149.831 45 152.342 42.4816 152.342 39.375V5.625C152.342 2.5184 149.831 0 146.733 0Z"
                      fill="white"
                    />
                    <path
                      d="M146.733 0.9C147.982 0.9 149.181 1.39781 150.065 2.28392C150.948 3.17003 151.445 4.37185 151.445 5.625V39.375C151.445 40.6281 150.948 41.83 150.065 42.7161C149.181 43.6022 147.982 44.1 146.733 44.1H6.48866C5.23891 44.1 4.04035 43.6022 3.15664 42.7161C2.27293 41.83 1.77647 40.6281 1.77647 39.375V5.625C1.77647 4.37185 2.27293 3.17003 3.15664 2.28392C4.04035 1.39781 5.23891 0.9 6.48866 0.9H146.733ZM146.733 0H6.48866C5.00086 0 3.574 0.592632 2.52197 1.64752C1.46993 2.70242 0.878906 4.13316 0.878906 5.625V39.375C0.878906 40.8668 1.46993 42.2976 2.52197 43.3525C3.574 44.4074 5.00086 45 6.48866 45H146.733C148.22 45 149.647 44.4074 150.699 43.3525C151.751 42.2976 152.342 40.8668 152.342 39.375V5.625C152.342 4.13316 151.751 2.70242 150.699 1.64752C149.647 0.592632 148.22 0 146.733 0Z"
                      fill="black"
                    />
                    <path
                      d="M24.1261 21.8462L12.1773 34.5587C12.3079 35.0396 12.5469 35.4839 12.8759 35.8573C13.2049 36.2308 13.6152 36.5234 14.0749 36.7126C14.5347 36.9018 15.0317 36.9825 15.5275 36.9484C16.0233 36.9144 16.5047 36.7665 16.9344 36.5162L30.3978 28.7312L24.1261 21.8462Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M36.2099 19.6862L30.3982 16.3112L23.8684 22.15L30.4206 28.7313L36.1986 25.3563C36.7123 25.0804 37.1416 24.67 37.441 24.1688C37.7403 23.6675 37.8984 23.0942 37.8984 22.51C37.8984 21.9258 37.7403 21.3525 37.441 20.8512C37.1416 20.35 36.7123 19.9396 36.1986 19.6637L36.2099 19.6862Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M12.1773 10.4387C12.118 10.7045 12.0916 10.9765 12.0988 11.2487V33.7488C12.1008 34.0299 12.1385 34.3097 12.211 34.5812L24.5525 22.2062L12.1773 10.4387Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M24.2156 22.4988L30.3976 16.3L16.9342 8.4925C16.4283 8.191 15.8509 8.03167 15.2625 8.03125C14.5527 8.03329 13.8631 8.26881 13.2997 8.70168C12.7363 9.13454 12.3301 9.74083 12.1434 10.4275L24.2156 22.4988Z"
                      fill="#34A853"
                    />
                    <path
                      d="M77.3306 24.465C76.3853 24.4672 75.4619 24.7505 74.6771 25.2789C73.8924 25.8074 73.2815 26.5573 72.9218 27.4339C72.5621 28.3104 72.4698 29.2743 72.6563 30.2035C72.8429 31.1327 73.3001 31.9856 73.9701 32.6542C74.6401 33.3229 75.4928 33.7773 76.4204 33.9601C77.3479 34.1428 78.3087 34.0457 79.1812 33.6809C80.0537 33.3161 80.7987 32.7001 81.3221 31.9107C81.8454 31.1214 82.1235 30.1941 82.1213 29.2463C82.1305 28.6139 82.0126 27.9862 81.7748 27.4005C81.537 26.8148 81.1841 26.2831 80.7371 25.8369C80.2901 25.3908 79.7582 25.0395 79.1729 24.8038C78.5877 24.5681 77.9611 24.4529 77.3306 24.465ZM77.3306 32.1488C76.7512 32.1894 76.173 32.0543 75.6712 31.7611C75.1694 31.4678 74.7671 31.03 74.5168 30.5045C74.2664 29.979 74.1795 29.3901 74.2673 28.8144C74.3551 28.2387 74.6136 27.7028 75.0092 27.2764C75.4048 26.85 75.9192 26.5528 76.4855 26.4234C77.0518 26.294 77.6438 26.3384 78.1846 26.5508C78.7254 26.7633 79.1899 27.134 79.5178 27.6147C79.8457 28.0954 80.0219 28.6639 80.0233 29.2463C80.0413 29.6153 79.9855 29.9842 79.8592 30.3312C79.7328 30.6783 79.5384 30.9964 79.2874 31.267C79.0365 31.5375 78.734 31.7549 78.3979 31.9063C78.0619 32.0577 77.6989 32.1402 77.3306 32.1488ZM66.874 24.465C65.9287 24.4672 65.0053 24.7505 64.2205 25.2789C63.4358 25.8074 62.8249 26.5573 62.4653 27.4339C62.1056 28.3104 62.0132 29.2743 62.1998 30.2035C62.3864 31.1327 62.8436 31.9856 63.5135 32.6542C64.1835 33.3229 65.0362 33.7773 65.9638 33.9601C66.8914 34.1428 67.8521 34.0457 68.7246 33.6809C69.5971 33.3161 70.3421 32.7001 70.8655 31.9107C71.3888 31.1214 71.6669 30.1941 71.6647 29.2463C71.6739 28.6139 71.556 27.9862 71.3182 27.4005C71.0804 26.8148 70.7275 26.2831 70.2805 25.8369C69.8335 25.3908 69.3016 25.0395 68.7163 24.8038C68.1311 24.5681 67.5046 24.4529 66.874 24.465ZM66.874 32.1488C66.2946 32.1894 65.7164 32.0543 65.2146 31.7611C64.7128 31.4678 64.3105 31.03 64.0602 30.5045C63.8098 29.979 63.7229 29.3901 63.8107 28.8144C63.8985 28.2387 64.157 27.7028 64.5526 27.2764C64.9482 26.85 65.4626 26.5528 66.0289 26.4234C66.5952 26.294 67.1872 26.3384 67.728 26.5508C68.2688 26.7633 68.7333 27.134 69.0613 27.6147C69.3892 28.0954 69.5653 28.6639 69.5667 29.2463C69.5848 29.6153 69.529 29.9842 69.4026 30.3312C69.2762 30.6783 69.0818 30.9964 68.8308 31.267C68.5799 31.5375 68.2774 31.7549 67.9414 31.9063C67.6053 32.0577 67.2424 32.1402 66.874 32.1488ZM54.4428 25.9388V27.9638H59.2896C59.2136 28.9175 58.8182 29.8175 58.1677 30.5175C57.6815 31.0142 57.0967 31.403 56.4512 31.6588C55.8057 31.9146 55.1138 32.0317 54.4203 32.0025C52.9921 32.0025 51.6223 31.4336 50.6123 30.4209C49.6024 29.4082 49.035 28.0347 49.035 26.6025C49.035 25.1703 49.6024 23.7968 50.6123 22.7841C51.6223 21.7714 52.9921 21.2025 54.4203 21.2025C55.7896 21.1821 57.1118 21.7035 58.1003 22.6538L59.5252 21.225C58.8565 20.5618 58.0625 20.0391 57.1898 19.6875C56.3171 19.336 55.3832 19.1626 54.4428 19.1775C53.4454 19.1386 52.4504 19.302 51.5174 19.6578C50.5845 20.0137 49.7328 20.5548 49.0134 21.2486C48.294 21.9425 47.7217 22.7748 47.3307 23.6957C46.9398 24.6167 46.7383 25.6072 46.7383 26.6081C46.7383 27.609 46.9398 28.5996 47.3307 29.5205C47.7217 30.4415 48.294 31.2738 49.0134 31.9676C49.7328 32.6615 50.5845 33.2025 51.5174 33.5584C52.4504 33.9143 53.4454 34.0777 54.4428 34.0388C55.4025 34.0772 56.3595 33.9116 57.2509 33.5529C58.1423 33.1942 58.948 32.6505 59.615 31.9575C60.7932 30.6597 61.4209 28.9528 61.3652 27.1988C61.3692 26.7766 61.3354 26.3549 61.2642 25.9388H54.4428ZM105.278 27.5138C104.986 26.6506 104.439 25.8969 103.709 25.3525C102.98 24.808 102.103 24.4986 101.194 24.465C100.581 24.4638 99.9733 24.5888 99.4097 24.8324C98.8461 25.0759 98.3383 25.4327 97.9177 25.8809C97.4971 26.329 97.1726 26.8588 96.9643 27.4377C96.756 28.0165 96.6683 28.6321 96.7067 29.2463C96.6971 30.2732 97.0191 31.2757 97.6246 32.104C98.2301 32.9324 99.0865 33.5421 100.066 33.842C101.046 34.142 102.096 34.1162 103.059 33.7684C104.023 33.4207 104.849 32.7696 105.413 31.9125L103.786 30.7875C103.544 31.1928 103.2 31.5275 102.788 31.7584C102.377 31.9893 101.913 32.1083 101.441 32.1038C100.955 32.1239 100.474 31.996 100.062 31.737C99.6491 31.478 99.3244 31.1 99.1301 30.6525L105.514 28.0088L105.278 27.5138ZM98.7711 29.1113C98.7483 28.7618 98.7953 28.4113 98.9094 28.0803C99.0234 27.7493 99.2022 27.4445 99.4352 27.1836C99.6682 26.9227 99.9507 26.7111 100.266 26.5611C100.582 26.4111 100.924 26.3257 101.273 26.31C101.635 26.2879 101.994 26.3732 102.308 26.5553C102.621 26.7374 102.874 27.0082 103.034 27.3338L98.7711 29.1113ZM93.5877 33.7463H95.6857V19.6838H93.5877V33.7463ZM90.1545 25.5338H90.0759C89.7574 25.1861 89.3683 24.9108 88.9348 24.7265C88.5013 24.5421 88.0335 24.453 87.5628 24.465C86.3367 24.5246 85.1805 25.055 84.3338 25.9462C83.4871 26.8373 83.0148 28.021 83.0148 29.2519C83.0148 30.4827 83.4871 31.6664 84.3338 32.5576C85.1805 33.4488 86.3367 33.9791 87.5628 34.0388C88.0384 34.0483 88.5103 33.9524 88.9448 33.758C89.3792 33.5635 89.7655 33.2752 90.0759 32.9138H90.1545V33.6C90.1545 35.4338 89.1784 36.4125 87.6077 36.4125C87.083 36.4009 86.5735 36.2333 86.144 35.9308C85.7145 35.6284 85.3844 35.2047 85.1955 34.7138L83.3779 35.4675C83.7139 36.3138 84.2982 37.0379 85.0534 37.5441C85.8087 38.0503 86.6993 38.3147 87.6077 38.3025C90.0647 38.3025 92.0955 36.8513 92.0955 33.3188V24.7463H90.1545V25.5338ZM87.7423 32.1488C87.0072 32.1028 86.3172 31.7776 85.8129 31.2394C85.3085 30.7012 85.0278 29.9904 85.0278 29.2519C85.0278 28.5134 85.3085 27.8026 85.8129 27.2644C86.3172 26.7262 87.0072 26.401 87.7423 26.355C88.1016 26.3705 88.4541 26.4584 88.7788 26.6133C89.1036 26.7683 89.3939 26.9871 89.6325 27.2569C89.8712 27.5266 90.0533 27.8418 90.168 28.1835C90.2828 28.5253 90.3278 28.8867 90.3003 29.2463C90.3309 29.607 90.2883 29.9703 90.1749 30.3141C90.0615 30.6578 89.8797 30.9749 89.6406 31.2463C89.4015 31.5176 89.11 31.7375 88.7837 31.8926C88.4574 32.0477 88.1031 32.1348 87.7423 32.1488ZM115.107 19.6838H110.08V33.7463H112.178V28.4138H115.107C115.705 28.4568 116.305 28.3759 116.87 28.1761C117.436 27.9762 117.954 27.6617 118.393 27.2522C118.832 26.8426 119.182 26.3468 119.421 25.7957C119.66 25.2445 119.784 24.6499 119.784 24.0488C119.784 23.4476 119.66 22.853 119.421 22.3018C119.182 21.7507 118.832 21.2549 118.393 20.8453C117.954 20.4358 117.436 20.1213 116.87 19.9214C116.305 19.7216 115.705 19.6407 115.107 19.6838ZM115.107 26.4338H112.178V21.6413H115.152C115.788 21.6413 116.399 21.8949 116.849 22.3464C117.3 22.7979 117.553 23.4102 117.553 24.0488C117.553 24.6873 117.3 25.2996 116.849 25.7511C116.399 26.2026 115.788 26.4563 115.152 26.4563L115.107 26.4338ZM128.054 24.42C127.29 24.3728 126.529 24.5511 125.865 24.933C125.201 25.3149 124.663 25.8836 124.318 26.5688L126.169 27.345C126.356 27.0068 126.637 26.7302 126.977 26.5485C127.318 26.3669 127.703 26.2879 128.088 26.3213C128.354 26.2901 128.624 26.3124 128.882 26.3869C129.139 26.4614 129.379 26.5866 129.588 26.7552C129.797 26.9238 129.97 27.1324 130.098 27.3689C130.226 27.6054 130.305 27.8649 130.332 28.1325V28.2675C129.657 27.9119 128.906 27.7266 128.144 27.7275C126.147 27.7275 124.105 28.8525 124.105 30.9C124.124 31.3352 124.231 31.762 124.419 32.155C124.606 32.548 124.87 32.8992 125.196 33.1878C125.521 33.4764 125.901 33.6965 126.313 33.8349C126.725 33.9733 127.161 34.0274 127.594 33.9938C128.12 34.023 128.645 33.9112 129.114 33.6701C129.584 33.4289 129.981 33.0669 130.264 32.6213H130.332V33.7463H132.351V28.335C132.351 25.8713 130.489 24.4425 128.099 24.4425L128.054 24.42ZM127.796 32.1263C127.112 32.1263 126.158 31.7775 126.158 30.9338C126.158 29.8088 127.347 29.4263 128.402 29.4263C129.068 29.4098 129.727 29.5729 130.309 29.8988C130.239 30.5097 129.95 31.0743 129.496 31.4881C129.042 31.9018 128.454 32.1365 127.841 32.1488L127.796 32.1263ZM139.711 24.7463L137.31 30.8438H137.243L134.752 24.7463H132.508L136.244 33.2738L134.113 38.01H136.356L142.045 24.7463H139.711ZM120.862 33.7463H122.949V19.6838H120.862V33.7463Z"
                      fill="black"
                    />
                    <path
                      d="M52.4897 14.3403C51.8633 14.5661 51.2032 14.6841 50.5375 14.6891C50.1069 14.7128 49.6758 14.6504 49.2694 14.5055C48.863 14.3607 48.4893 14.1363 48.1702 13.8453C47.8723 13.531 47.6404 13.16 47.4882 12.7542C47.3359 12.3484 47.2665 11.916 47.2839 11.4828C47.2702 11.0361 47.3501 10.5915 47.5185 10.1777C47.6869 9.76391 47.94 9.39014 48.2614 9.08055C48.5829 8.77095 48.9655 8.53243 49.3846 8.38037C49.8038 8.22832 50.25 8.16613 50.6946 8.19781C51.2359 8.19037 51.7735 8.28976 52.2766 8.49031L52.0746 9.16531C51.6318 8.97576 51.1535 8.88369 50.6722 8.89531C50.3308 8.86821 49.9877 8.91567 49.6664 9.03442C49.3452 9.15317 49.0534 9.34039 48.8113 9.58316C48.5692 9.82593 48.3825 10.1185 48.2641 10.4406C48.1456 10.7627 48.0983 11.1068 48.1253 11.4491C48.0926 11.7844 48.1324 12.1229 48.2421 12.4414C48.3519 12.7599 48.5289 13.0509 48.7611 13.2945C48.9934 13.538 49.2753 13.7284 49.5877 13.8526C49.9001 13.9768 50.2356 14.0319 50.5712 14.0141C50.954 14.0424 51.3382 13.9807 51.6931 13.8341V11.9441H50.3805V11.2466H52.4897V14.3403Z"
                      fill="black"
                    />
                    <path
                      d="M57.179 11.6403H54.7332V13.8903H57.4707V14.6216H53.9029V8.2653H57.3249V8.99655H54.7332V10.9653H57.1902L57.179 11.6403Z"
                      fill="black"
                    />
                    <path
                      d="M60.0741 8.99656H58.0995V8.26531H62.7892V8.99656H60.8931V14.6216H60.0741V8.99656Z"
                      fill="black"
                    />
                    <path
                      d="M66.7273 8.26531V14.6216H65.9531V8.26531H66.7273Z"
                      fill="black"
                    />
                    <path
                      d="M69.5434 8.99656H67.6136V8.26531H72.3146V8.99656H70.3736V14.6216H69.5434V8.99656Z"
                      fill="black"
                    />
                    <path
                      d="M80.7966 11.3816C80.7966 13.5641 79.4726 14.7566 77.857 14.7566C77.4533 14.751 77.0551 14.661 76.688 14.4925C76.3208 14.324 75.9927 14.0807 75.7246 13.7779C75.4564 13.4752 75.2542 13.1198 75.1307 12.7343C75.0072 12.3488 74.9651 11.9417 75.0073 11.5391C74.9587 11.1199 74.9981 10.6952 75.1229 10.2923C75.2477 9.88927 75.4552 9.51692 75.732 9.1991C76.0088 8.88128 76.3488 8.62502 76.7302 8.44677C77.1117 8.26852 77.5261 8.17222 77.9468 8.16406C78.3516 8.16621 78.7515 8.25381 79.1203 8.42116C79.4891 8.58851 79.8187 8.83186 80.0875 9.13537C80.3563 9.43888 80.5584 9.79575 80.6805 10.1828C80.8027 10.5698 80.8422 10.9782 80.7966 11.3816ZM75.8824 11.4828C75.8824 12.8441 76.6117 14.0591 77.9019 14.0591C79.1922 14.0591 79.9326 12.8553 79.9326 11.4153C79.9326 10.1553 79.2707 8.83906 77.9131 8.83906C76.5556 8.83906 75.8824 10.1216 75.8824 11.4828Z"
                      fill="black"
                    />
                    <path
                      d="M82.0531 14.6216V8.26531H82.9395L85.0263 11.4828C85.441 12.1304 85.8157 12.803 86.1483 13.4966C86.0809 12.6416 86.0585 11.8766 86.0585 10.8866V8.26531H86.8327V14.6216H86.0024L83.9941 11.3928C83.546 10.7142 83.1413 10.0078 82.7824 9.27781C82.7824 10.0766 82.7824 10.8416 82.7824 11.8991V14.6216H82.0531Z"
                      fill="black"
                    />
                    <path
                      d="M52.4897 14.3403C51.8633 14.5661 51.2032 14.6841 50.5375 14.6891C50.1069 14.7128 49.6758 14.6504 49.2694 14.5055C48.863 14.3607 48.4893 14.1363 48.1702 13.8453C47.8723 13.531 47.6404 13.16 47.4882 12.7542C47.3359 12.3484 47.2665 11.916 47.2839 11.4828C47.2702 11.0361 47.3501 10.5915 47.5185 10.1777C47.6869 9.76391 47.94 9.39014 48.2614 9.08055C48.5829 8.77095 48.9655 8.53243 49.3846 8.38037C49.8038 8.22832 50.25 8.16613 50.6946 8.19781C51.2359 8.19037 51.7735 8.28976 52.2766 8.49031L52.0746 9.16531C51.6318 8.97576 51.1535 8.88369 50.6722 8.89531C50.3308 8.86821 49.9877 8.91567 49.6664 9.03442C49.3452 9.15317 49.0534 9.34039 48.8113 9.58316C48.5692 9.82593 48.3825 10.1185 48.2641 10.4406C48.1456 10.7627 48.0983 11.1068 48.1253 11.4491C48.0926 11.7844 48.1324 12.1229 48.2421 12.4414C48.3519 12.7599 48.5289 13.0509 48.7611 13.2945C48.9934 13.538 49.2753 13.7284 49.5877 13.8526C49.9001 13.9768 50.2356 14.0319 50.5712 14.0141C50.954 14.0424 51.3382 13.9807 51.6931 13.8341V11.9441H50.3805V11.2466H52.4897V14.3403Z"
                      stroke="white"
                      strokeWidth="0.2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M57.179 11.6403H54.7332V13.8903H57.4707V14.6216H53.9029V8.2653H57.3249V8.99655H54.7332V10.9653H57.1902L57.179 11.6403Z"
                      stroke="white"
                      strokeWidth="0.2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M60.0741 8.99656H58.0995V8.26531H62.7892V8.99656H60.8931V14.6216H60.0741V8.99656Z"
                      stroke="white"
                      strokeWidth="0.2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M66.7273 8.26531V14.6216H65.9531V8.26531H66.7273Z"
                      stroke="white"
                      strokeWidth="0.2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M69.5434 8.99656H67.6136V8.26531H72.3146V8.99656H70.3736V14.6216H69.5434V8.99656Z"
                      stroke="white"
                      strokeWidth="0.2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M80.7966 11.3816C80.7966 13.5641 79.4726 14.7566 77.857 14.7566C77.4533 14.751 77.0551 14.661 76.688 14.4925C76.3208 14.324 75.9927 14.0807 75.7246 13.7779C75.4564 13.4752 75.2542 13.1198 75.1307 12.7343C75.0072 12.3488 74.9651 11.9417 75.0073 11.5391C74.9587 11.1199 74.9981 10.6952 75.1229 10.2923C75.2477 9.88927 75.4552 9.51692 75.732 9.1991C76.0088 8.88128 76.3488 8.62502 76.7302 8.44677C77.1117 8.26852 77.5261 8.17222 77.9468 8.16406C78.3516 8.16621 78.7515 8.25381 79.1203 8.42116C79.4891 8.58851 79.8187 8.83186 80.0875 9.13537C80.3563 9.43888 80.5584 9.79575 80.6805 10.1828C80.8027 10.5698 80.8422 10.9782 80.7966 11.3816ZM75.8824 11.4828C75.8824 12.8441 76.6117 14.0591 77.9019 14.0591C79.1922 14.0591 79.9326 12.8553 79.9326 11.4153C79.9326 10.1553 79.2707 8.83906 77.9131 8.83906C76.5556 8.83906 75.8824 10.1216 75.8824 11.4828Z"
                      stroke="white"
                      strokeWidth="0.2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M82.0531 14.6216V8.26531H82.9395L85.0263 11.4828C85.441 12.1304 85.8157 12.803 86.1483 13.4966C86.0809 12.6416 86.0585 11.8766 86.0585 10.8866V8.26531H86.8327V14.6216H86.0024L83.9941 11.3928C83.546 10.7142 83.1413 10.0078 82.7824 9.27781C82.7824 10.0766 82.7824 10.8416 82.7824 11.8991V14.6216H82.0531Z"
                      stroke="white"
                      strokeWidth="0.2"
                      strokeMiterlimit="10"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8866_64160">
                      <rect
                        width="151.463"
                        height="45"
                        fill="white"
                        transform="translate(0.878906)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export {
  HeroSection,
  Statistics,
  Patners,
  WhatWeDo,
  CoveredLocation,
  FeedBack,
  GiveReview,
  CTA,
};
