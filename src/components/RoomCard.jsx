import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function RoomCard(props) {
    return (
        <div className="roomBlocks" style={{ backgroundColor: props.roomColor }}>
            <h3>room {props.roomName}</h3>
            <p>{props.roomType}</p>
            <br />
            <div>
                <Link to={`/room${props.roomName}`}><Button className="roomBlocksBtn">Enter</Button> </Link>
            </div>


        </div>
    )
}
