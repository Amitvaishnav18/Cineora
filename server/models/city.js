const mongoose = require("mongoose");

const subCitySchema = new mongoose.Schema(
  {
    name: String,
    lat: Number,
    lon: Number,
    popular_areas: [
      {
        name: String,
        lat: Number,
        lon: Number,
      },
    ],
  },
  { _id: false, strict: false }
);

const citySchema = new mongoose.Schema(
  {
    city_id: { type: String, required: true, unique: true },
    city_name: { type: String, required: true },
    city_image: String,
    city_light_image: String,
    city_lat: Number,
    city_long: Number,
    state_name: String,
    city_key: { type: String, index: true },
    is_popular_city: { type: Boolean, default: false },
    sub_cities: [subCitySchema],
    cleaned_city_name: String,
  },
  { timestamps: true, strict: true }
);

module.exports = mongoose.model("City", citySchema);