const express = require("express");
const router = express.Router();
const { 
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact 
} = require("../controllers/contactControllers");

// Routes for retrieving all contacts and creating a new contact
router.route("/")
    .get(getContacts)
    .post(createContact);

// Routes for operations on a specific contact by ID
router.route("/:id")
    .get(getContact)
    .patch(updateContact)  // 🔄 Changed from .put() to .patch() for partial updates
    .delete(deleteContact);  

module.exports = router;
