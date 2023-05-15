const { Router } = require("express");

const courseRouter = require("./course.routes");
const userRoutes = require("./user.routes");
const instructorRouter = require("./instructor.routes");
const categoryRoutes = require("./category.routes")
const rellenarRouter = require('./rellenar.router')

const router = Router();

router.use("/instructor", instructorRouter);

router.use("/courses", courseRouter);

router.use("/user", userRoutes);

router.use("/category",categoryRoutes);

router.use('/rellenar',rellenarRouter)

module.exports = router;
