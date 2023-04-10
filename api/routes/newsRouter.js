import express from 'express';
import newsController from '../Controllers/NewsController';

const router = express.Router({mergeParams: true});

router.get('/', newsController.get);

router.get('/:id', newsController.getbyid);

router.post('/', newsController.post);

router.put('/:id',newsController.put);

router.delete('/:id',newsController.delete);

export default router;