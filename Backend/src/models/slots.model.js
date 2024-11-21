import mongoose,{Schema} from "mongoose";
const slotSchema = new Schema(
    {
        slotNumber:{
            type:Number,
            required:true,
            unique:true
        },
        isOccupied:{
            type:Boolean,
            default:false
        },
        entryTime: {
            type: Date,
            default: null
        },
},{
    timestamps:true,
});
slotSchema.statics.initializeSlots = async function() {
    const existingSlots = await this.countDocuments();
    if (existingSlots === 0) {
      const slots = Array.from({ length: 8 }, (_, i) => ({
        slotNumber: i + 1,
        isOccupied: false
      }));
      await this.create(slots);
    }
};
export const parkingSlot = mongoose.model('ParkingSlot',slotSchema);
