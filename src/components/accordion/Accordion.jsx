import {
  createContext, useContext, useState
} from "react";
import {AccordionItem} from "./AccordionItem.jsx";
import {AccordionContent} from "./AccordionContent.jsx";
import {AccordionTitle} from "./AccordionTitle.jsx";

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error('Accordion related component must be wrapped by <Accordion>.')
  }
  return ctx;
}

export function Accordion({children, className}) {
  const [openItemId, setOpenItemId] = useState();
  
  function openItem(id) {
    setOpenItemId(id);
  }
  
  function closeItem() {
    setOpenItemId(null);
  }
  
  function toggleItem(id) {
    setOpenItemId(prevState => prevState === id ? null : id)
  }
  
  const contextValue = {
    openItemId, toggleItem,
  }
  
  return (
    <AccordionContext.Provider
      value={contextValue}
      className={className}
    >
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  )
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;

export default Accordion;