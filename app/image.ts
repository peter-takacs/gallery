export default function staticLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (width < 500) {
    const [filename, extension] = src.split(".");
    return `${filename}_small.${extension}`;
  }
  return src;
}
