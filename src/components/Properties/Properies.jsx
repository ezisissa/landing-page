import { useState } from "react";
import "./Properties.css";
import Headline from "../Headline/Headline";

const Properties = () => {
  const data = [
    {
      question: "Best useful links?",
      answer:
        " Get the <b>the best villa</b> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <span class='color'>best villa templates</span> in the world. Please tell your friends about it.",
    },
    {
      question: "How does this work?",
      answer:
        "Commodo nostrud dolor Lorem non eu ut adipisicing elit amet esse nulla fugiat sunt cillum exercitation veniam culpa adipisicing sunt enim non qui ea incididunt commodo occaecat fugiat nisi minim velit ea labore id irure magna et do et dolore amet consequat elit magna sint adipisicing fugiat dolore cillum velit.",
    },
    {
      question: "Why is Villa Agency the best?",
      answer:
        "Nulla eu enim veniam aliquip laborum officia proident tempor laborum ullamco ullamco aliquip id Lorem et mollit do Lorem excepteur sit Lorem eiusmod aliquip occaecat cillum sunt esse dolor incididunt.",
    },
  ];

  const info = [
    {
      img: "/assets/info-icon-01.png",
      title: "250 m2",
      desc: "Total Flat Space",
    },
    {
      img: "/assets/info-icon-02.png",
      title: "Contract",
      desc: "Contract Ready",
    },
    {
      img: "/assets/info-icon-03.png",
      title: "Payment",
      desc: "Payment Process",
    },
    {
      img: "/assets/info-icon-04.png",
      title: "Safety",
      desc: "24/7 Under Control",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="properties">
      <div className="img">
        <div className="image-container">
          <img src="/assets/featured.jpg" alt="featured photo" />
          <div className="featured_icon">
            <img src="/assets/featured-icon.png" alt="Featured Icon" />
          </div>
        </div>
      </div>
      <div className="description">
        <Headline text="Featured" />
        <h2>Best Apartment & Sea View</h2>
        <div className="faq">
          {data.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                <h3>{item.question}</h3>
              </div>
              {openIndex === index && (
                <div
                  className="faq-answer"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              )}
              {index !== data.length - 1 && <hr className="faq-divider" />}
            </div>
          ))}
        </div>
      </div>
      <div className="features">
        {info.map((element, index) => (
          <div key={index} className="feature-item">
            <img src={element.img} alt={`feature ${index + 1}`} />
            <div className="feature-info">
              <h3>{element.title}</h3>
              <p>{element.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
