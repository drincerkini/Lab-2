import NewsModel from "../models/NewsModel";


const newsController = {
    get: async (req, res) => {
        try{
            const list = await NewsModel.find();
            return res.json(list);
        }catch(err){
            console.log('error -- ', err);
        }
    },
    getbyid: async (req, res) => {
        try {
            const info = await NewsModel.findOne( { _id: req.params.id});
    
            if(!info) throw Error("Product not Found!");
    
            return res.json(info);
        }catch(err){
            res.status(404).json( {error: err.message});
        }
    },
    post: async (req, res) => {
        const info = new NewsModel({
            title: req.body.title,
            description: req.body.description,
            image: {
                filename: req.file.filename,
                mimetype: req.file.mimetype,
                size: req.file.size,
                url: req.file.path,
            },
        });
        try{
            const newInfo = await info.save();
            res.status(200).json(newInfo);
        }catch(err) {
            res.status(400).json( { error: err.message});
        }
    },
    
    put: async (req, res) => {
        try{
            const updatedInfo = await NewsModel.updateOne(
                { _id: req.params.id },
                {$set : {
                    title: req.body.title,
                    description: req.body.description,
                    image: {
                        filename: req.file.filename,
                        mimetype: req.file.mimetype,
                        size: req.file.size,
                        url: req.file.path,
                    },
                }}
            )
            const result = updatedInfo.save();
            res.json( result );
        }catch(err){
            res.json({ msg: err});
        }
    },
    delete: async (req, res) => {
        try{
            const removeInfo = await NewsModel.remove( { _id: req.params.id } );
            removeInfo.save();
            res.json(removeInfo);
        }catch(err) {
            res.json( { msg: true });
        }
    }
};

export default newsController;