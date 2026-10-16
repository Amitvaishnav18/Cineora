require("dotenv").config();

const mongoose = require("mongoose");
const cities = require("../data/cities.json");
const City = require("../models/city.js");

async function seedCities() {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    const operations = cities.map((city) => ({
      updateOne: {
        filter: { city_id: String(city.city_id) },
        update: {
          $set: {
            ...city,
            city_id: String(city.city_id),
          },
        },
        upsert: true,
      },
    }));

    let inserted = 0;
    let updated = 0;

    for (let i = 0; i < operations.length; i += 500) {
      const batch = operations.slice(i, i + 500);
      const result = await City.bulkWrite(batch, {
        ordered: false,
      });

      inserted += result.upsertedCount;
      updated += result.modifiedCount;
    }

    console.log("Total source records:", cities.length);
    console.log("Inserted:", inserted);
    console.log("Updated:", updated);
  } catch (error) {
    console.error("City import failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedCities();