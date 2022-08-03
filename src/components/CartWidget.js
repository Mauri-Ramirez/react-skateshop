import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CartContext } from './CartContext';
import { useContext } from "react"



const CartWidget = () => {
    const {totalProducts} = useContext(CartContext)
    
    return( 
    <> 
 <div>
<i class="bi bi-shop">{totalProducts() || ""}</i>
</div> 

</>
    );
  }
  
  export default CartWidget; 