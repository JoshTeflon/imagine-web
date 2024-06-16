"use client";

import Slider from "react-slick";

import { ReviewCard } from "@/components/interface";
import { reviews } from "@/lib";
import { Review } from "@/types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      // {
      //   breakpoint: 1280,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="px-2 lg:px-0 w-full">
      <h2 className="mb-6 lg:mb-8 text-2xl lg:text-[2rem] text-secondary font-bold leading-[28.8px] lg:leading-[38.4px]">
        Testimonials
      </h2>
      <div className="slider-container mx-auto w-full text-center">
        <Slider {...settings}>
          {
            reviews?.map((review: Review) => (
              <ReviewCard
                key={review?.name}
                className="max-w-[30rem] w-full h-[18rem] xl:h-[17rem]"
                {...review}
              />
            ))
          }
        </Slider>
      </div>
    </section>
  )
}

export default Reviews;