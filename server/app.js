require("dotenv").config({
    path: "./config.env"
})
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const riderRoutes = require('./routes/riderRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const auditRoutes = require('./routes/auditRoutes');
const waiterRoutes = require('./routes/waiterRoutes');
// const dealRoutes = require('./routes/dealRoutes');

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use('/api/products', productRoutes);
app.use('/api/waiters', waiterRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/riders', riderRoutes);
app.use('/api/audit', auditRoutes);
// app.use('/api/deals', dealRoutes);

mongoose.connect(process.env.MONGO_URL).then((conObj)=>{
    console.log("DB Connection Successful!");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
