import express from 'express';
import DepartmentController from '../Controllers/DepartmentController';


const router = express.Router({mergeParams: true});

router.get('/', DepartmentController.get);

router.get('/:id', DepartmentController.getbyid);

router.post('/', DepartmentController.post);

router.delete('/', DepartmentController.delete);

export default router;