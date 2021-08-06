import React, {useState, useEffect} from "react";
import './App.css';
import Card from "./Card";
import {getUsers} from "./apiCalls";

const App = () => {

  const [page, setPage] = useState(0);
  const [apiData, setApiData] = useState({
    "page":"",
    "per_page":"",
    "total":"",
    "total_pages":2,
    "data":[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}],
    "support":{"url":"https://reqres.in/#support-heading",
    "text":"To keep ReqRes free, contributions towards server costs are appreciated!"}
  })

  const fetchData = () =>{
    getUsers(page)
    .then(response =>{
      setApiData(response);
    })
  }

  useEffect(() =>{
    fetchData();
  },[page])

  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title">User List</h1>
      </div>
      <div className="user-container">
        {
          apiData.data.map((user) =>{
            return <Card avatar={user.avatar} first_name={user.first_name} last_name={user.last_name} email={user.email}/>
          })
        }
      </div>
      <div className="page-counter-container">
        <h3>Select the Page:</h3>
        <select id="dropdown" value={page} onChange={(e) => setPage(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
    </div>
  );
}

export default App;
