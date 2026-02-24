import Application from "../models/Application.js";

export const applyJob = async (req, res) => {
  try {
    const existing = await Application.findOne({
      jobId: req.body.jobId,
      userId: req.user.id
    });

    if (existing) {
      return res.status(400).json({ message: "Already applied" });
    }

    const application = await Application.create({
      jobId: req.body.jobId,
      userId: req.user.id
    });

    res.json(application);

  } catch (error) {
    res.status(500).json({ message: "Error applying job" });
  }
};

export const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      userId: req.user.id
    }).populate("jobId");

    res.json(applications);

  } catch (error) {
    res.status(500).json({ message: "Error fetching applications" });
  }
};





