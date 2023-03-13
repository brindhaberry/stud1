import React, { useState ,useEffect} from 'react';

import Home from './Home';
import DeleteModal from './DeleteModal';
import Form from './Form'
import {getUsers} from './crud'
import {Routes,Route,BrowserRouter}from 'react-router-dom'


function App() {
  const[users,setUsers]= useState([]);

  useEffect(()=>{
    getUsers().then((res)=>{setUsers(res.data)}).catch((e)=>{console.log(e)})
  },[]);

  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home users={users}/>}/>
        <Route exact path='/add' element={<Form/>}/>
        <Route exact path='/delete' element={<DeleteModal/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}





export default App;