import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const theme = useTheme();
  const [title,setTitle] = useState("");
  const [file,setFile] = useState("");
  const [preview,setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) =>{
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveGallery = async(e)=>{
    e.preventDefault();
    const formaData = new FormData();
    formaData.append("file", file);
    formaData.append("title", title);
    try{
      await axios.post("http://localhost:5000/gallery", formaData, {
        headers:{
          "Content-type":"multipart/form-data"
        }
      });
      navigate("/gallery");
    }catch (error){
      console.log(error);
    }
  } 
 
  return (
    <Box m="20px">
        <div className="columns mt-5 is-centered"> 
              <div className="column is-half">
                    <form onSubmit={saveGallery}>
                      
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input type="text" className="input" value={title} onChange={(e)=> setTitle(e.target.value)}
                                placeholder="name"/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Image</label>
                            <div className="control">
                                <div className="file">
                                    <label className="file-label">
                                        <input 
                                          type="file" 
                                          className="file-input" 
                                          onChange={loadImage}/>

                                        <span className="file-cta">
                                            <span className="file-label">Choose a file....</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {preview ? (
                            <figure className="image is-128x128">
                                <img src={preview} alt="Preview Image"/>
                            </figure>
                        ):(
                          ""
                        )}

                        <div className="field m-5">
                          <div className="control">
                            <button type="submit" className="button is-success">
                              Save
                            </button>
                          </div>
                        </div>

                    </form>
              </div>
        </div>
    </Box>
  );
};

export default Dashboard;
