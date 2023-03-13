import axios from 'axios'

export const createUsers = async (data) => {
    try{
    const response = await axios.post('/users',data);
  }catch(e){
    console.log(e);
  }
  };


  export const getUsers = async () => {
    try{
    const response = await axios.get('/users',(req,res)=>{
      return res;
    });
    return response;
  }catch(e){
    console.log(e);
  }
  };


  export const deleteUsers = async (id) => {
    try{
    const response = await axios.delete(`/users/${id}`,(req,res)=>{
    });
  }catch(e){
    console.log(e);
  }
  };

   export const updateUsers = async ({id,data}) => {
    try{
    const response = await axios.put(`/users/${id}`,data,(req,res)=>{     
    });
  }catch(e){
    console.log(e);
  }
  };