import React from "react";
import './style.css'

function HistoryComp() {
  return (
    <div>
      <h1>History</h1>
   
    <table>
    <thead>
        <tr>
            <th>Payment Id</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Date of Purchase</th>
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
</table>
</div>
  );
}

export default HistoryComp;
