const Review = require('../modules/review');

async  function addReview(req,res){
    try {
        const { userId, name, review, rating } = req.body;
        console.log("*** Review Details", req.body)
        const newReview = new Review({ userId, name, review, rating });
        await newReview.save();
        res.status(201).json({ msg: 'Review added successfully' });
    } catch (error) {
        res.status(400).json({ msg: 'Failed to add review' });
    }
}

async  function getAllReview(req,res){
    try {
        const reviews = await Review.find().populate('userId');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ msg: 'Server error, please try again later' });
    }
}
module.exports ={
    addReview,
    getAllReview
}