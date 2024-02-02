import Description from "../Description/Description";

import G203 from "../../assets/images/g203.svg";
import G305 from "../../assets/images/g305.svg";
import G502 from "../../assets/images/g502.svg";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";

const Mouse2 = () => {
  return (
    <div>
      <Header />
      <Description
        title="G305"
        descrip="The TechLong G305 is an exceptional gaming peripheral with an
          ergonomic design that ensures comfort during long gaming sessions. Its
          high-resolution sensor enables precise and fluid movements on any
          surface, while the programmable buttons offer customization and
          agility for a personalized gaming experience. With its durability and
          quality construction, the G502 is a worthwhile investment for gaming
          enthusiasts seeking exceptional performance."
        image={G305}
      />
      <div className="flex justify-center items-center gap-4 mt-[8rem] mb-[2rem] flex-wrap max-sm:gap-20">
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

export default Mouse2;
