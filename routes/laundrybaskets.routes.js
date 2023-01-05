const express = require("express");
const router = express.Router();

const LaundryBasketController = require("../controllers/laundrybaskets.controller");
const laundryBasketController = new LaundryBasketController();
router.get("/mylaundrybasket", laundryBasketController.getMyLaundryBasket);
router.get("laundrybasket",laundryBasketController.getLaundryBasket)
router.post("/laundrybasket", laundryBasketController.createLaundryBasket);
router.delete("/laundrybasket", laundryBasketController.deleteLaundryBasket);
module.exports = router;