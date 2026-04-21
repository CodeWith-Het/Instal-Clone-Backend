const express = require("express");
const multer = require("multer");

const postController = require("../controllers/post.controller");
const identifyUser = require("../middlewares/auth.middleware");
const postRouter = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

/**
 * @route post api/post/createpost
 */
postRouter.post("/createpost", upload.single("imgFile"), identifyUser, postController.postCreateController)

/**
 * @route get api/post/getpost
 */
postRouter.get("/getpost", identifyUser, postController.getpostController)

/**
 * @route get api/post/hetpostdetails/:postId
 */
postRouter.get("/getpostdetails/:postId", identifyUser, postController.postDetails)

/**
 * @route post api/post/like/:postId
 */
postRouter.post("/like/:postId", identifyUser, postController.toggleLikeController)

/**
 * get api/post/feed
 */
postRouter.get("/feed",identifyUser,postController.getFeedController)


module.exports = postRouter;
