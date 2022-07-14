// this fille collects ALL of the api routes and packages it up
const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const postRoutes = require('./post-routes');


router.use("/users", userRoutes);
router.use('/posts', postRoutes);


module.exports = router;
