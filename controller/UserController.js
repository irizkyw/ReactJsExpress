const models  = require('./../models');

module.exports = {
    async getAll(req, res) {
        try {
            const users = await models.users.findAll();
            if(!users) {
                return res.status(404).send({
                    message: 'No users found'
                });
            }
            return res.json(users);
        }
        catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}