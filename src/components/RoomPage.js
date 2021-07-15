import React, { useState } from 'react'
import ProductList from '../components/ProductList'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function RoomPage(props) {//each room page

    const [flag, setFlag] = useState(false);
    
    let changeFlag = () => {
        setFlag(false)
    }

    let showProducts = () => {
        if (flag === false) {
            return <Button variant="success" onClick={() => { setFlag(!flag) }}>Add Product</Button>
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
            {props.roomList.product.map((element,prodIndex) => { return <button style={props.bgColor(props.index,prodIndex)} onClick={()=>{props.switchOnOff(props.index,prodIndex)}}>{element.type}</button> })}
            <br/>
            {showProducts()}
            <Link to="/"><Button variant="primary">Back</Button></Link>

        </div>
    )
}
