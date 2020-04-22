import React, { useEffect, useState } from "react";
import './style.css'
import Axios from 'axios'

function HistoryComp() {

  const [History, setHistory] = useState([])

  // useEffect(() => {
  //   Axios.get('api/users/getHistory')
  //   .then(res => {
  //     if (res.data.success) {

  //     }else{
  //       alert('could not get history')
  //     }
  //   })
  // }, [])
  return (
    <div>
      <h1>Viewing History</h1>
   
    <table>
    <thead>
        <tr className='under'>
            <th>Product Title</th>
            <th>Price</th>
            <th className='desc'>Description</th>
            <th>Take me back!</th>
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
            <td><button className='takemeback'>GO!</button></td>
          </tr>
        </tbody>
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
