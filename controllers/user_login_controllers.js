
const userLoginSchema = require("../models/user_login_model");
const mongoose = require('mongoose');
module.exports = {

    createNewUserLogin: async (req, res) => {
    // const { title, description } = req.body.payload;
    try {
      const data = new userLoginSchema({...req.body});
      await data.save();
      res.status(201).json({ success: true, data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  
  },

  getUserLoginDetails: async (req, res) => {
    try {
      const data = await userLoginSchema.findOne({ _id: req.body.payload });
      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },

  getUserLoginsList: async (req, res) => {
    try {
      const data = await userLoginSchema.find();
      console.log("check ", data);
      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },

  updateUserLoginDetails: async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body.payload;

    try {
      const data = await userLoginSchema.findOne({ _id: id, user: req.userId });

      if (!data) {
        return res.status(404).json({ message: "data not found" });
      }

      data.title = title || data.title;
      data.description = description || data.description;
      data.completed = completed || data.completed;

      await data.save();
      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },

  deleteUserLoginDetails: async (req, res) => {
    const { id } = req.params;

    try {
      const data = await userLoginSchema.findOne({ _id: id, user: req.userId });
     
      if (!data) {
        return res.status(404).json({ message: "data not found" });
      }

      await data.deleteOne({ _id: id });
      res.status(200).send({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
};
