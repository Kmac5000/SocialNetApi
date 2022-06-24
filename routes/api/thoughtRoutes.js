const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtControl");

// /api/thoughts
router.route("/").get(getAllThought).post(createThought);

// /api/thoughts/:id
router.route("/:id").get(getThoughtById).put(updateThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

module.exports = router;
