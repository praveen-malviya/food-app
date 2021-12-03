import { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { MenuContext } from "../context/MenuContext";

const Header = () => {

    const [showCart, setShowCart] = useState(false);

    const { menu, setMenu } = useContext(MenuContext);

    const cartItem = menu.filter(item => item.inCart);

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

    return ( 
    <div className="header">

        <div className="logoMain">
        <img src="assets/restaurant_24px.svg" alt="Logo food's Restaurant" className="logoImage" />
        <h2> Food's Kitchen</h2>
        </div>
        <div id="cart"
        onClick={() => setShowCart(true)}
        >
        <img src="assets/shopping-cartb.png" alt="Logo food's Restaurant"  />
        { cartItem.length !== 0 && <span> {cartItem.length} </span>
}
        </div>

        <div id="overlay-back"
        style={{display: showCart ? "block" : "none"}}
        ></div> 
        <div id="overlay"
        style={{display: showCart ? "block" : "none"}}
        >
            <div id="showCart">
                <h4>Order summery</h4>
                {
                    cartItem.map(item =>{
                        return(
                            <div className="cartTotal">
                                <div>
                                    <span>{ item.name } : </span>
                                    <span> { item.quantity }</span>
                                    <div className="addToCart">
                            <button 
                            style={{backgroundColor:"#3F51B5", color:"white"}}
                            onClick = {()=> addToCart(item.id)}
                            > + </button>
                            <button 
                            style={{backgroundColor:item.inCart ? "red" : "gray", color:"white"}}
                            onClick = {()=> removeFromCart(item.id)}
                            > - </button>
                        </div>
                                </div>
                            </div>
                          )
                     
                    })
                }               
            </div>
        </div>
    </div> 
    );
}
 
export default Header;