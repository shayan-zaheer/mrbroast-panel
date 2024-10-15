const express = require('express');
const router = express.Router();
const {
    createOrder,
    getOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
    assignRiderToOrder,
    getPendingDeliveryOrders,
    updateOrderStatus,
    getDineInOrder,
    addItemsToOrder
} = require('../controllers/orderController');

// Routes
router.get('/pending-dinein', getDineInOrder);
router.put('/:orderId/add-items', addItemsToOrder);
router.get('/pendingdelivery', getPendingDeliveryOrders);
router.post('/', createOrder); 
router.get('/', getOrders);
router.get('/:id', getOrderById);
router.put("/:orderId/assign-rider", assignRiderToOrder)
router.put('/:id/update-status', updateOrderStatus);
router.delete('/:id', deleteOrder);

module.exports = router;
