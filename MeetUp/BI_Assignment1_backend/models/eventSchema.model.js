const mongoose = require("mongoose")


const speakerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, default: "" },
    imageUrl: { type: String, default: "" },
  },
  { _id: false }
);

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    type: {
      type: String,
      enum: ["Online Event", "Offline Event"],
      required: true,
    },
    imageUrl: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    host: { type: String, required: true },
    locationName: { type: String, default: "" },
    address: { type: String, default: "" },
    price: { type: Number, default: 0, min: 0 },
    description: { type: String, required: true },
    dressCode: { type: String, default: "" },
    ageRestriction: { type: String, default: "" },
    tags: [{ type: String }],
    speakers: [speakerSchema],
  },
  { timestamps: true }
);

const Event = mongoose.model("Event",eventSchema)

module.exports = Event