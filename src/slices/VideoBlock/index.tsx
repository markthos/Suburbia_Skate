import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";
import { LazyYouTubePlayer } from "./LazyYouTubePlayer";
import clsx from "clsx";

/**
 * Props for `VideoBlock`.
 */
export type VideoBlockProps = SliceComponentProps<Content.VideoBlockSlice>;

/**
 * Component for "VideoBlock" Slices.
 */
const VideoBlock = ({ slice }: VideoBlockProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-zinc-900"
    >
      <h2 className="sr-only>Video Reel"></h2>
      <div className="relative aspect-video">
        {/* Masks */}
        <div className={clsx("absolute inset-0 [mask-image:url(/video-mask-png)][mask-mode:alpha [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]")}/>
      {/* Video */}
      <LazyYouTubePlayer youTubeID={slice.primary.youtube_video_id} />
        {/* Texture */}
      </div>
    </Bounded>
  );
};

export default VideoBlock;
