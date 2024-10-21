import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";



const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [gallery, setGallery] = useState([]);
  
  useEffect (()=>{
      getGallery();
  },[]);

  const getGallery = async()=>{
    const response = await axios.get("http://localhost:5000/gallery");
    setGallery(response.data);
  }

  const deleteGallery = async(galleryId)=>{
    try{
      await axios.delete(`http://localhost:5000/gallery/${galleryId}`);
      getGallery();
    }catch (error){
      console.log(error);
    }
  }

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Gallery" subtitle="Welcome to your gallery" />
      </Box>

        <div className="container mt-5"> 
              <Link to="/addimage" className="button is-success m-5">Tambah Data</Link>
              <div className="columns is-multiline">
                {gallery.map((gallery)=>(

                  <div className="column is-one-quarter" key={gallery.id}>
                  <div className="card">

                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src={gallery.url} alt="image"/>
                      </figure>
                    </div>

                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">{gallery.name}</p>
                        </div>
                      </div>
                    </div>

                    <footer className="card-footer">
                      <Link to={`/editimage/${gallery.id}`} className="card-footer-item">Edit</Link>
                      <a onClick={()=> deleteGallery(gallery.id)} className="card-footer-item">Delete</a>
                    </footer>

                  </div>

                  </div>

                ))}

              </div>
        </div>

    </Box>
  );
};

export default Dashboard;
