import express from 'express';
import { 
    getAllSlots, 
    updateSlotStatus, 
    initializeSlots 
} from '../controllers/parkingSlot.controller.js';

const router = express.Router();

router.get('/', getAllSlots);
router.post('/initialize', initializeSlots);
router.put('/:slotNumber/status', updateSlotStatus);

export default router;