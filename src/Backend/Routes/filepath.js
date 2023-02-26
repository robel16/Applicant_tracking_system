const express = require("express");
const router = express.Router();
const File = require("../models/filepath");
const { allowedRoles, verifyToken } = require("../util");
const bcrypt = require("bcrypt");

router.get("/file", async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
