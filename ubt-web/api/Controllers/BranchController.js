import BranchModel from '../models/BranchModel';

const branchController = {
    get: async(req, res) => {
        try{
            const list = await BranchModel.find();
            return res.json(list);
        }catch(err){
            console.log('error -- ', err);
        }
    },

    getbyid: async (req, res) => {
        try {
            const branch = await BranchModel.findOne( { _id: req.params.id});
    
            if(!branch) throw Error("Branch not Found!");
    
            return res.json(branch);
        }catch(err){
            res.status(404).json( {error: err.message});
        }
    },

    post: async (req, res) => {
        const branch = new BranchModel({
            name: req.body.name,
            smial: req.body.smial,
            location: req.body.location,
            image: {
                filename: req.file.filename,
                mimetype: req.file.mimetype,
                size: req.file.size,
                url: req.file.path,
            },
        });
        try{
            const newBranch = await branch.save();
            res.status(200).json(newBranch);
        }catch(err) {
            res.status(400).json( { error: err.message});
        }
    },
    
    delete: async (req, res) => {
        try{
            const removeBranch = await BranchModel.remove( { _id: req.params.id } );
            removeBranch.save();
            res.json(removeBranch);
        }catch(err) {
            res.json( { msg: true });
        }
    }
}

export default branchController;