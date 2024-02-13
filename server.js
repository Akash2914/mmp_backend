const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
const connectDB = require('./config/db');
const userRoute = require('./routes/usersRoute');
const productRoute = require('./routes/productsRoute');
const bidsRoute = require('./routes/bidsRoute');
//*Connect to MongoDB
connectDB();

//* Init Middleware
app.use(express.json({ extented: false }));
//! routes
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/bids', bidsRoute);

app.listen(port, () => console.log(`Node Js server started on port ${port}`));
