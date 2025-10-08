import express from 'express'
import { certificateController } from './certification.controller.js';

const router = express.Router()

router.post('/create-certificate',certificateController.createCertificateController)
router.get('/',certificateController.getAllCertificateController)
router.get('/:id',certificateController.getACertificateController)
router.put('/update-certificate/:id',certificateController.updateCertificateController)
router.delete('/delete-certificate/:id', certificateController.deleteCertificateController)

export const certificateRouter = router;