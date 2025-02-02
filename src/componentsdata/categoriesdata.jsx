// import { CategoriesPage } from "../components/categories";
// const CatData = [
//   {
//     id: 1,
//     image: "toys.png",
//     text: "Toys",
//   },
//   {
//     id: 2,
//     image: "art.png",
//     text: "Art",
//   },
//   {
//     id: 3,
//     image: "plant.png",
//     text: "Plant",
//   },
//   {
//     id: 4,
//     image: "bookrack.png",
//     text: "Book-Rack",
//   },
//   {
//     id: 5,
//     image: "fan.png",
//     text: "Fan",
//   },
//   {
//     id: 6,
//     image: "tv.png",
//     text: "TV",
//   },
//   {
//     id: 7,
//     image: "cup.png",
//     text: "Cups",
//   },
//   {
//     id: 8,
//     image: "bulb.png",
//     text: "Bulb",
//   },
//   {
//     id: 9,
//     image: "speaker.png",
//     text: "Speaker",
//   },
//   {
//     id: 10,
//     image: "sofa.png",
//     text: "Sofa",
//   },
//   {
//     id: 11,
//     image: "bedsheet.png",
//     text: "Bed-Sheet",
//   },
//   {
//     id: 12,
//     image: "pickle.png",
//     text: "Pickle",
//   },
//   {
//     id: 13,
//     image: "router.png",
//     text: "Router",
//   },
//   {
//     id: 14,
//     image: "switch.png",
//     text: "Switch",
//   },
//   {
//     // id: 15,
//     image: "nike.png",
//     text: "Shoes",
//   },
//   {
//     id: 16,
//     image: "sweter.png",
//     text: "Clothes",
//   },
// ];
// const TemplateCat = () => {
//   return (
//     <>
//       <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6 flex items-center justify-center flex-wrap">
//         <span className="text-emerald-500 mx-2 flex items-center ">Find</span>
//         Your Next Favorite
//         <span className="text-fuchsia-600 mx-2 flex items-center"> Item</span>
//         Today
//       </h1>
//       <div className="flex justify-center items-center py-6 px-4 sm:py-8 lg:py-3">
//         <span className="before:block before:absolute before:-inset-1 mt-1 before:-skew-y-3 before:bg-pink-500 w-[180px] h-[30px] sm:w-[220px] sm:h-[50px] md:w-[250px] md:h-[60px] lg:h-[40px] relative inline-block">
//           <span className="relative text-xl sm:text-2xl md:text-3xl lg:text-3xl text-white font-semibold flex items-center justify-center">
//             Our Products
//           </span>
//         </span>
//       </div>

//       <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
//         {CatData.map((CatData) => {
//           return (
//             <CategoriesPage
//               key={CatData.id}
//               link={CatData.link}
//               image={CatData.image}
//               title={CatData.title}
//               text={CatData.text}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// };
// export { TemplateCat };
