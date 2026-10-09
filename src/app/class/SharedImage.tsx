import Image, { ImageProps } from "next/image";

/** next/image with the site's loading placeholder always applied. */
export default function SharedImage({
  alt,
  ...rest
}: Omit<ImageProps, "placeholder" | "blurDataURL">) {
  return (
    <Image alt={alt} {...rest} placeholder="blur" blurDataURL="/loader-2.gif" />
  );
}
