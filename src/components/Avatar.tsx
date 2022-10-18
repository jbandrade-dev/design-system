interface AvatarProps {
  src: string;
  alt: string;
  tailwind: string;
}

export function Avatar({ src, alt, tailwind }: AvatarProps) {
  return (
    <div className={tailwind} title="Avatar">
      <img src={src} alt={alt} />
    </div>
  );
}
