const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ['takeaway', 'delivery'],
        required: true,
    },
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver',
    },
    deliveryAddress: {
        type: String,
        required: function() { return this.type === 'delivery'; }, // Required only for delivery
    },
    status: {
        type: String,
        enum: ['Pending', 'Delivered', 'Cancelled'],
        default: 'Pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
