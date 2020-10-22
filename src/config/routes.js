import packageJson from '../../package.json';
import jwt from 'jsonwebtoken';
import user from '../api/routes/user';
import clockPoint from '../api/routes/clockPoint';

const API_V1 = '/api/v1';

export default app => {
  app.get(API_V1, (req, res) => {
    res.json({ version: packageJson.version });
  });

  app.use(API_V1, async (req, res, next) => {
    try {                   
      const token = req.headers.authorization;
      
      if (token) {
        jwt.verify(token, process.env.SECRET || 'oowlish', (err, decoded) => {
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
   } 
   catch (e) {
      console.log(e);
    }

    next();
  });

  app.use(API_V1, user);
  app.use(API_V1, clockPoint);
}