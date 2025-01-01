import "./StatsCard.css";

const StatsCard = () => {
  const data = [
    {
      number: "34",
      desc: " Buildings Finished Now",
    },
    {
      number: "12",
      desc: "Years Experience",
    },
    {
      number: "24",
      desc: "Awards Won 2023",
    },
  ];

  return (
    <div className="statcards">
      {data.map((element, index) => {
        return (
          <div key={index} className="statcard">
            <h3>{element.number}</h3>
            <p>{element.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCard;
