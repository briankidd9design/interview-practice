import "./accordion.css";
export default function AccordionChild({ items, toggleExpanded }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li
            className={
              item.expanded ? "accordion-item expanded" : "accordion-item"
            }
            key={item.id}
          >
            <button className="expand-target" onClick={() => toggleExpanded(item.id)}>
              {item.label}{" "}
              <span aria-hidden={true} className="accordion-icon" />
            </button>
            <div className="accordion-content">{item.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
