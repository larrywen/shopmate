import { useCart } from "../context/CartContext"
import { useTitle } from "../hooks/useTitle"
import { CartCard } from "../components"

export const Cart = () => {
  const {total, cartList} = useCart();
  console.log(cartList)
  useTitle("Cart"); 
   /*
  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"},
  ]
*/
  return (
    <main>
      <section className="cart">
        <h1>Cart Item: {cartList.length} / ${total}</h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
