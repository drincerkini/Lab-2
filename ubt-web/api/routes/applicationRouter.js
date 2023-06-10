import express from 'express';
import ApplicationController from '../Controllers/ApplicationController';


const router = express.Router({mergeParams: true});

router.get('/', ApplicationController.get);

router.get('/:id', ApplicationController.getbyid);

router.post('/', ApplicationController.post);

router.delete('/:id', ApplicationController.delete);

export default router;