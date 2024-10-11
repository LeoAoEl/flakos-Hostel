import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Slide {
  title: string;
  imgSrc: string;
  desc: string;
}

interface Props {
  content: Slide[]; // Aquí el arreglo de objetos con title, imgSrc y desc
}

export default function ExpSwipper({ content }: Props) {
  return (
    <section className="py-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative mx-auto w-full pt-6">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              1920: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: true,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 15,
                centeredSlides: true,
              },
              200: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
            }}
            className="gallery-top w-full rounded-xl"
          >
            {content.map((item, index) => (
              <SwiperSlide
                key={index}
                className="max-w-[460px] rounded-xl grid"
              >
                <img
                  className="w-full rounded-xl object-cover transition-all ease-in duration-300"
                  src={item.imgSrc}
                  alt={item.title}
                />
                <div className="swiper-box mx-auto relative flex-col justify-center items-center gap-1 flex mt-5">
                  <h5 className="text-textPrimary text-xl font-medium text-center">
                    {item.title}
                  </h5>
                  <p className="text-textPrimary text-base text-center leading-relaxed">
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
