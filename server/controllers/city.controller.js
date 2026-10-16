const City = require("../models/city");

// GET /api/cities


const getCities = async (req, res) => {
  try {
    const { q, letter } = req.query;

    const filter = {
      city_lat: { $exists: true, $ne: null },
      city_long: { $exists: true, $ne: null },
    };

    if (q && q.trim()) {
      filter.city_name = {
        $regex: q.trim(),
        $options: "i",
      };
    } else if (letter && letter.trim()) {
      filter.city_name = {
        $regex: `^${letter.trim()}`,
        $options: "i",
      };
    }

    const cities = await City.find(filter)
      .select("-__v -createdAt -updatedAt")
      .sort({ city_name: 1 })
      .lean();

    return res.status(200).json({
      success: true,
      count: cities.length,
      cities,
    });
  } catch (error) {
    console.error("Fetch cities error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch cities",
    });
  }
};


const getPopularCities = async (req, res) => {
  try {
    console.log("Connected database:", City.db.name);

    console.log("City model collection:", City.collection.name);
    const cities = await City.find({
  is_popular_city: true,
}).sort({ city_name: 1 }).lean();

      console.log("First popular city:", cities[0]);
    return res.status(200).json({
      success: true,
      count: cities.length,
      cities,
    });
  } catch (error) {
    console.error("Fetch popular cities error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch popular cities",
    });
  }
};




// GET /api/cities/nearby?lat=26.9124&lon=75.7873
const getNearbyCity = async (req, res) => {
  try {
    const { lat: rawLat, lon: rawLon } = req.query;

    if (
      typeof rawLat !== "string" ||
      typeof rawLon !== "string" ||
      rawLat.trim() === "" ||
      rawLon.trim() === ""
    ) {
      return res.status(400).json({
        success: false,
        message: "Valid lat and lon query parameters are required",
      });
    }

    const lat = Number(rawLat);
    const lon = Number(rawLon);

    if (
      !Number.isFinite(lat) ||
      !Number.isFinite(lon) ||
      lat < -90 ||
      lat > 90 ||
      lon < -180 ||
      lon > 180
    ) {
      return res.status(400).json({
        success: false,
        message: "Valid lat and lon query parameters are required",
      });
    }

    const cities = await City.find({
      city_lat: { $exists: true, $ne: null },
      city_long: { $exists: true, $ne: null },
    }).lean();

    const distanceInKm = (lat1, lon1, lat2, lon2) => {
      const toRadians = (degrees) => (degrees * Math.PI) / 180;
      const dLat = toRadians(lat2 - lat1);
      const dLon = toRadians(lon2 - lon1);

      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRadians(lat1)) *
          Math.cos(toRadians(lat2)) *
          Math.sin(dLon / 2) ** 2;

      return 6371 * 2 * Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
      );
    };

    const nearest = cities
      .filter((city) => {
        const cityLat = Number(city.city_lat);
        const cityLon = Number(city.city_long);

        return (
          city.city_lat != null &&
          city.city_long != null &&
          Number.isFinite(cityLat) &&
          Number.isFinite(cityLon) &&
          cityLat >= -90 &&
          cityLat <= 90 &&
          cityLon >= -180 &&
          cityLon <= 180
        );
      })
      .map((city) => ({
        ...city,
        distanceKm: Number(
          distanceInKm(
            lat,
            lon,
            Number(city.city_lat),
            Number(city.city_long)
          ).toFixed(2)
        ),
      }))
      .sort((a, b) => a.distanceKm - b.distanceKm)[0];

    if (!nearest || nearest.distanceKm > 100) {
      return res.status(404).json({
        success: false,
        message: "No city found within 100 km",
      });
    }

    return res.status(200).json({
      success: true,
      city: nearest,
    });
  } catch (error) {
    console.error("Nearby city error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to find nearby city",
    });
  }
};

// GET /api/cities/:cityKey
const getCityByKey = async (req, res) => {
  try {
    const city = await City.findOne({
      city_key: req.params.cityKey.toLowerCase(),
    })
      .select("-__v -createdAt -updatedAt")
      .lean();

    if (!city) {
      return res.status(404).json({
        success: false,
        message: "City not found",
      });
    }

    return res.status(200).json({
      success: true,
      city,
    });
  } catch (error) {
    console.error("Fetch city error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch city",
    });
  }
};

module.exports = {
  getCities,
  getPopularCities,
  getNearbyCity,
  getCityByKey,
};
