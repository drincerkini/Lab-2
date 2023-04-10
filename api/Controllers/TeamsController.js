import TeamModel from "../models/TeamModel";


const teamController = {
    get: async (req, res) => {
        try{
            const list = await TeamModel.find();
            return res.json(list);
        }catch(err){
            console.log('error -- ', err);
        }
    },
    getbyid: async (req, res) => {
        try {
            const team = await TeamModel.findOne( { _id: req.params.id});
    
            if(!team) throw Error("Product not Found!");
    
            return res.json(team);
        }catch(err){
            res.status(404).json( {error: err.message});
        }
    },
    post: async (req, res) => {
        const team = new TeamModel({
            name: req.body.name,
            surname: req.body.surname,
            position: req.body.position,
            image: {
                filename: req.file.filename,
                mimetype: req.file.mimetype,
                size: req.file.size,
                url: req.file.path,
            },
        });
        try{
            const newTeam = await team.save();
            res.status(200).json(newTeam);
        }catch(err) {
            res.status(400).json( { error: err.message});
        }
    },
    
    put: async (req, res) => {
        try{
            const updatedTeam = await TeamModel.updateOne(
                { _id: req.params.id },
                {$set : {
                    name: req.body.name,
                    surname: req.body.surname,
                    position: req.body.position,
                    image: {
                        filename: req.file.filename,
                        mimetype: req.file.mimetype,
                        size: req.file.size,
                        url: req.file.path,
                    },
                }}
            )
            const result = updatedTeam.save();
            res.json( result );
        }catch(err){
            res.json({ msg: err});
        }
    },
    delete: async (req, res) => {
        try{
            const removeTeam = await TeamModel.remove( { _id: req.params.id } );
            removeTeam.save();
            res.json(removeTeam);
        }catch(err) {
            res.json( { msg: true });
        }
    }
};

export default teamController;