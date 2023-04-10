import express from 'express';
import reviewsController from '../Controllers/ReviewsController';

const router = express.Router({mergeParams: true});

router.get('/', reviewsController.get);

router.get('/:id', reviewsController.getbyid);

router.post('/', reviewsController.post);

router.put('/:id',reviewsController.put);

router.delete('/:id',reviewsController.delete);

export default router;