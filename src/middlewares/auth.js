
import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.SECRET || 'rolerzinx', (err, decoded) => {
      if (err) {
        console.log(`[VALIDATION] Fail, invalid token`);
        console.log(err);
        reject(false);
      }
      console.log(`[VALIDATION] Valid token`);
      console.log(decoded);
      req.user = decoded; // set User based on Authorization Token
    });
  }
  next();
};

export default auth;