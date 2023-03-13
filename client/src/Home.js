import './Home.css'
import DeleteModal from './DeleteModal'
import { Fragment, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { deleteUsers } from './crud';

function Home({users}) {
  
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleDelete = ({id}) => {
    setShowModal(false);
    deleteUsers(id);
  };

  const handleClose = () => {
    setShowModal(false);
  }; 

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredItems = users.filter(item =>
    item.firstname.toLowerCase().includes(searchQuery.toLowerCase())
  );

      
    return (
      <Fragment>
        <div style={{display:'flex',paddingLeft:'80px',paddingTop:'80px',fontFamily:'serif'}}title='Student Management System'>Student Management System</div>
      <div style={{display:'flex',justifyContent:'space-between',padding:'80px',paddingTop:'20px'}}>
      <input className="searchbar" style={{border:'box'}}  type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search..." />
       <button type="submit" style={{width:'60px'}} onClick={()=>{navigate('/add',{state:{action:'create'}})}}>Add</button>
      </div>
        <div className='table-wrapper'>
          <table className="fl-table">
  <thead>
  <tr>
    <th>ID</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Location</th>
    <th>Email</th>
    <th>DOB</th>
    <th>Education</th>
    <th>Action</th>
    <th>Delete</th>
  </tr>
  </thead>
  {filteredItems.map((user)=>{
    return (
      <tbody key={user._id}>
    <tr >
      <th>{user._id}</th>
      <th>{user.firstname}</th>
      <th>{user.lastname}</th>
      <th>{user.location}</th>
      <th>{user.email}</th>
      <th>{user.dob}</th>
      <th>{user.education}</th>
      <th><button type='submit' onClick={() => navigate('/add',{state:{action:'edit',user:user}})}><i className="fa fa-edit"></i> Edit</button></th>
      <th><button type='submit' onClick={() => setShowModal(true)}><i className="fa fa-trash"></i> Delete</button>
      {showModal && <DeleteModal onDelete={handleDelete.bind(this,{id:user._id})} onClose={handleClose} />}</th>
    </tr>
    </tbody>
    )})}
</table>
        </div>
        </Fragment>
    )
}

export default Home;