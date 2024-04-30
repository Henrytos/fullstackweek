import Image from "next/image";

export const PromoBannerTwo = () => {
  return (
    <div className="h-40 w-full px-4">
      <Image
        className="h-full w-full rounded-xl object-cover"
        src="/promo-banner-02.png"
        alt="Banner promocional"
        width={600}
        height={300}
      />
    </div>
  );
};
