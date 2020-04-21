import React from "react";
import './style.css'

function Cart() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <table>
          <thead>
              <tr>
                  <th>Product Title</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Remove</th>
              </tr>

              {/* <tbody>

                {props.user.userData && props.user.userData.history &&
                props.user.userData.history.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.dateOfPurchase}</td>
                    </tr>
                  ))}
              </tbody> */}
          </thead>
          <tbody>
          <tr>
            <td>Buzzer</td>
            <td>$45</td>
            <td className='desc'>Best buzzer EverBest buzzer EverBest buzzer Ever</td>
            <td><button className='remove'>Remove</button></td>
          </tr>
        </tbody>
          </table>
          <button className='checkout'>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
