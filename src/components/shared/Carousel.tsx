import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";
import type { ImageMetadata } from "astro";

interface Props {
  imageFolder: string;
}

export default function AutoSwipe({ imageFolder }: Props) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Importamos las imágenes usando import.meta.glob con eager: true
    const imageFiles = import.meta.glob<{ default: ImageMetadata }>(
      "/src/assets/images/*/*",
      { eager: true } // Carga las imágenes de manera anticipada
    );

    const filteredImages = Object.entries(imageFiles)
      .filter(([path]) => path.includes(`/${imageFolder}/`))
      .map(([_, mod]) => mod.default.src); // Extraemos la ruta optimizada

    setImages(filteredImages);
  }, [imageFolder]);

  return (
    <main className="py-6">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        keyboard={{ enabled: true }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination, Keyboard]}
        className="h-96 transition-all ease-in rounded-l-xl"
      >
        {images.map((src, index) => {
          const imageName = src.split("/").pop(); // Obtener el nombre de la imagen
          return (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center place-content-center transition-all rounded-xl ease-in"
            >
              <img
                src={src}
                alt={imageName || `Image ${index + 1}`} // Añadir el alt con el nombre de la imagen
                className="object-cover w-full h-full block rounded-xl"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
}
