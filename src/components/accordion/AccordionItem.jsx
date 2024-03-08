import {useAccordionContext} from "./Accordion.jsx";

export function AccordionItem({id, className, title, children}) {
  const {openItemId, toggleItem} = useAccordionContext();
  
  const isOpen = openItemId === id
  
  // Can use this or the shorter version directly in the onClick attribute
  // function handleClick() {
  //   toggleItem(id);
  // }
  
  return (
    <li className={className}>
      {/*<h3 onClick={handleClick}>{title}</h3>*/}
      <h3 onClick={() => toggleItem(id)}>{title}</h3>
      <div
        className={isOpen ?
                   'accordion-item-content open' :
                   'accordion-item-content'}
      >{children}</div>
    </li>
  )
}