import { parkingSlot } from "../models/slots.model.js";

export const getAllSlots = async (req, res) => {
  try {
    const slots = await parkingSlot.find().sort({ slotNumber: 1 }); 
    const slotStatuses = slots.map((slot) => slot.isOccupied); 

    res.status(200).json({ 
      slots: slots,         
      statuses: slotStatuses 
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching parking slots", error });
  }
};

export const updateSlotStatus = async (req, res) => {
  const { slotNumber } = req.params; 
  const { isOccupied } = req.body;  

  try {
    const updatedSlot = await parkingSlot.findOneAndUpdate(
      { slotNumber: parseInt(slotNumber) }, 
      {
        isOccupied, 
        entryTime: isOccupied ? new Date() : null, 
      },
      { new: true } 
    );

    if (!updatedSlot) {
      return res.status(404).json({ message: "Slot not found" });
    }

    res.status(200).json(updatedSlot); 
  } catch (error) {
    res.status(500).json({ message: "Error updating slot status", error });
  }
};

// Controller to initialize slots in the database
export const initializeSlots = async (req, res) => {
  try {
    await parkingSlot.initializeSlots(); // Initialize slots using the model's method
    res.status(200).json({ message: "Slots initialized successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error initializing slots", error });
  }
};
