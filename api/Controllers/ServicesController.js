import ServiceModel from "../models/ServiceModel";


const serviceController = {
    get: async (req, res) => {
        try{
            const list = await ServiceModel.find();
            return res.json(list);
        }catch(err){
            console.log('error -- ', err);
        }
    },
    getbyid: async (req, res) => {
        try {
            const service = await ServiceModel.findOne( { _id: req.params.id});
    
            if(!service) throw Error("service not Found!");
    
            return res.json(service);
        }catch(err){
            res.status(404).json( {error: err.message});
        }
    },
    post: async (req, res) => {
        const service = new ServiceModel({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            categpry: req.body.category,
            image: {
                filename: req.file.filename,
                mimetype: req.file.mimetype,
                size: req.file.size,
                url: req.file.path,
            },
        });
        try{
            const newService = await service.save();
            res.status(200).json(newService);
        }catch(err) {
            res.status(400).json( { error: err.message});
        }
    },
    
    put: async (req, res) => {
        try{
            const updatedService = await ServiceModel.updateOne(
                { _id: req.params.id },
                {$set : {
                    title: req.body.title,
                    description: req.body.description,
                    price: req.body.price,
                    category: req.body.category,
                    image: req.body.image
                }}
            )
            const result = updatedService.save();
            res.json( result );
        }catch(err){
            res.json({ msg: err});
        }
    },
    delete: async (req, res) => {
        try{
            const removedService = await ServiceModel.remove( { _id: req.params.id } );
            removedService.save();
            res.json(removedService);
        }catch(err) {
            res.json( { msg: true });
        }
    }
};

export default serviceController;