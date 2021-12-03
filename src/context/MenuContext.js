import React, { createContext, useState, useEffect } from "react";

export const MenuContext = createContext();

const MenuContextProvider = (props) => {
    const [menu, setMenu] = useState([]);

    // const [cartItem, setCartItem] =useState([]);

    useEffect(() => {
        console.log("started")
        fetch('./data/feeds.json'
        ,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          }
          )
          .then(response => response.json())
          .then(data => {
              for( let i=0; i<data.length; i++){
                  data[i].inCart = false;
                  data[i].quantity = 0;
                  data[i].id = i;
              }

              setMenu(data);
            //   console.log(data);
          });
        
    }, [])

    return ( 
        <MenuContext.Provider value = {{menu, setMenu}}>
            {props.children}
        </MenuContext.Provider>
     );
}
 
export default MenuContextProvider;