// this fille collects ALL of the api routes and packages it up
const router = require("express").Router();

const userRoutes = require("./user-routes.js");

router.use("/users", userRoutes);

module.exports = router;
