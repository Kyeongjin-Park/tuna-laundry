const express = require("express");
const router = express.Router();

const LaundriesController = require("../controllers/laundries.controller");
const laundriesController = new LaundriesController();

router.get("/mylaundry", laundriesController.getLaundries);
router.post("/mylaundry", laundriesController.postLaundries);
router.put("/mylaundry/:laundryId", laundriesController.updateLaundries);
router.delete("/laundry", laundriesController.deleteLaundries);


module.exports = router;