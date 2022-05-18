const User = require("../models/User");

const save = async (req, res) => {
  const { name, lastName, email, password } = req.body;

  try {
    if (!name || !lastName || !email || !password) {
      res.status(409).json({ msg: "Todos los campos son requeridos..." });
    } else {
      const user = new User({ name, lastName, email, password });
      const newUser = await user.save();
      res.status(201).json({ msg: "Usuario creado" });
      console.log(newUser);
    }
  } catch (error) {
    res.status(400).json({ msg: "Algo salió mal..." + error });
    console.log(error);
  }
};

module.exports = { save };
