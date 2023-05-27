import ProfessorModel from '../models/ProfessorModel';

const professorController = {
    get: async(req, res) => {
        try{
            const list = await ProfessorModel.find();
            return res.json(list);
        }catch(err){
            console.log('error -- ', err);
        }
    },

    getbyid: async (req, res) => {
        try {
            const professor = await ProfessorModel.findOne( { _id: req.params.id});
    
            if(!professor) throw Error("Professor not Found!");
    
            return res.json(professor);
        }catch(err){
            res.status(404).json( {error: err.message});
        }
    },

    post: async (req, res) => {
        const professor = new ProfessorModel({
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
            const newProfessor = await professor.save();
            res.status(200).json(newProfessor);
        }catch(err) {
            res.status(400).json( { error: err.message});
        }
    },
    
    delete: async (req, res) => {
        try{
            const removeProfessor = await ProfessorModel.remove( { _id: req.params.id } );
            removeProfessor.save();
            res.json(removeProfessor);
        }catch(err) {
            res.json( { msg: true });
        }
    }
}

export default professorController;