import React from 'react'
import {Link} from "react-router-dom";

export default function Room(props) {//room buttons
    return (
        <div>
            <Link to="/addroom"><button>Add Room</button></Link>
            <br/>
            {props.roomList.map((element)=>{return <Link to={`/room${element.name}`}> <button style={{backgroundColor: element.color, height:"100px", width:"100px"}}>{element.name}</button></Link>})}
           

        </div>
    )
}
