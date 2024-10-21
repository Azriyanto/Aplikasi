import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUser] = useState([]);

  useEffect(()=>{
    getUsers();
  },[]);

  const getUsers = async()=>{
    const respons = await axios.get('http://localhost:5000/users');
    // console.log(respons.data);
    setUser(respons.data);
  };

   const deleteUser = async (id) =>{
        try{
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers();
        }catch (error){
            console.log(error); 
        }
   }

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Data User" subtitle="Data All User" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
      </Box>
      <Box>
            <div className="columns mt-5 is-centered">
                <div className="column is-half">
                    <Link to={`addUsers`} className="button is-success m-2">Tambah Data</Link>
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user,index)=>(
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>
                                        <Link to={`edituser/${user.id}`} className="button is-mall is-info m-2">Edit</Link>
                                        <button onClick={()=>deleteUser(user.id)} className="button is-mall is-danger m-2">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>        
      </Box>
    </Box>
  );
};

export default Dashboard;
