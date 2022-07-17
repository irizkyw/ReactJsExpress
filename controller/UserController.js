const models = require("./../models");
const Validator = require("fastest-validator");

const User = models.users;

const v = new Validator();

class UserController {
  static async getAll(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  static async postUsers(req, res) {
    const schema = {
      name: "string ",
      email: "string ",
      password: "string ",
      roles_id: "int",
    };
    try {
      const validate = v.validate(req.body,schema);
      if (validate.length){
        return res.status(500).json(validate)
      }
      const users = await User.create(req.body);
      return res.json(users)
    } catch {
      return res.status(500).json({ error: err.message });
    }
  }

  static async getID(req, res) {
    try {
      const id = req.params.id;
      const users = await User.findByPk(id);
      return res.json(users || {});
    } catch {
      return res.status(500).json({ error: err.message });
    }
  }

  static async putEdit(req, res) {
    const schema = {
      name: "string | optional",
      email: "string | optional",
      password: "string | optional",
      roles_id: "optional",
    };
    try {
      const id = req.params.id;
      const validate = v.validate(req.body, schema);
      let users = await User.findByPk(id);
      if (!users) {
        return res.json({ message: "user not found" });
      }
      users = await users.update(req.body);
      return res.json(users);
    } catch {
      return res.status(500).json({ error: err.message });
    }
  }

  static async getDelete(req, res) {
    try {
      const id = req.params.id;

      let users = await User.findByPk(id);
      if (!users) {
        return res.json({ message: "user not found" });
      }
      await users.destroy();
      res.json(500).json({ message: "success" });
    } catch {
      return res.status(500).json({ error: err.message });
    }
  }
}

module.exports = UserController;
