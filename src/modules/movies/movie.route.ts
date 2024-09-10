import express from "express";
import { MovieControllers } from "./movie.controller";
import { ReviewControllers } from "../review/review.controller";

const router = express.Router();

//?? Movie route
router.post("/", MovieControllers.createMovie);
router.get("/:slug", MovieControllers.getMovieBySlug);
router.get("/", MovieControllers.getAllMovies);
//?? Review route
router.post("/:slug/review", ReviewControllers.addReview);
// router.get(":slug/reviews", ReviewControllers.getAllReviews);
// router.get(":slug/review", ReviewControllers.getReviewById);
// router.put(":slug/review", ReviewControllers.updateReview);
// router.delete(":slug/review/", ReviewControllers.deleteReview);

export const MovieRoutes = router;
