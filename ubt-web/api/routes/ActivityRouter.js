import express from 'express';
import activityController from '../Controllers/activityController';


const router = express.Router({mergeParams: true});

router.get('/', activityController.get);

router.get('/:id', activityController.getbyid);

router.post('/', activityController.post);

router.delete('/', activityController.delete);

export default router;