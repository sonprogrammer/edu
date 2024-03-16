import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from './Products'
import Options from './Options'

export default function Type({orderType}) {
    const [items, setItems] = useState([])

    useEffect(()=>{
        loadItems(orderType)
    },[orderType])

    const loadItems = async () =>{
        try{
            const response = await axios.get(`https://localhost:4000${orderType}`)
            setItems(response.data)
        }catch(e){
            console.log(e)
        }
    }


    const ItemComponent = orderType === 'products' ? Products : Options
    

    const optionItems = items.map(item => {
        <ItemComponent 
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
        />
    })
    
  return (
    <div>
      <h2>주문 종료</h2>
      <p>하나의 가격</p>
      <p>총 가격:</p>
      <div style={{display: 'flex', flexDirection: orderType === 'options' ? 'column' : 'row'}}>

    {optionItems}
      </div>
    </div>
  )
}
