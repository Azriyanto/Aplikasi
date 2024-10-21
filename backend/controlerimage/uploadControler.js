import Gallery from "../models/Uplodimage.js"
import path from "path";
import fs from "fs";

export const getGallery = async(req,res)=>{
    try{
        const response = await Gallery.findAll();
        res.json(response);
    } catch (error){
        console.log(error.message);
    }
}
export const getGalleryById = async(red,res)=>{
    try{
        const response = await Gallery.findOne({
            where:{
                id : red.params.id
            }
        });
        res.json(response);
    } catch (error){
        console.log(error.message);
    }
}
export const saveGallery = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg:"No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: 
        "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json ({msg: "Image must be less than 5MB"});
    
    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try{
            await Gallery.create({name: name, image: fileName, url: url});
            res.status(201).json({msg:"Image Created Succesfuly"});
        }catch (error){
            console.log(error.message);
        }
    })
}
export const updateGallery = async(req, res)=>{

    const gallery = await Gallery.findOne({
        where:{
            id: req.params.id
        }
    });
    if(!gallery) return res.status(404).json({msg: "No Data Found"});

    let fileName = "";
    if(req.files === null){
        fileName = Gallery.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];
        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: 
            "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json ({msg: "Image must be less than 5MB"});
        
        const filepath = `./public/images/${gallery.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    try{
        await Gallery.update({name: name, image:fileName,url:url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Galeri Upsated successfuly"})
    }catch (error){
        console.log(error.message);
    }

}
export const deleteGallery = async(req, res)=>{
    const gallery = await Gallery.findOne({
        where:{
            id: req.params.id
        }
    });
    if(!gallery) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${gallery.image}`;
        fs.unlinkSync(filepath);
        await Gallery.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg:"gallery Deleted successfuly"});
    } catch (error){
        console.log(error.message);
    }

}