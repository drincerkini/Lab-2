import express from 'express';
import ContactController from '../Controllers/ContactController';


const router = express.Router({mergeParams: true});

router.get('/', ContactController.get);

router.get('/:id', ContactController.getbyid);

router.post('/', ContactController.post);

router.delete('/:id', ContactController.delete);

export default router;