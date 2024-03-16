import React from 'react'
import Type from '../../components/Type'

export default function OrderPage() {
  return (
    <div>
      <h1>Travel Products</h1>
      <div>
        <Type orderType="products"/>
      </div>
      <div style={{display: 'flex', marginTop: 20}}>
        <div style={{width: '50%'}}>
            <Type orderType="options"/>
        </div>
        <div style={{width: '50%'}}>
            <h2>Total Price:</h2>
            <button>주문</button>
        </div>

      </div>
    </div>
  )
}
 