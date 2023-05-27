import express from 'express';
import ProfessorController from '../Controllers/ProfessorController';


const router = express.Router({mergeParams: true});

router.get('/', ProfessorController.get);

router.get('/:id', ProfessorController.getbyid);

router.post('/', ProfessorController.post);

router.delete('/', ProfessorController.delete);

export default router;