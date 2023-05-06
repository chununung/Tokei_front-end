const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: ".env.local" });

// Routes
// const userRoutes = require("./routes/userRoutes");
// const adminRoutes = require("./routes/adminRoutes");
// const foodRoutes = require("./routes/foodRoutes");
// const articleRoutes = require("./routes/articleRoutes");

//  joold Routes
const activityRoutes = require("./routes/activityRoutes");
const discountRoutes = require("./routes/discountRoutes");
const productsRoutes = require("./routes/productsRoutes");

//跨域設定
app.use(cors());
//解析POST請求的JSON主機
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//路由
// app.use("/api/admin", adminRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/food", foodRoutes);
// app.use("/api/articles", articleRoutes);

//  joold 路由
app.use("/api/activity", activityRoutes);
app.use("/api/discount", discountRoutes);
app.use("/api/products", productsRoutes);

// 開始監聽
app.listen(8080, () => {
  console.log(`Server running on port 8080`);
});
