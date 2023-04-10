import express from 'express';
import contactController from '../Controllers/ContactController';

const router = express.Router({mergeParams: true});

router.get('/', contactController.get);

router.get('/:id', contactController.getbyid);

router.post('/', contactController.post);

router.put('/:id',contactController.put);

router.delete('/:id',contactController.delete);

export default router;