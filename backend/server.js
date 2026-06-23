const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Upload Folder Access
app.use(
"/uploads",
express.static(
path.join(__dirname, "uploads")
)
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// Test Route
app.get("/", (req, res) => {
res.send("Social App API Running...");
});

const PORT = process.env.PORT || 5000;

console.log(
"🔄 Trying MongoDB Connection..."
);

mongoose
.connect(process.env.MONGO_URI)
.then(() => {


console.log(
  "✅ MongoDB Connected"
);

app.listen(PORT, () => {

  console.log(
    `🚀 Server Running On Port ${PORT}`
  );

});


})
.catch((error) => {

console.log(
  "❌ Mongo Error Type:"
);

console.log(error.name);

console.log(
  "❌ Mongo Error Message:"
);

console.log(error.message);


});
