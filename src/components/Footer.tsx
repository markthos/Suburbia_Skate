import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import React from 'react'
import { asImageSrc } from '@prismicio/client';

import { createClient } from '@/prismicio';
import { Logo } from '@/components/Logo';
import { Bounded } from './Bounded';
import { FooterPhysics } from './FooterPhysics';
import { Scroll } from '@react-three/drei';
import { ScrollToTopLogo } from './ScrollToTopLogo';



export async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");
  
    const boardTextureURLs = settings.data.footer_skateboards
      .map((item) => asImageSrc(item.skateboard, { h: 600 }))
      .filter((url): url is string => Boolean(url));

  return (
    <footer className="bg-texture bg-zinc-900 text-white overflow-hidden">
      <div className="relative h-[75vh] ~p-10/16 md:aspect-auto">
        <PrismicNextImage
            field={settings.data.footer_image}
            alt=""
            fill
            className="object-cover"
            width={1200}
              />
        <FooterPhysics
          boardTextureURLs={boardTextureURLs}
          className="absolute inset-0 overflow-hidden"
        />
        <Logo className="pointer-events-none relative h-20 mix-blend-exclusion md:h-28" />
    
        </div>
        <Bounded as="nav">
            <ScrollToTopLogo />  
            <ul className="flex flex-wrap justify-center gap-8 ~text-lg/x1">
                {settings.data.navigation.map((item) => (
                    <li key={item.link.text} className="hover:underline">
                        <PrismicNextLink field={item.link} />
                    </li>
                ))}

            </ul>
            
 
          </Bounded>

      </footer>
  )
}