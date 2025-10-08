import Image, { ImageProps } from "next/image";

export default function SharedImage(props: ImageProps) {
  const {
    placeholder: _ignoredPlaceholder,
    blurDataURL: _ignoredBlur,
    ...rest
  } = props;

  return <Image {...rest} placeholder="blur" blurDataURL="/loader-2.gif" />;
}
