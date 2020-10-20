
import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  // finalizar validação endpoint
  
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.SECRET || 'rolerzinx', (err, decoded) => {
      if (err) {
        console.log(`[VALIDATION] Falha de validação, token inválido`);
        console.log(err);
        reject(false);
      }
      console.log(`[VALIDATION] Token validado`);
      console.log(decoded);
      req.user = decoded; // set User based on Authorization Token
    });
  }
  next();
};

export default auth;