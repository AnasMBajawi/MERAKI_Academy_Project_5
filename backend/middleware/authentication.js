const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const token = req.headers.authorization.split(" ").pop();
  const SECRET = process.env.SECRET;
  try {
    if (!token) {
      res.status(403).json("Forbidden");
    }
    jwt.verify(token, SECRET, (err, result) => {
      if (err) {
        res.status(403).json({
          success: false,
          message: `The token is invalid or expired`,
        });
      } else {
        console.log('in authentication');
        req.token = result;
        next();
      }
    });
  } catch (error) {
    res.status(403).json({ message: "forbidden" });
  }
};
//  use it
//  const authentication=require('../middleware/authentication')
//  authentication

module.exports = authentication;
