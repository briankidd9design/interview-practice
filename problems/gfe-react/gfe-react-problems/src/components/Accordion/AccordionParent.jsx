import React, { useState } from "react";
import AccordionChild from "./AccordionChild";
import "./accordion.css";

export default function AccordionParent() {
  const [items, setItems] = useState([
    {
      id: crypto.randomUUID(),
      label: "HTML",
      content:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
      expanded: false,
    },
    {
      id: crypto.randomUUID(),
      label: "CSS",
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
      expanded: false,
    },
    {
      id: crypto.randomUUID(),
      label: "JavaScript",
      content:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside",
      expanded: false,
    },
  ]);
  // event handler to keep track of if the section is expanded
  // function toggleExpanded(clickedId) {
  //   const newItems = items.map((item) => {
  //     return clickedId === item.id ? {...item, expanded: !item.expanded} : item;
  //     // if (clickedId === item.id) {
  //     //   return { ...item, expanded: !item.expanded }
  //     // } else {

  //     // }
  //     // return item;
  //   });
  //     setItems(newItems)
  // }
  function toggleExpanded(clickedId) {
    const newItems = items.map((item) =>
      item.id === clickedId ? { ...item, expanded: !item.expanded } : item
    );
    setItems(newItems);
  }

  return <AccordionChild items={items} toggleExpanded={toggleExpanded} />;
}
