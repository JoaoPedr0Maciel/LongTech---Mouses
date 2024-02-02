import G703 from "../../assets/images/g703.svg";
import Card from "../Card/Card";
import Description from "../Description/Description";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="bg-background-body">
      <Header />
      <Description
        title="G703"
        descrip="The TechLong G502 is an exceptional gaming peripheral with an ergonomic design that ensures comfort during long gaming sessions. Its high-resolution sensor enables precise and fluid movements on any surface, while the programmable buttons offer customization and agility for a personalized gaming experience. With its durability and quality construction, the G502 is a worthwhile investment for gaming enthusiasts seeking exceptional performance."
        image={G703}
      />
      <Card />
    </div>
  );
};

export default Home;
