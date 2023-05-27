import express from 'express';
import BranchController from '../Controllers/BranchController';


const router = express.Router({mergeParams: true});

router.get('/', BranchController.get);

router.get('/:id', BranchController.getbyid);

router.post('/', BranchController.post);

router.delete('/', BranchController.delete);

export default router;