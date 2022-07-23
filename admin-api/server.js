const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const dotenv = require('dotenv')

const app = express();
app.use(cors())
dotenv.config()

const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

connectDB();

app.use(express.json());

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
