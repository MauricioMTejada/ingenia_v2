const { Router } = require("express");

const courseRouter = require("./course.routes");
const userRoutes = require("./user.routes");
const instructorRouter = require("./instructor.routes");

const router = Router();

router.use("/instructor", instructorRouter);

router.use("/courses", courseRouter);

router.use("/user", userRoutes);

module.exports = router;
