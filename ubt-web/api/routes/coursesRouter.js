import express from 'express';
import CoursesController from '../Controllers/CoursesController';


const router = express.Router({mergeParams: true});

router.get('/', CoursesController.get);

router.get('/:id', CoursesController.getbyid);

router.post('/', CoursesController.post);

router.delete('/', CoursesController.delete);

export default router;