import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

interface Slide {
  title: string;
  imgSrc: string;
  desc: string;
}

interface Props {
  content: Slide[];
}

export default function ExpSwipper({ content }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative mx-auto w-full pt-6">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 4000 }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              1920: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              200: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
            }}
            className="gallery-top w-full rounded-xl"
          >
            {content.map((item, index) => (
              <SwiperSlide key={index} className="rounded-xl grid">
                {/* Contenedor de la imagen */}
                <div className="w-full h-[200px] md:h-[300px] overflow-hidden rounded-xl">
                  <img
                    className={`w-full rounded-xl object-cover transition-all ease-in duration-300 ${
                      activeIndex === index
                        ? "opacity-100"
                        : "opacity-90 scale-95"
                    }`}
                    src={item.imgSrc}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>

                {/* Contenedor de título y descripción */}
                <div className="swiper-box mx-auto relative flex-col justify-center items-center gap-1 flex mt-2">
                  <h5 className="text-textPrimary text-lg md:text-xl font-medium text-center">
                    {item.title}
                  </h5>
                  {/* Mostrar descripción solo en pantallas medianas y mayores */}
                  <p className="hidden md:block text-textPrimary text-base text-center leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
