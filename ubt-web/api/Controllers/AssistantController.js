import AssistantModel from '../models/AssistantModel';

const assistantController = {
    get: async(req, res) => {
        try{
            const list = await AssistantModel.find();
            return res.json(list);
        }catch(err){
            console.log('error -- ', err);
        }
    },

    getbyid: async (req, res) => {
        try {
            const assistant = await AssistantModel.findOne( { _id: req.params.id});
    
            if(!assistant) throw Error("Assistant not Found!");
    
            return res.json(assistant);
        }catch(err){
            res.status(404).json( {error: err.message});
        }
    },

    post: async (req, res) => {
        const assistant = new AssistantModel({
            name: req.body.name,
            surname: req.body.surname,
            department: req.body.department,
            degree: req.body.degree,
            image: {
                filename: req.file.filename,
                mimetype: req.file.mimetype,
                size: req.file.size,
                url: req.file.path,
            },
        });
        try{
            const newAssistant = await assistant.save();
            res.status(200).json(newAssistant);
        }catch(err) {
            res.status(400).json( { error: err.message});
        }
    },
    
    delete: async (req, res) => {
        try{
            const removeAssistant = await AssistantModel.remove( { _id: req.params.id } );
            removeAssistant.save();
            res.json(removeAssistant);
        }catch(err) {
            res.json( { msg: true });
        }
    }
}

export default assistantController;