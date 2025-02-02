const BlankCard = ({ img: Icon, titlecard, description }) => {
  return (
    <div className="flex justify-center ml-16 sm:ml-4 md:ml-40 lg:ml-28">
      <div className="bg-customGreen shadow-lg rounded-lg lg:md:xl:w-[300px] w-[250px] lg:md:xl:h-56 sm:w-96 sm:h-64 flex flex-col justify-center items-center text-center text-white p-4">
        {Icon && <Icon size={32} color={"#FFFFFF"} />}
        <h1 className="text-md sm:text-lg font-bold mt-4">{titlecard}</h1>
        <p className="text-xs sm:text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export { BlankCard };
