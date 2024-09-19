import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselComp() {
  const images = ['img1', 'img3', 'img4'];

  return (
    <div className="relative w-full max-w-[1200px] mx-auto">
      <Carousel autoScroll autoScrollInterval={3000}>
        <CarouselContent>
          {images.map((altText) => (
            <CarouselItem key={altText} className="flex justify-center items-center">
              <div className="relative w-full" style={{ aspectRatio: "375 / 420" }}>
                <Image
                  src={`/${altText}.jpeg`}
                  layout="fill"
                  objectFit="cover"
                  alt={altText} // Unique alt text for each image
                  className="rounded-md"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
