import React from 'react'
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function Room(props) {//room buttons
    return (
        <div>
            <Link to="/addroom"><Button variant="primary">Add Room</Button></Link>
            <br/>
            {props.roomList.map((element)=>{return  <Link to={`/room${element.name}`}> <button className="roomsBlocks" style={{backgroundColor: element.color}}>{element.name}</button></Link>})}
           
        
        </div>
        
    )
}
