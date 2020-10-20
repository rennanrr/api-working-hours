import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from '../middlewares/cors';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';

export default app => {
  dotenv.config();
  app.use(morgan('dev'));
  app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : 'tmp/'
  }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(cors);
};
