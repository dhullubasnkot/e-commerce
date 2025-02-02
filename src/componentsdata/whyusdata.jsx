import { BlankCard } from "../components/blankcard";
import { TruckDeliveryIcon } from "hugeicons-react";
import { MedalFirstPlaceIcon } from "hugeicons-react";
import { AffiliateIcon } from "hugeicons-react";
const whyUS = [
  {
    id: 1,
    Icon: TruckDeliveryIcon,
    titlecard: "Fast Delivery",
    description: "Variations of passages of Lorem Ipsum available",
  },
  {
    id: 1,
    Icon: MedalFirstPlaceIcon,
    titlecard: "Best Quality",
    description: "Shop seamlessly with our optimized platform",
  },
  {
    id: 3,
    Icon: AffiliateIcon,
    titlecard: "Free Shipping",
    description: "Shop seamlessly with our optimized platform",
  },
];
const BlankCardData = () => {
  return (
    <>
      <div className="text-left sm:text-left lg:text-center  lg:my-8 sm:my-6 sm:ml-6 ml-28">
        <h1 className="text-xl sm:text-2xl md:ml-64 lg:ml-12 lg:text-3xl font-bold mb-2">
          Why Shop With Us
        </h1>
        <div className="w-16 h-1 bg-red-500 lg:xl:md:mx-auto ml-10 sm:mx-auto"></div>
      </div>
      <div className="flex flex-wrap gap-2">
        {whyUS.map((whyUS) => {
          return (
            <BlankCard
              key={whyUS.id}
              img={whyUS.Icon}
              titlecard={whyUS.titlecard}
              description={whyUS.description}
            />
          );
        })}
      </div>
    </>
  );
};
export { BlankCardData };
