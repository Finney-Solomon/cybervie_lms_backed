
const userLeadsSchema = require("../models/user.Leads.Model");
const mongoose = require('mongoose');
module.exports = {

  createNewUserLeads: async (req, res) => {
    // const { title, description } = req.body.payload;
    try {
      const data = new userLeadsSchema({...req.body});
      await data.save();
      res.status(201).json({ success: true, todo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  
  },

  getUserLeadList: async (req, res) => {
    try {
      const data = await userLeadsSchema.find();
   
      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }
};
