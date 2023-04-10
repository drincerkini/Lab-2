import express from 'express';
import servicesController from '../Controllers/ServicesController';

const router = express.Router({mergeParams: true});

router.get('/', servicesController.get);

router.get('/:id', servicesController.getbyid);

router.post('/', servicesController.post);

router.put('/:id',servicesController.put);

router.delete('/:id',servicesController.delete);

export default router;