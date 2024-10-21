import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors"; 
import UserRoute from "./routes/UserRoute.js";
import GalleryRoute from "./routes/ImageRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(FileUpload());
app.use(express.static("public"));
app.use(GalleryRoute);

app.listen(5000, ()=> console.log('Server up and running....'));
