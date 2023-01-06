const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");

const LaundriesController = require("../controllers/laundries.controller");
const laundriesController = new LaundriesController();
router.get("/mylaundry", authMiddleware,laundriesController.getLaundries);
router.get("/mylaundrydetail/:laundryId",laundriesController.getLaundryById)
router.post("/mylaundry", laundriesController.createLaundry);
router.put("/mylaundry/:laundryId", laundriesController.updateLaundry);
router.delete("/laundry", laundriesController.deleteLaundries);
router.get("/ablereview",laundriesController.getAbleReview)
router.get("/waitinglaundries",laundriesController.getWaitingLaundries)
router.get("/waitinglaundries/:laundryId",laundriesController.getWaitingLaundryById)
router.put("/laundrystatus/:laundryId",laundriesController.updateLaundryStatus)
module.exports = router;