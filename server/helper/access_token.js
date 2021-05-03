let jwt = require("jsonwebtoken");
let secretkey = 'semangat'
function newToken(payload) {
  return jwt.sign(payload, secretkey);
}

function verifyToken(token) {
  return jwt.verify(token, secretkey);
}

module.exports = { newToken, verifyToken };
