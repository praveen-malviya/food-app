
const ItemCard = ({ item, addToCart, removeFromCart }) => {
    return ( 
        <div className="itemCard">
                        <img src={("/assets/"+item.image)} alt="Logo food's Restaurant" width="250px" height="150px"/>
                        <span id="itemName">{item.name}</span>
                        <span id="itemPrice">Price: { item.price }</span>
                        {item.inCart && 
                        <div>
                        <span id="itemPrice">Total : { item.quantity }</span>
                        <span id="itemPrice">Cost(INR): { item.price*item.quantity }</span>
                        </div> }
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
     );
}
 
export default ItemCard;