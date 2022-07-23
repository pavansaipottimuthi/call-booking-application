const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();
app.use(cors())

const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

connectDB();

app.use(express.json());

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));