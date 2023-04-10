import express from 'express';
import teamController from '../Controllers/TeamsController';

const router = express.Router({mergeParams: true});

router.get('/', teamController.get);

router.get('/:id', teamController.getbyid);

router.post('/', teamController.post);

router.put('/:id',teamController.put);

router.delete('/:id',teamController.delete);

export default router;