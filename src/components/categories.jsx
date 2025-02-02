import { Link } from "react-router-dom"; // Import Link for navigation
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  VegetarianFoodIcon,
  Shirt01Icon,
  Home09Icon,
  BrushIcon,
  RunningShoesIcon,
  GemIcon,
  Leaf01Icon,
  HeadphonesIcon,
  Dumbbell03Icon,
  Task01Icon,
  Baby01Icon,
  ShippingTruck01Icon,
  Sofa02Icon,
} from "hugeicons-react";

const categories = [
  {
    name: "Home Grocery",
    icon: <VegetarianFoodIcon size={40} />,
    link: "/home",
  },
  {
    name: "Apparel & Accessories",
    icon: <Shirt01Icon size={40} />,
    link: "/templateclothes",
  },
  {
    name: "Home & Garden",
    icon: <Home09Icon size={40} />,
    link: "/home-garden",
  },
  { name: "Beauty", icon: <BrushIcon size={40} />, link: "/makeupdata" },
  {
    name: "Shoes and Sandles",
    icon: <RunningShoesIcon size={40} />,
    link: "/templateShoes",
  },
  {
    name: "Jewelry, Eyewear",
    icon: <GemIcon size={40} />,
    link: "/discountpagedata",
  },
  { name: "Environment", icon: <Leaf01Icon size={40} />, link: "/environment" },
  {
    name: "Consumer Electronics",
    icon: <HeadphonesIcon size={40} />,
    link: "/templatesmartdata",
  },
  {
    name: "Sports & Entertainment",
    icon: <Dumbbell03Icon size={40} />,
    link: "/sports",
  },
  {
    name: "Commercial Equipment",
    icon: <Task01Icon size={40} />,
    link: "/equipment",
  },
  {
    name: "Mother, Kids & Toys",
    icon: <Baby01Icon size={40} />,
    link: "/mother-kids",
  },
  {
    name: "Vehicle Parts & Accessories",
    icon: <ShippingTruck01Icon size={40} />,
    link: "/vehicle-parts",
  },
  {
    name: "Furniture",
    icon: <Sofa02Icon size={40} />,
    link: "/templatefurnituredata",
  },
];

const CustomPrevArrow = (props) => (
  <button
    {...props}
    className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-400 text-black rounded-full p-2 shadow-md transition"
  >
    <span className="block h-2 w-2 lg:sm:md:xl:w-4 lg:sm:md:xl:h-4 border-t-2 border-r-2 border-black transform rotate-[225deg]"></span>
  </button>
);

const CustomNextArrow = (props) => (
  <button
    {...props}
    className="absolute right-[5px] lg:sm:md:xl:right-[-10px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-400 text-black rounded-full p-2 shadow-md transition"
  >
    <span className="block w-2 h-2 lg:sm:md:xl:w-4 lg:sm:md:xl:h-4 border-t-2 border-r-2 border-black transform rotate-[-320deg]"></span>
  </button>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 5 } },
    { breakpoint: 768, settings: { slidesToShow: 4 } },
    { breakpoint: 640, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 3 } },
  ],
};

function CategoriesPage() {
  return (
    <div className="p-4">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="px-1">
            <Link to={category.link}>
              {" "}
              <div className="w-[100px] h-[100px] sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 border rounded-full transition flex flex-col items-center justify-center">
                {category.icon}
                <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-1 text-gray-700">
                  {category.name}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export { CategoriesPage };
