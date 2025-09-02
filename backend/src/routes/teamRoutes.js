import express from 'express';
import teamController from '../controllers/teamController.js';

const router = express.Router();

router.get('/team-members', teamController.getAllMembers);
router.post('/team-members', teamController.createMember);
router.put('/team-members/:id', teamController.updateMember);
router.delete('/team-members/:id', teamController.deleteMember);

export default router;