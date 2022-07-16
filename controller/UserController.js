const models = require("./../models");
const User = models.users;

class UserController {
  static async getAll(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  static async getID(req,res){
    try{
        const id = req.params.id;
        const users = await User.findByPk(id);
        return res.json(users || {});
    }catch{
        return res.status(500).json({error : err.message})
    }
  }
}

module.exports = UserController;
