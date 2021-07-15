import React from 'react'
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import RoomCard from './RoomCard'

export default function Room(props) {//room buttons
    return (
        <div>
            <Link to="/addroom"><Button variant="primary">Add Room</Button></Link>
            <br/>
            <div className="roomCardsContainer">
                {props.roomList.map((element)=>{return  <RoomCard roomName={element.name} roomColor={element.color} roomType={element.type}/>})}
            </div>
           
            
        </div>
        
    )
}
