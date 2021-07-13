import React, { useState } from 'react'
import ProductList from '../components/ProductList'

export default function RoomPage(props) {//each room page

    const [flag, setFlag] = useState(false);
    
    let changeFlag = () => {
        setFlag(false)
    }

    let showProducts = () => {
        if (flag === false) {
            return <button onClick={() => { setFlag(!flag) }}>Add Product</button>
        }
        else {
            return <ProductList addProduct={props.addProduct} index={props.index} changeFlag={changeFlag} />

        }
    }


    return (
        <div>
            <h3>Room Name: {props.roomList.name}</h3>

            <h3>Type of Room: {props.roomList.type}</h3>
            <br/>
            {props.roomList.product.map((element,prodIndex) => { return <button style={props.bgColor(props.index)} onClick={()=>{props.switchOnOff(props.index,prodIndex)}}>{element.type}</button> })}
            <br/>
            {showProducts()}

        </div>
    )
}
