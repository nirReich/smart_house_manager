import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function AddRoom(props) {

    const [roomName, setRoomName] = useState('');
    const [roomType, setRoomType] = useState('');
    const [roomColor, setRoomColor] = useState('');

    let setname = (e) => {
        setRoomName(e.target.value)
    }

    let setType = (e) => {
        setRoomType(e.target.value)
    }

    let setColor = (e) => {
        setRoomColor(e.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="New Room's Name" onChange={setname} />
            <br />
            <br />
            <label htmlFor="roomType">Select Room Type: </label>
            <select name="roomTYpe" id="roomType" onChange={setType}>
                <option value="" disabled selected>Select room type</option>
                <option value="bedroom">Bedroom</option>
                <option value="kitchen">Kitchen</option>
                <option value="bathroom">Bathroom</option>
            </select>
            <br />
            <br />
            <label htmlFor="roomcolor">Select Room Color: </label>
            <select name="roomcolor" id="roomColor" onChange={setColor}>
                <option value="" disabled selected>Select room color</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="Blue">Blue</option>
            </select>
            <br />
            <br />
            <Link to="/"><Button variant="danger" className="appButtons">Cancel</Button></Link>
            <Link to="/"><Button variant="primary" className="appButtons" onClick={() => { props.add(roomName, roomType, roomColor) }}>Add</Button></Link>

        </div>
    )
}
