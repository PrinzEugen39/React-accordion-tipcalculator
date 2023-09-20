import { useState } from "react";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((e, index) => (
        <AccordionItem title={e.title} num={index} key={e.title}>
          {e.text}
        </AccordionItem>
      ))}
      <AccordionItem title="What we learned from this module" num={22} key="Tes 1">
        <p>Allows React devs to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
function AccordionItem({ num, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={isOpen ? "item open" : "item"} onClick={handleOpen}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <div className="content-box">{children}</div> : ""}
    </div>
  );
}
