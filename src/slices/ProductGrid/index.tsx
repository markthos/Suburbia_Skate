import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `ProductGrid`.
 */
export type ProductGridProps = SliceComponentProps<Content.ProductGridSlice>;

/**
 * Component for "ProductGrid" Slices.
 */
const ProductGrid = ({ slice }: ProductGridProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-brand-gray"
    >
      <Heading className="text-center ~mb-4/6" as="h2">
        <PrismicText field={slice.primary.heading} />
      </Heading>
    <div className="text-center ~mb-6/10">
      <PrismicRichText field={slice.primary.body} />
    </div>

    {slice.primary.product.map((item, index) => (
      <PrismicNextLink key={index} field={item.skateboard}>
        Link
      </PrismicNextLink>))}

    </Bounded>
  );
};

export default ProductGrid;
