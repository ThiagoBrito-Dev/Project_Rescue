import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import { OccurrencesController } from './controllers/occurrencesController';

const router = Router();
const upload = multer(uploadConfig);
const occurrencesController = new OccurrencesController();

router.get('/occurrences/:id', occurrencesController.show);
router.post('/occurrences', upload.array('images'), occurrencesController.create);

export { router };