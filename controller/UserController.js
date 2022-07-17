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

  static async putEdit(req,res){
    try{
      const id = req.params.id;
      let users = await User.findByPk(id);
      if (!users){
        return res.json({message : 'user not found'})
      }
      users = await users.update(req.body);
      return res.json(users)
    }catch{
      return res.status(500).json({error : err.message})
    }
  }

  static async getDelete(req,res){
    try{
      const id = req.params.id;

      let users = await User.findByPk(id);
      if (!users){
        return res.json({message : 'user not found'})
      }
      await users.destroy();
      res.json(500).json({message : 'success'})
    }catch{
      return res.status(500).json({error : err.message})
    }
  }
}

module.exports = UserController;
