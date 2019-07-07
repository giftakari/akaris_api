
const Contact = require('../models/akarisModels')

module.exports = addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};


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

module.exports = getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};


module.exports = getContactWithID = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

//UPDATE
module.exports = updateContact = (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contactId },
    req.body,
    { new: true },
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
};
