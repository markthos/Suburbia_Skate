import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading } from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { JSX } from "react";

/**
 * Props for `TextAndImage`.
 */
export type TextAndImageProps = SliceComponentProps<Content.TextAndImageSlice>;

/**
 * Component for "TextAndImage" Slices.
 */
const TextAndImage = ({ slice }: TextAndImageProps): JSX.Element => {
  const theme = slice.primary.theme;
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        theme === "Blue" && "bg-texture bg-brand-blue text-white",
        theme === "Orange" && "bg-texture bg-brand-orange text-white",
        theme === "Navy" && "bg-texture bg-brand-navy text-white",
        theme === "Lime" && "bg-texture bg-brand-lime"
      )}
    >
      <Heading size="lg" as="h2">
        <PrismicText field={slice.primary.heading} />
      </Heading>
      <div className="max-w-md text-lg leading-relaxed">
      <PrismicRichText field={slice.primary.body} />
      </div>
      <ButtonLink
          field={slice.primary.button}
          color={theme === "Lime" ? "orange" : "lime"}
        >
          {slice.primary.button.text}
        </ButtonLink>
      <PrismicNextImage field={slice.primary.background_image} />
      <PrismicNextImage field={slice.primary.foreground_image} />
    </Bounded>
  );
};

export default TextAndImage;
