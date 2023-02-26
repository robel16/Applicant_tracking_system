const express = require("express");
const router = express.Router();
const Recruiter = require("../models/recruiter");
const { allowedRoles, verifyToken } = require("../util");
const bcrypt = require("bcrypt");
const fs = require("fs");
const Position = require("../models/position");
const Applicant = require("../models/applicant");
router.get("/", verifyToken, allowedRoles(["recruiter"]), async (req, res) => {
  let recruiters = await Recruiter.find();
  return res.status(200).json({ recruiters });
});

router.get(
  "/:id",
  verifyToken,
  allowedRoles(["recruiter"]),
  async (req, res) => {
    let id = req.params.id;
    let recruiter = await Recruiter.findById(id);
    return res.status(200).json({ recruiter });
  }
);

//get all the filepath
router.get("/file", async (req, res) => {
  const { id } = req.params;
  try {
    const files = await File.find();

    const applicant = await Applicant.findById(username);
    const position = await Position.findById(title);

    if (!applicant || !position) {
      return res.status(404).send("File not found");
    }

    // if (req.user._id.toString() !== position.recruiterId.toString()) {
    //   return res.status(403).send("Unauthorized");
    // }

    const filePath = `./uploads/${application.filePath}`;

    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// verifyToken, allowedRoles(["recruiter"]),
router.post("/", async (req, res) => {
  let fields = req.body.recruiter;
  let recruiter;
  fields.password = await bcrypt.hash(fields.password, 10);
  try {
    recruiter = new Recruiter(fields);
    await recruiter.save();
  } catch (error) {
    return res.status(400).json({ error });
  }

  return res.status(200).json(recruiter);
});

router.patch(
  "/",
  verifyToken,
  allowedRoles(["recruiter"]),
  async (req, res) => {
    let fields = req.body.recruiter;
    let recruiter = await Recruiter.findById(fields.id);

    let fieldKeys = Object.keys(fields);

    for (let key in fieldKeys) {
      if (key != "id") continue;
      recruiter[key] = fields[key];
    }

    await recruiter.save();
    return res.status(200).json(recruiter);
  }
);

// router.delete(
//   "/:id",
//   verifyToken,
//   allowedRoles(["recruiter"]),
//   async (req, res) => {
//     let id = req.params.id;
//     await Recruiter.findByIdAndDelete(id);

//     return res.status(200).json({ id });
//   }
// );

router.delete(
  "/api/position/:id",

  async (req, res) => {
    try {
      let id = req.params.id;
      const job = await Recruiter.findByIdAndDelete(id);
      if (!job) {
        return res.status(404).json({ message: "Job not found" });
      }
      await job.remove();
      return res.status(200).json({ message: "Job deleted successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);

module.exports = router;
