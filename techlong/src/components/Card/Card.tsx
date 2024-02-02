import G203 from "../../assets/images/g203.svg";
import G305 from "../../assets/images/g305.svg";
import G502 from "../../assets/images/g502.svg";
import "../../index.css";
import ProductCard from "../ProductCard/ProductCard";

const Card = () => {
  return (
    <div className="flex flex-col max-sm:flex max-sm:justify-center max-sm:items-center">
      <div className="max-sm:text-center max-sm:flex max-sm:justify-center">
        <p className="text-center max-sm:center max-sm:text-lg max-sm:w-[80%] text-text-color  text-2xl font-thin mt-[2rem]">
          Which type of mouse are you looking for ?
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 max-sm:gap-20 mt-[8rem] mb-[2rem] flex-wrap ">
        <ProductCard
          product="G502"
          price="R$ 299,99"
          image={G502}
          link="/mouse1"
        />
        <ProductCard
          product="G305"
          price="R$ 299,99"
          image={G305}
          link="/mouse2"
        />
        <ProductCard
          product="G203"
          price="R$ 299,99"
          image={G203}
          link="/mouse3"
        />
      </div>
    </div>
  );
};

export default Card;
