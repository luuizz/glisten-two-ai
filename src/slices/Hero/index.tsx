import Bounded from "@/components/Bounded";

import AnimateContent from "./AnimateContent";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
    className="text-center"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <AnimateContent slice={slice} />
    </Bounded>
  );
};

export default Hero;
