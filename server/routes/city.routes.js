const express = require("express");
const {
  getCities,
  getPopularCities,
  getNearbyCity,
  getCityByKey,
} = require("../controllers/city.controller");

const router = express.Router();

router.get("/", getCities);
router.get("/popular", getPopularCities);
router.get("/nearby", getNearbyCity);
router.get("/:cityKey", getCityByKey);

module.exports = router;
