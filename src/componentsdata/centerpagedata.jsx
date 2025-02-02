import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { DiscountPage } from "../components/Centerpage";

const data = [
  {
    id: 1,
    price: "RS.110,000",
    disp: "Rs.120,000",
    title: "Acer Nitro 5",
    button: "Shop Now",
    dis: "10%",
    des1: "Exclusive Offer",
    des2: "Limited Time Discount",
    image: "/acer.png",
  },
  {
    id: 2,
    price: "RS.132,000",
    disp: "Rs.152,000",
    title: "Apple MacBook Pro",
    button: "Shop Now",
    dis: "15%",
    des1: "Hot Deal",
    des2: "Hurry up, stock is limited",
    image: "apple.png",
  },
  {
    id: 3,
    price: "RS.157,500",
    disp: "Rs.177,500",
    title: "Dell Inspiron",
    button: "Shop Now",
    dis: "20%",
    des1: "Exclusive Offer",
    des2: "Best for professionals",
    image: "del.png",
  },
];
const CustomPrevArrow = (props) => (
  <button
    {...props}
    className="absolute lg:sm:md:xl:left-[-1px] left-[5px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-400 text-black rounded-full p-2 shadow-md transition"
  >
    <span className="block h-2 w-2 lg:sm:md:xl:w-4 lg:sm:md:xl:h-4 border-t-2 border-r-2 border-black transform rotate-[225deg]"></span>
  </button>
);

const CustomNextArrow = (props) => (
  <button
    {...props}
    className="absolute right-[10px] lg:sm:md:xl:right-[-0px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-400 text-black rounded-full p-2 shadow-md transition"
  >
    <span className="block w-2 h-2 lg:sm:md:xl:w-4 lg:sm:md:xl:h-4 border-t-2 border-r-2 border-black transform rotate-[-320deg]"></span>
  </button>
);
const CenterPageData = () => {
  return (
    <div className="relative w-full max-w-[1800px] mx-auto">
      <Slide
        easing="ease"
        duration={3000}
        transitionDuration={500}
        infinite={true}
        arrows={true}
        indicators={true}
        prevArrow={<CustomPrevArrow />}
        nextArrow={<CustomNextArrow />}
      >
        {data.map((item) => (
          <div key={item.id}>
            <DiscountPage
              price={item.price}
              disp={item.disp}
              title={item.title}
              button={item.button}
              dis={item.dis}
              des1={item.des1}
              des2={item.des2}
              image={item.image}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export { CenterPageData };
