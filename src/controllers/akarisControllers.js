
const Contact = require('../models/akarisModels')

//==POST 
//Create contact
exports.addNewContact = async (req, res) => {

    try {
      let newContact = new Contact(req.body);
      res.status(201).json({
         status: 'Success',
         data: newContact
      })
    } catch (error) {
        res.status(400).json({
          status: 'fail',
          message: error
        })
    }
    
}

//GET ALL CONTACTS
exports.getContacts = async (req, res) => {
  try {
      const contacts = await Contact.find()
       res.status(201).json({
         contacts
       })
  } catch (error) {
    res.send(error)
  }
  
};



