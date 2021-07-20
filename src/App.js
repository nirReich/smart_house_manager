import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddRoom from './components/AddRoom'
import './App.css';
import Header from './components/Header';
import Room from './components/Room';
import RoomPage from './components/RoomPage';

function App() {

  const [roomList, setRoomList] = useState([]);

  let addRoomToList = (name, type, color) => {
    if (name.length < 4) {
      alert(`Room name must be 4 letters or more!`)
    }
    else if(!type){
      alert('Must select room type!')
    }
    else if(!color){
     alert('must select room color!') 
    }
    else{
      setRoomList([...roomList, { name: name, type: type, color: color, product: [] }])
    }
    
  }

  let addProduct = (index, type) => {
    let tempProduct = { condition: false, type: type };
    roomList[index].product.push(tempProduct);
    setRoomList([...roomList]);
  }

  let switchOnOff = (indexRoom, indexProd) => {
    roomList[indexRoom].product[indexProd].condition = !roomList[indexRoom].product[indexProd].condition
    setRoomList([...roomList]);
    console.log(roomList[indexRoom].product[indexProd]);
  }

  let bgColor = (index, prodIndex) => {
    if (roomList[index].product[prodIndex].condition === false) {
      return { backgroundColor: "red" }
    }
    else {
      return { backgroundColor: "green" }
    }
  }


  return (
    <div className="App">

      <Header />

      <Router>



        <Switch>
          {roomList.map((element, index) => {
            return <Route exact path={`/room${element.name}`} component={() => {
              return <RoomPage roomList={element} index={index} addProduct={addProduct} switchOnOff={switchOnOff} bgColor={bgColor} />}} />
          })}

          <Route exact path={'/'} component={() => { return <Room roomList={roomList} /> }} />

          <Route exact path={"/addroom"} component={() => { return <AddRoom add={addRoomToList} /> }} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
