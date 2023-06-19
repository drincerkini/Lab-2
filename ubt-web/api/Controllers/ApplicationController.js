import ApplicationModel from '../models/ApplicationModel';

const applicationController = {
    get: async(req, res) => {
        try{
            const list = await ApplicationModel.find();
            return res.json(list);
        }catch(err){
            console.log('error -- ', err);
        }
    },

    getbyid: async (req, res) => {
        try {
            const application = await ApplicationModel.findOne( { _id: req.params.id});
    
            if(!application) throw Error("Application not Found!");
    
            return res.json(application);
        }catch(err){
            res.status(404).json( {error: err.message});
        }
    },

    post: async (req, res) => {
        const application = new ApplicationModel({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            birthdate: req.body.birthdate,
            address: req.body.address,
            phone: req.body.phone,
            department: req.body.department,
        });
        try{
            const newApplication = await application.save();
            res.status(200).json(newApplication);
        }catch(err) {
            res.status(400).json( { error: err.message});
        }
    },
    
    delete: async (req, res) => {
        try{
            const removeApplication = await ApplicationModel.remove( { _id: req.params.id } );
            removeApplication.save();
            res.json(removeApplication);
        }catch(err) {
            res.json( { msg: true });
        }
    }
}

export default applicationController;