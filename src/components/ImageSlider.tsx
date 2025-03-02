import React, { useState } from 'react';

import { Carousel } from "@shadcn/ui"; // Only keep this import for Carousel
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";  // Keep this for the other components

import { Card, CardContent } from "@/components/ui/card";

const ImageSlider = () => {
  const images = [
    {
      src: "https://i.imgur.com/vhfaeC4.jpeg",
      alt: "Prima versiune a gogosii",
      caption: "Inceputul tutorialului - primii pasi"
    },
    {
      src: "https://i.imgur.com/vDRigrD.jpeg", 
      alt: "Gogoasa cu texturi",
      caption: "Dupa adaugarea texturilor si materialelor"
    },
    {
      src: "https://i.imgur.com/vZ8OxYw.jpeg",
      alt: "Gogoasa finala",
      caption: "Rezultatul final cu glazura si decor"
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <p className="mt-4 text-sm text-gray-600">{image.caption}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ImageSlider;