import Menu from "../menu/Menu";

interface DescriptionProps {
  descrip: string;
  image: string;
  title: string;
}

const Description = ({ title, descrip, image }: DescriptionProps) => {
  return (
    <div className="flex w-[97%] justify-between ">
      <div className="">
        <h1 className="text-title-color size text-4xl font-bold mx-20 mt-10 max-sm:text-center">
          {title}
        </h1>
        <p className="text-text-description mx-20 mt-3 max-sm:text-center">
          Logitech High Performance
        </p>
        <p className="text-text-description mx-20 max-sm:text-center">
          Gaming Mouse
        </p>
        <p className="text-text-color max-w-[60ch] mx-20 mt-4 max-sm:mx-6 max-sm:text-justify">
          {descrip}
        </p>
      </div>
      <div className="flex items-center mt-[2rem] max-sm:hidden">
        <img
          src={image}
          alt="G703 LIGHTSPEED"
          className="h-[20rem] -mt-[4rem]"
        />
        <h2 className="text-title-color font-extrabold text-[6rem] rotate-90 -mt-[4rem] -ml-[5rem]">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Description;
