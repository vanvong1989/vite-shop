import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";


const CartTotal = () => {

      const {currrency, delivery_fee, getCartAmount} = useContext(ShopContext);

  return (
    <div className="w-full">
       <div className="text-2xl">
          <Title text1={'CART'} text2={'TOTALS'} />
       </div>
       <div className="flex flex-col gap-2 mt-2 text-sm">
           <div className="flex justify-between">
            <p>Subtotal</p>
            <p>{currrency}{getCartAmount()}.00</p>
           </div>
           <hr />
           <div className="flex justify-between">
             <p>Shipping Fee</p>
             <p>{currrency}{delivery_fee}.00</p>
           </div>
           <hr />
           <div className="flex justify-between">
            <b>Total</b>
            <p>{currrency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
           </div>
       </div>
        </div>
  )
}

export default CartTotal