const router = require("express").Router();
const Report = require("../models/Report");

//create a report
router.post("/", async (req, res) => {
  const newReport = new Report(req.body);
  try {
    const savedReport = await newReport.save();
    res.status(200).json(savedReport);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all reports
router.get("/", async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json(err);
  }
});


//update a report
router.put("/:id", async (req, res) => {
  try {
    const updatedReport = await Report.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedReport);
  } catch (err) {
    res.status(500).json(err);
  }
});


//delete a report
router.delete("/:id", async (req, res) => {
  try {
    const deletedReport = await Report.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedReport);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
