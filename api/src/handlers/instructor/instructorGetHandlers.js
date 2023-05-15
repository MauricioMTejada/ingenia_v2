const createInstructor = require("../../controllers/instructorControllers/createInstructor");
const bcryptjs = require("bcryptjs");

const instructorGetHandlers = (req, res) => {};
const instructorPostHandlers = async (req, res) => {
  const { name, lastname, email, password, studies,description } = req.body;
  const passwordHash = await bcryptjs.hash(password, 8);
  try {
    const response = await createInstructor(
      name,
      lastname,
      email,
      passwordHash,
      studies,
      description
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  instructorGetHandlers,
  instructorPostHandlers,
};
