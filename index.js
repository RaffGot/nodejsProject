const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const mongoose = require('mongoose');
const userRouter = require('./src/routes/user');
const uploadRouter = require('./src/routes/upload-file.routes');
const authRouter = require('./src/routes/authentication.route');
// const uploadRouter = require('./src/routes/upload-file.routes');
// const swaggerDocs = require('./src/configs/swagger.config');
const { SWAGGUER_OPTIONS, ROUTES } = require('./src/utils/constants');
const { authMiddleware } = require('./src/middlewares/auth.middleware');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDocs = require('./src/configs/swagger.config');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  SWAGGUER_OPTIONS.API_DOCS,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs)
);
// app.get(SWAGGUER_OPTIONS.API_DOCS, swaggerUi.setup(swaggerDocs));

// Connect to DB
mongoose
  .connect(process.env.MONGODB_URI + process.env.MONGO_DB, {
    useNewUrlParser: true,
  })
  .catch((err) => console.log('Connection db failed : ', err));

app.get(ROUTES.HOME, (req, res) => {
  res.send('Hello  World!');
});
app.use('/api', authRouter);
// app.use('/api', authMiddleware);
app.use('/api', userRouter);
app.use('/api', uploadRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
