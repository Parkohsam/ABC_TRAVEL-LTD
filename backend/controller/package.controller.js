const packageModel = require("../model/package.mode");

const createPackage = async (req, res) => {
  try {
    const { name, description, price, availability, season } = req.body;

    if (!name || !description || !price || !availability || !season) {
      return res.status(400).send({ status: false, message: "Please fill in all required fields" });
    }

    const newPackage = new packageModel({ name, description, price, availability, season });
    await newPackage.save();

    return res.status(201).send({ status: true, message: "Package created successfully", data: newPackage });
  } catch (err) {
    return res.status(500).send({ status: false, message: "Error creating package", error: err.message });
  }
};

const getPackages = async (req, res) => {
  try {
    const packages = await packageModel.find({ isActive: true });
    return res.status(200).send({ status: true, message: "Packages fetched successfully", data: packages });
  } catch (err) {
    return res.status(500).send({ status: false, message: "Error fetching packages", error: err.message });
  }
};

const updatePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPackage = await packageModel.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedPackage) {
      return res.status(404).send({ status: false, message: "Package not found" });
    }

    return res.status(200).send({ status: true, message: "Package updated successfully", data: updatedPackage });
  } catch (err) {
    return res.status(500).send({ status: false, message: "Error updating package", error: err.message });
  }
};

const deletePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPackage = await packageModel.findByIdAndDelete(id);

    if (!deletedPackage) {
      return res.status(404).send({ status: false, message: "Package not found" });
    }

    return res.status(200).send({ status: true, message: "Package deleted successfully" });
  } catch (err) {
    return res.status(500).send({ status: false, message: "Error deleting package", error: err.message });
  }
};

module.exports = { createPackage, getPackages, updatePackage, deletePackage };