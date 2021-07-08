import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddRoom from './components/AddRoom'
import './App.css';
import Header from './components/Header';
import Room from './components/Room';
import RoomPage from './components/RoomPage';

function App() {

  const [roomList, setRoomList] = useState([]);

  let addRoomToList = (name, type, color) => {
    setRoomList([...roomList, { name: name, type: type, color: color, product: [] }])
  }

  let addProduct = (index,type)=>{
   
    let tempProduct = {condition:false, type:type};
    roomList[index].product.push(tempProduct);
    setRoomList([...roomList]);
  }

  let switchOnOff=(indexRoom,indexProd)=>{
    roomList[indexRoom].product[indexProd].condition = !roomList[indexRoom].product[indexProd].condition
    setRoomList([...roomList]);
  }

  let bgColor=()=>{
    debugger
    if (roomList.product.condition === false) {
        return {backgroundColor: "red", height:"100px", width:"100px"}
    }
    else{
        return {backgroundColor: "green", height:"50px", width:"50px"}
    }
}


  return (
    <div className="App">

      <Header />

      <Router>

     
      
        <Switch>
          {roomList.map((element,index)=>{return <Route exact path={`/room${element.name}`} component={()=>{return <RoomPage roomList={element} index={index} addProduct={addProduct} switchOnOff={switchOnOff} bgColor={bgColor} />}}/>})}
          
          <Route exact path={'/'} component={()=>{return <Room roomList={roomList} />}}/>
        
          <Route exact path={"/addroom"} component={() => { return <AddRoom add={addRoomToList} /> }} />
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
