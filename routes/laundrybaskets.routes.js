const express = require("express");
const router = express.Router();

const LaundryBasketController = require("../controllers/laundrybaskets.controller");
const laundryBasketController = new LaundryBasketController();
// router.get("/alllaundrybaskets",laundryBasketController.getAllLaundryBasket)
router.get("/waitinglaundries", laundryBasketController.getLaundryBasket);
router.post("/laundrybasket", laundryBasketController.createLaundryBasket);
router.delete("/laundrybasket", laundryBasketController.deleteLaundryBasket);
module.exports = router;