
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


function Accordion({items}){
const [toggle, setToggle] = useState(null)

const toogleEvent = (id) => {
  setToggle(toggle === id ? null : id)
}

  return(                     
    !items || items.length === 0 ? "No items available !" : <div className="accordion"> 
     {items.map((item) =>
       { 
        return <div className="accordion-item"
        key={item.id}
                 >
                 <button 
                 className="accordion-button"
                 onClick={() => toogleEvent(item.id)}
                       >
                   {item.title}  
                   {toggle === item.id ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>

                 { toggle === item.id && <div className="accordion-content">
                     {item.content} </div>}
             
                       </div>
                       })}
                       </div>  )

                    }

export default Accordion;
