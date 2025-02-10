const { Request } = require("../models");

exports.createRequest = async (req, res) => {
  try {
    const request = await Request.create(req.body);
    res.status(201).json(request);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRequests = async (req, res) => {
  console.log("getRequests");
  
  const requests = await Request.findAll();
  res.json(requests);
};

exports.updateRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Request.update(req.body, { where: { id } });

    if (updated[0] === 0) return res.status(404).json({ error: "Request not found" });

    res.json({ message: "Request updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
