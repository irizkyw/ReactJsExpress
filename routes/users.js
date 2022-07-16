var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send('respond with a resource');
  res.json([
    {
      id: 1,
      username: "A",
    },
    {
      id: 2,
      username: "B",
    },
    {
      id : 3,
      username : "C"
    },
    {
      id : 4,
      username : "D"
    }
  ]);
});

module.exports = router;
