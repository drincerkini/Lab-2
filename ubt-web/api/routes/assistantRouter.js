import express from 'express';
import AssistantController from '../Controllers/AssistantController';


const router = express.Router({mergeParams: true});

router.get('/', AssistantController.get);

router.get('/:id', AssistantController.getbyid);

router.post('/', AssistantController.post);

router.delete('/', AssistantController.delete);

export default router;