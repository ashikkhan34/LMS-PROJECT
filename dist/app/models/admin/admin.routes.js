import express from 'express';
import { adminController } from './admin.controller.js';
const router = express.Router();
router.post('/create-admin', adminController.createAdminController);
router.get('/', adminController.getAllAdminController);
router.get('/:id', adminController.getAAdminController);
router.put('/update-admin/:id', adminController.updateAdminController);
router.delete('/delete-admin/:id', adminController.deleteAdminController);
export const adminRoute = router;
//# sourceMappingURL=admin.routes.js.map