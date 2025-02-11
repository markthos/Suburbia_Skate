import { ImageField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next';
import React from 'react'

type Props = {
    foregroundImage: ImageField;
    backgroundImage: ImageField;
    className?: string;
}

export function ParallaxImage({
    foregroundImage,
    backgroundImage,
}: Props) {
  return (
    <div>      
        <PrismicNextImage field={backgroundImage} />
        <PrismicNextImage field={foregroundImage} />
    </div>
  )
}