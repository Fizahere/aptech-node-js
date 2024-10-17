import multer from 'multer';
import Gallery from '../models/galleryModel.js';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../files/'); 
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); 
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 10000000 }, 
}).single('file'); 

// export const getFiles=async (req,res)=>{
//     try {
//         const results=await Ga
//     } catch (error) {
//         res.status(500).json({message:'internal server error.'})
//     }
// }


export const uploadFile = async (req, res) => {
    try {
        upload(req, res, (err) => {
            if (err) {
                return res.status(400).json({ message: err.message });
            }
            if (!req.file) {
                return res.status(400).json({ message: 'Error: No File Selected!' });
            }
            const newFile=new Gallery({
            image:req.file.path
            })
            newFile.save();
            res.status(200).json({ message: `File Uploaded: ${req.file.filename}` });
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error.' });
    }
};
