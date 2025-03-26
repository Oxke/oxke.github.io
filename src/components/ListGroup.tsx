import { useState } from "react";

interface Props {
  items: string[];
  header: string;
  onSelectItem: (items: string, index: number) => void;
}

function ListGroup({ items, header, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const checkNoItems = items.length === 0 && (
    <li className="list-group-item">No items</li>
  );

  return (
    <>
      <h1>{header}</h1>
      <ul className="list-group">
        {checkNoItems}
        {items.map((item, index) => (
          <li
            key={index}
            className={
              "list-group-item " + (selectedIndex === index && "active")
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item, index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
