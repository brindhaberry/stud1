import React, { useState } from 'react';
import {updateUsers,createUsers,getUsers} from './crud'
import {useLocation,useNavigate} from'react-router-dom'



const Form = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [users,setUsers]=useState([]); 
  const [formData, setFormData] = useState({

    firstname: location.state.user?location.state.user.firstname:'',
    lastname: location.state.user?location.state.user.lastname:'',
    email: location.state.user?location.state.user.email:'',
    location: location.state.user?location.state.user.location:'',
    dob: location.state.user?location.state.user.dob:'',
    education: location.state.user?location.state.user.education:'',
    about: location.state.user?location.state.user.about:'',
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data here
    if(location.state.action === 'create'){
      createUsers(formData).catch((e)=>{console.log(e)});
    
    }else if(location.state.action === 'edit'){
      
      updateUsers({id:location.state.user._id,data:formData}).then((res)=>{console.log('user updated after edit data',res)}).catch((e)=>{});
    }
    getUsers().then(res=>setUsers(res.data)).catch(err=>console.log(err));
    navigate('/',{state:{users:users}});
    
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column',alignItems: 'space-between', padding: '2rem' }}>
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <label style={{ paddingLeft:'10px',width: '20%'}}>
          First Name:
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} style={{  border: '1px solid black', width: '40%', padding: '0.5rem' }} />
        </label>
        <label style={{ paddingLeft:'10px',width: '20%'}}>
          Last Name:
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} style={{ border: '1px solid black', width: '40%', padding: '0.5rem' }} />
        </label>
      </div>
      <div style={{ paddingLeft:'10px', marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Location: 
          <input type="text" name="location" value={formData.location} onChange={handleChange} style={{ border: '1px solid black', width: '40%', padding: '0.5rem' }} />
        </label>
      </div>
      <div style={{ paddingLeft:'10px',marginBottom: '1rem'}}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Email:  
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '40%', padding: '0.5rem',border:'1px solid black' }} />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Date of Birth:
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} style={{ border: '1px solid black', width: '40%', padding: '0.5rem' }} />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ marginBottom: '0.5rem' }}>
          Education:
          <input type="text" name="education" value={formData.education} onChange={handleChange} style={{ border: '1px solid black', width: '40%', padding: '0.5rem' }} />
        </label>
      </div>
      <div style={{ marginBottom: '1rem',paddingLeft:'10px', }}>
      <label>
          About:
          <textarea name="about" value={formData.about} onChange={handleChange} />
       </label>
      </div>
      <button style={{justifyContent:'center',width:'20%'}} type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
      );}

export default Form; 