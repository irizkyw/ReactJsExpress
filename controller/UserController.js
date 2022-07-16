// import Users from '../models/Users'

class UsersController {
  static getAllUsers(req, res) {
    return res.json([
      {
        id: 1,
        username: "A",
      },
      {
        id: 2,
        username: "B",
      },
      {
        id: 3,
        username: "C",
      },
      {
        id: 4,
        username: "D",
      },
    ]);
  }
}

module.exports = UsersController;
