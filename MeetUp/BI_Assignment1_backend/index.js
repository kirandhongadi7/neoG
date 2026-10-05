const {initializeDatabase} = require("./db/db.connect")
const Event = require("./models/eventSchema.model")
const express = require("express")
const app = express()
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
const dns = require("dns")
dns.setServers(["1.1.1.1", "8.8.8.8"])
app.use(express.json())

const events = [
  {
    title: "Tech Conference",
    type: "Offline Event",
    imageUrl:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-10-12T07:00:00+05:30",
    endDate: "2026-10-12T11:00:00+05:30",
    host: "Tech Community",
    locationName: "Bengaluru Convention Center",
    address: "Bengaluru, Karnataka",
    price: 500,
    description:
      "Meet developers, founders and technology enthusiasts for talks, networking and hands-on sessions.",
    dressCode: "Smart casual",
    ageRestriction: "18 and above",
    tags: ["technology", "coding", "networking"],
    speakers: [
      {
        name: "Aarav Sharma",
        role: "Software Engineer",
        imageUrl: "https://i.pravatar.cc/150?img=12"
      }
    ]
  },

  {
    title: "Design Workshop",
    type: "Offline Event",
    imageUrl:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-10-15T14:00:00+05:30",
    endDate: "2026-10-15T17:00:00+05:30",
    host: "Design Circle",
    locationName: "Creative Hub",
    address: "Indiranagar, Bengaluru",
    price: 750,
    description:
      "A practical workshop covering product design, UX research and modern interface design workflows.",
    dressCode: "Casual",
    ageRestriction: "16 and above",
    tags: ["design", "ui", "ux"],
    speakers: [
      {
        name: "Meera Rao",
        role: "Product Designer",
        imageUrl: "https://i.pravatar.cc/150?img=32"
      }
    ]
  },

  {
    title: "Marketing Seminar",
    type: "Offline Event",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-10-20T10:00:00+05:30",
    endDate: "2026-10-20T12:00:00+05:30",
    host: "Marketing Experts",
    locationName: "Marketing City",
    address: "789 Marketing Avenue, Bengaluru",
    price: 3000,
    description:
      "Stay ahead of the game in digital marketing. Learn current strategies, campaign thinking and growth techniques from working professionals.",
    dressCode: "Smart casual",
    ageRestriction: "18 and above",
    tags: ["marketing", "digital"],
    speakers: [
      {
        name: "Sarah Johnson",
        role: "Marketing Manager",
        imageUrl: "https://i.pravatar.cc/150?img=47"
      },
      {
        name: "Michael Brown",
        role: "SEO Specialist",
        imageUrl: "https://i.pravatar.cc/150?img=11"
      }
    ]
  },

  {
    title: "Startup & Entrepreneurship Meetup",
    type: "Offline Event",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-10-22T09:00:00+05:30",
    endDate: "2026-10-22T13:00:00+05:30",
    host: "Bengaluru Startup Network",
    locationName: "Startup Hub",
    address: "Koramangala, Bengaluru",
    price: 400,
    description:
      "Connect with startup founders, entrepreneurs and aspiring builders. Learn how ideas become real businesses.",
    dressCode: "Casual",
    ageRestriction: "18 and above",
    tags: ["startup", "business", "entrepreneurship"],
    speakers: [
      {
        name: "Rohan Mehta",
        role: "Startup Founder",
        imageUrl: "https://i.pravatar.cc/150?img=13"
      },
      {
        name: "Ananya Singh",
        role: "Product Manager",
        imageUrl: "https://i.pravatar.cc/150?img=44"
      }
    ]
  },

  {
    title: "AI & Machine Learning Summit",
    type: "Offline Event",
    imageUrl:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-10-25T08:00:00+05:30",
    endDate: "2026-10-25T15:00:00+05:30",
    host: "AI Bengaluru",
    locationName: "International Tech Park",
    address: "Whitefield, Bengaluru",
    price: 1200,
    description:
      "Explore artificial intelligence, machine learning, generative AI and the future of intelligent applications.",
    dressCode: "Smart casual",
    ageRestriction: "18 and above",
    tags: ["ai", "machine-learning", "generative-ai"],
    speakers: [
      {
        name: "Vikram Patel",
        role: "AI Engineer",
        imageUrl: "https://i.pravatar.cc/150?img=51"
      },
      {
        name: "Priya Nair",
        role: "Machine Learning Scientist",
        imageUrl: "https://i.pravatar.cc/150?img=48"
      }
    ]
  },

  {
    title: "Developer Hackathon 2026",
    type: "Offline Event",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-10-28T09:00:00+05:30",
    endDate: "2026-10-29T18:00:00+05:30",
    host: "Code Bengaluru",
    locationName: "Tech Arena",
    address: "Electronic City, Bengaluru",
    price: 250,
    description:
      "Build innovative projects with developers, designers and creators in a 36-hour coding challenge.",
    dressCode: "Casual",
    ageRestriction: "16 and above",
    tags: ["hackathon", "coding", "developers"],
    speakers: [
      {
        name: "Karan Verma",
        role: "Full Stack Developer",
        imageUrl: "https://i.pravatar.cc/150?img=14"
      }
    ]
  },

  {
    title: "Photography Walk",
    type: "Offline Event",
    imageUrl:
      "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-11-01T06:00:00+05:30",
    endDate: "2026-11-01T10:00:00+05:30",
    host: "Bengaluru Photography Club",
    locationName: "Cubbon Park",
    address: "Cubbon Park, Bengaluru",
    price: 150,
    description:
      "Join fellow photography enthusiasts for a morning photo walk through some of Bengaluru's most beautiful locations.",
    dressCode: "Casual",
    ageRestriction: "All ages",
    tags: ["photography", "art", "community"],
    speakers: [
      {
        name: "Rahul Kumar",
        role: "Professional Photographer",
        imageUrl: "https://i.pravatar.cc/150?img=52"
      }
    ]
  },

  {
    title: "Career & Networking Fair",
    type: "Offline Event",
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-11-05T09:00:00+05:30",
    endDate: "2026-11-05T17:00:00+05:30",
    host: "Career Connect India",
    locationName: "Bangalore International Exhibition Centre",
    address: "Tumkur Road, Bengaluru",
    price: 0,
    description:
      "Meet recruiters, hiring managers and professionals from leading companies. Explore internships and entry-level career opportunities.",
    dressCode: "Formal",
    ageRestriction: "18 and above",
    tags: ["career", "jobs", "networking", "internships"],
    speakers: [
      {
        name: "Neha Kapoor",
        role: "Talent Acquisition Manager",
        imageUrl: "https://i.pravatar.cc/150?img=45"
      },
      {
        name: "Arjun Reddy",
        role: "Engineering Manager",
        imageUrl: "https://i.pravatar.cc/150?img=68"
      }
    ]
  }
];

// app.post("/", async (req,res) =>{

//     try{
//         await Event.insertMany(events)
//         res.send("successfully inserted")
//     }catch(e) {
//         throw e
//     }
// })
app.get("/events", async (req,res) =>{
    try{
        const events = await Event.find()

        if(events.length === 0){
            return res.status(401).json({
                message: "No Events There"
            })
        }
        res.status(200).json({
            events
        })
    }catch(e){
         res.status(500).json({
            Error: `Error while fetch:- ${e.message}`
         })
    }
})



const PORT = process.env.PORT || 3000

initializeDatabase().then(() => {
    console.log("Database connected successfully");
  })
  .catch((e) => {
    console.log("Error while connecting DB:", e);
  });

module.exports = app

