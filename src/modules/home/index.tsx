"use client";

import * as React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { cn } from "@/utils";
import useInView from "@/hooks/useInView";
import "./styles.scss";
import { Button } from "@/components/ui/button";

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
      <div className="flex flex-col relative z-10 text-white min-h-[650px] w-full justify-center items-center px-4 sm:px-8 xl:px-16 2xl:px-24 transition-colors duration-500">
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
    <section className="px-4 sm:px-8 xl:px-16 2xl:px-24 my-8 max-md:pt-12 lg:my-20 w-full flex flex-col items-center mt-[100px]">
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
          "grid grid-cols-2 w-full items-center justify-center bg-white mt-[100px]",
          isInView2
            ? "opacity-100 translate-y-0 md:delay-300 duration-500"
            : " opacity-0 translate-y-36"
        )}
      >
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-primary text-[48px]">
            About Us
          </h2>
          <div className="text-[24px] font-medium">
            <p className="text-black">
              We make back-loading logistics profitable for agro-logistics
              providers and enable farmers/food aggregators move their produce
              from farm to market affordably & predictably. The African
              logistics scene is riddled with infrastructure gaps, high
              operating costs and overly fragmented activities.
            </p>
            <p className="text-black">
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
        {locations.map((locations, index) => (
          <div className="flex w-full max-w-[380px]" key={index}>
            <div className="relative flex px-16 pt-80 pb-12 text-2xl font-medium leading-7 mb-[30px] whitespace-nowrap rounded-3xl text-center  border border-white border-solid shadow-sm aspect-[0.96] text-zinc-100">
              <Image
                loading="lazy"
                src={`/states${locations.image}.png`}
                alt={locations.locationName}
                layout="fill"
                className="object-cover absolute"
              />
              <span className="capitalize text-white relative">
                {locations.locationName}
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

export {
  HeroSection,
  Statistics,
  Patners,
  WhatWeDo,
  CoveredLocation,
  FeedBack,
  GiveReview,
};
