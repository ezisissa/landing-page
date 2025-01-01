import "./Deals.css";
import Headline from "../Headline/Headline";
import Visitbtn from "../Visitbtn/Visitbtn";

const Deals = () => {
  const btnname = ["Appartment", "Villa House", "Penthouse"];
  const data = [
    {
      title: "Total Flat Space",
      desc: "185 m2",
    },
    {
      title: "Floor number",
      desc: "26th",
    },
    {
      title: "Number of rooms",
      desc: "4",
    },
    {
      title: "Parking Available",
      desc: "Yes",
    },
    {
      title: "Payment Process",
      desc: "Bank",
    },
  ];
  return (
    <div className="deal-container">
      <Headline text="Best Deal" />
      <div className="deal-nav">
        <h2>Find our Best Deal Right Now!</h2>
        <div className="deal-btn">
          {btnname.map((element, index) => {
            return (
              <button key={index} className="btn">
                {element}
              </button>
            );
          })}
        </div>
      </div>
      <div className="deal-detail">
        <div className="details">
          {data.map((element, index) => {
            return (
              <div key={index} className="detail">
                <p>{element.title}</p>
                <h3>{element.desc}</h3>
              </div>
            );
          })}
        </div>
        <img className="deal-img" src="./assets/deal-01.jpg" alt="appartment" />
        <div className="extra-info">
          <h3>Extra info About Property</h3>
          <p>
            esse enim cillum exercitation labore culpa eu velit sint occaecat
            ipsum id dolore qui Lorem tempor dolore tempor eu sunt tempor aute
            ad elit irure nulla dolore cillum velit est excepteur in in ullamco
            adipisicing amet adipisicing in et quis deserunt duis est ad non
            amet pariatur aliquip consequat et consectetur commodo do minim.
          </p>
          <p>
            When you need free css templates you can simply tye template in any
            search engine website in addition , you can type TemplateMo
            Porifolio One Page Layout, etc...
          </p>
          <Visitbtn />
        </div>
      </div>
    </div>
  );
};

export default Deals;
