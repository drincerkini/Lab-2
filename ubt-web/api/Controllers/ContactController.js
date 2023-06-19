import ContactModel from '../models/ContactModel';

const contactController = {
    get: async(req, res) => {
        try{
            const list = await ContactModel.find();
            return res.json(list);
        }catch(err){
            console.log('error -- ', err);
        }
    },

    getbyid: async (req, res) => {
        try {
            const contact = await ContactModel.findOne( { _id: req.params.id});
    
            if(!contact) throw Error("Contact not Found!");
    
            return res.json(contact);
        }catch(err){
            res.status(404).json( {error: err.message});
        }
    },

    post: async (req, res) => {
        const contact = new ContactModel({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message,
        });
        try{
            const newContact = await contact.save();
            res.status(200).json(newContact);
        }catch(err) {
            res.status(400).json( { error: err.message});
        }
    },
    
    delete: async (req, res) => {
        try{
            const removeContact = await ContactModel.remove( { _id: req.params.id } );
            removeContact.save();
            res.json(removeContact);
        }catch(err) {
            res.json( { msg: true });
        }
    }
}

export default contactController;