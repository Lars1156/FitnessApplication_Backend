const Booking = require('../modules/booking');
const Trainer = require('../modules/trainer');

async function bookTrainer(req,res){
    try{
       const {trainerId , userId }= req.body;
        console.log("**User&TrainerId**", req.body);
        const trainer = await Trainer.findById(trainerId);
        if (!trainer || !trainer.available) {
            return res.status(400).json({ msg: "Trainer is not available" });
        }

        const newBooking = new Booking({ userId, trainerId });
        console.log("***User and Trainer Id", newBooking)
        await newBooking.save();

        trainer.available = false;
        await trainer.save();

        res.status(200).json({ msg: "Trainer booked successfully" })
    }catch(error){
        return res.status(400).json({msg:"Server Error! ,please Try After Some time"})
    }
}
async function getUserBookings(req, res) {
    try {
        const { userId } = req.params;
        const bookings = await Booking.find({ userId }).populate('trainerId');

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ msg: "Server error, please try again later" });
    }
}

module.exports = {
    bookTrainer,
    getUserBookings
};