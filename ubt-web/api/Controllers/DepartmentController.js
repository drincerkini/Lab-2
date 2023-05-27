import DepartmentModel from '../models/DepartmentModel';

const departmentController = {
    get: async(req, res) => {
        try{
            const list = await DepartmentModel.find();
            return res.json(list);
        }catch(err){
            console.log('error -- ', err);
        }
    },

    getbyid: async (req, res) => {
        try {
            const department = await DepartmentModel.findOne( { _id: req.params.id});
    
            if(!department) throw Error("Department not Found!");
    
            return res.json(department);
        }catch(err){
            res.status(404).json( {error: err.message});
        }
    },

    post: async (req, res) => {
        const department = new DepartmentModel({
            name: req.body.name,
            image: {
                filename: req.file.filename,
                mimetype: req.file.mimetype,
                size: req.file.size,
                url: req.file.path,
            },
        });
        try{
            const newDepartment = await department.save();
            res.status(200).json(newDepartment);
        }catch(err) {
            res.status(400).json( { error: err.message});
        }
    },
    
    delete: async (req, res) => {
        try{
            const removeDepartment = await DepartmentModel.remove( { _id: req.params.id } );
            removeDepartment.save();
            res.json(removeDepartment);
        }catch(err) {
            res.json( { msg: true });
        }
    }
}

export default departmentController;