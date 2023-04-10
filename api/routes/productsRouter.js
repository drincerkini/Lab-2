import express from 'express';
import prodController from '../Controllers/ProductsController';

const router = express.Router({mergeParams: true});

router.get('/', prodController.get);

router.get('/:id', prodController.getbyid);

router.post('/', prodController.post);

router.put('/:id',prodController.put);

router.delete('/:id',prodController.delete);

export default router;