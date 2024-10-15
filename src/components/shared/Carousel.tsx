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
    const importImages = async () => {
      const imageFiles = import.meta.glob<{ default: ImageMetadata }>(
        "/src/assets/images/*/*"
      );
      const imagePaths = Object.keys(imageFiles).filter((imagePath) =>
        imagePath.startsWith(`/src/assets/images/${imageFolder}/`)
      );

      const imagePromises = imagePaths.map(async (imagePath) => {
        const imageModule = await imageFiles[imagePath]();
        const optimizedImage = await getImage({
          src: imageModule.default,
          width: 1920,
        });
        return optimizedImage.src;
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
