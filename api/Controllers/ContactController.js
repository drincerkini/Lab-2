import ContactModel from "../models/ContactModel";


const contactController = {
    get: async (req, res) => {
        try{
            const list = await ContactModel.find();
            return res.json(list);
        }catch(err){
            console.log('error -- ', err);
        }
    },
    getbyid: async (req, res) => {
        try {
            const info = await ContactModel.findOne( { _id: req.params.id});
    
            if(!info) throw Error("Product not Found!");
    
            return res.json(info);
        }catch(err){
            res.status(404).json( {error: err.message});
        }
    },
    post: async (req, res) => {
        const info = new ContactModel({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            phone: req.body.phone,
            description: req.body.description
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
            const updatedInfo = await ContactModel.updateOne(
                { _id: req.params.id },
                {$set : {
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                    phone: req.body.phone,
                    description: req.body.description
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
            const removeInfo = await ContactModel.remove( { _id: req.params.id } );
            removeInfo.save();
            res.json(removeInfo);
        }catch(err) {
            res.json( { msg: true });
        }
    }
};

export default contactController;