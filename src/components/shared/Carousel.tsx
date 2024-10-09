import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";
import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

interface Props {
  imageFolder: string;
}

export default function AutoSwipe({ imageFolder }: Props) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Cargar dinámicamente las imágenes de la carpeta proporcionada
    const importImages = async () => {
      const imageFiles = import.meta.glob<{ default: ImageMetadata }>(
        "/src/assets/images/*/*"
      );
      const imagePaths = Object.keys(imageFiles).filter((imagePath) =>
        imagePath.startsWith(`/src/assets/images/${imageFolder}/`)
      );

      // Optimizar las imágenes
      const imagePromises = imagePaths.map(async (imagePath) => {
        const imageModule = await imageFiles[imagePath](); // Resolviendo la promesa
        const optimizedImage = await getImage({
          src: imageModule.default, // Aquí se pasa el ImageMetadata resuelto
          width: 1920,
        });
        return optimizedImage.src; // Retorna el src de la imagen optimizada
      });

      const loadedImages = await Promise.all(imagePromises);
      setImages(loadedImages);
    };

    importImages();
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
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Autoplay, Navigation, Pagination, Keyboard]}
        className="h-96 transition-all ease-in rounded-l-xl"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center place-content-center transition-all rounded-xl ease-in"
          >
            <img
              src={src}
              className="object-cover w-full h-full block rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
