const { initializeDatabase } = require("./db/db.connect");
const fs = require("fs");
const dns = require("dns");
const User = require("./models/user.model");

const jsonData = fs.readFileSync("user.json", "utf-8");
const userData = JSON.parse(jsonData);

dns.setServers(["1.1.1.1", "8.8.8.8"]);

initializeDatabase();

async function seedData() {
  try {
    for (const user of userData) {
      const newUser = new User({
        fullName: user.fullName,
        username: user.username,
        bio: user.bio,
        profilePicUrl: user.profilePicUrl,
        followingCount: user.followingCount,
        followerCount: user.followerCount,
        companyName: user.companyName,
        location: user.location,
        portfolioUrl: user.portfolioUrl,
      });

      await newUser.save();
    }

    console.log("Data seeded successfully");
  } catch (e) {
    console.log("Error while seeding", e);
  }
}

seedData();