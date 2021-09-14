import './App.css';
import { Switch,Route } from 'react-router-dom';
import Customer from "./pages/Customer";
import Company from './pages/Company';
import Home from "./Components/Home"
import {useState} from "react"
import {members} from "./members"


function App() {

  const [listMembers,setListMember]=useState(members)

  function handleDates(i,newName,newType){
    setListMember([...listMembers,{id:`${i}`,name:`${newName}`,type:`${newType}`}]);
    newName=""
    newType=""
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/customer/:id">
            <Customer members={listMembers}/>        
          </Route>
          <Route exact path="/company/:id">
            <Company members={listMembers}/>         
          </Route>
          <Route exact path="/">   
            <Home members={listMembers} callback={handleDates}/>       
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
