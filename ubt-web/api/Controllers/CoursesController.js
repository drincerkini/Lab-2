import CoursesModel from '../models/CoursesModel';

const coursesController = {
    get: async(req, res) => {
        try{
            const list = await CoursesModel.find();
            return res.json(list);
        }catch(err){
            console.log('error -- ', err);
        }
    },

    getbyid: async (req, res) => {
        try {
            const courses = await CoursesModel.findOne( { _id: req.params.id});
    
            if(!courses) throw Error("Courses not Found!");
    
            return res.json(courses);
        }catch(err){
            res.status(404).json( {error: err.message});
        }
    },

    post: async (req, res) => {
        const courses = new CoursesModel({
            name: req.body.name,
            credits: req.body.credits,
            department: req.body.department,
            image: {
                filename: req.file.filename,
                mimetype: req.file.mimetype,
                size: req.file.size,
                url: req.file.path,
            },
        });
        try{
            const newCourses = await courses.save();
            res.status(200).json(newCourses);
        }catch(err) {
            res.status(400).json( { error: err.message});
        }
    },
    
    delete: async (req, res) => {
        try{
            const removeCourses = await CoursesModel.remove( { _id: req.params.id } );
            removeCourses.save();
            res.json(removeCourses);
        }catch(err) {
            res.json( { msg: true });
        }
    }
}

export default coursesController;