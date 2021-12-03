
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import ItemCard from "./ItemCard";


const Menu = () => {

   const { menu, setMenu } = useContext(MenuContext)

   const addToCart = (id) =>{
        let newMenu = [...menu];
        newMenu[id].inCart = true;
        newMenu[id].quantity = newMenu[id].quantity+1;
        setMenu(newMenu)
   }

   const removeFromCart = (id) =>{
    let newMenu = [...menu];
        newMenu[id].quantity = newMenu[id].quantity-1;
        if(newMenu[id].quantity ===0){
            newMenu[id].inCart = false;
        }
        setMenu(newMenu)
}

//    console.log(menu);
    return ( 
        <div className="menu">
            {menu.map(item => {
                return(
                  <ItemCard  item={item} addToCart = {addToCart} removeFromCart = {removeFromCart} key={item.id}/>  
                )
            })}
        </div>
     );
}
 
export default Menu;