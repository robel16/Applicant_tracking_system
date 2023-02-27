const express = require("express");
const router = express.Router();
const Position = require("../models/position");
const { allowedRoles, verifyToken } = require("../util");

router.get("/", async (req, res) => {
  let positions = await Position.find();
  return res.status(200).json({ positions });
});
// verifyToken,
router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let position = await Position.findById(id);
  return res.status(200).json({ position });
});
// verifyTokenallowedRoles(["recruiter"])
router.post("/", async (req, res) => {
  let fields = req.body.position;
  console.log(fields);
  // let position;

  try {
    // position = new Position(fields);
    // console.log(position)
    // await position.save();
    let doc = await Position.create(fields);

    res.status(201).json({
      status: "success",
      newModel: {
        model: doc,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
});
// verifyToken, allowedRoles(["recruiter"]),
router.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  let fields = req.body.position;
  let position = await Position.findByIdAndUpdate(id);

  let fieldKeys = Object.keys(fields);

  for (let key in fieldKeys) {
    if (key !== "id") continue;
    position[key] = fields[key];
  }

  await position.save();
  return res.status(200).json(position);
});
// router.patch("/update/:id", async (req, res) => {
//   const { id } = req.params;
//   const { title, instruction, steps } = req.body;

//   try {
//     const position = await Position.findById(id);
//     position.title = title;
//     position.instruction = instruction;
//     position.steps = steps;

//     await position.save();
//     res
//       .status(200)
//       .json({ message: "Position updated successfully.", position });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  await Position.findByIdAndDelete(id);

  return res.status(200).json({ id });
});

module.exports = router;
