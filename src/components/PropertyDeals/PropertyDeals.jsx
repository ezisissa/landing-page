import Cards from "../Cards/Cards";
import Headline from "../Headline/Headline";
import "./PropertyDeals.css";

const PropertyDeals = () => {
  return (
    <div className="propdeal">
      <Headline text="PROPERTIES" />
      <h2 className="prop_h">We Provide The Best Property You Like</h2>
      <Cards />
    </div>
  );
};
export default PropertyDeals;
