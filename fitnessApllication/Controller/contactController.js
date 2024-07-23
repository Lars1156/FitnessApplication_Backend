const Contact = require('../modules/contact');

async function contactUs (req,res){
    try {
        const { name, email, message } = req.body;
        const newSubmission = new Contact({ name, email, message });
        await newSubmission.save();
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error, please try again later' });
    }
}
async function getAllContacts(req, res) {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Server error, please try again later' });
    }
}
module.exports = {contactUs,
  getAllContacts
}