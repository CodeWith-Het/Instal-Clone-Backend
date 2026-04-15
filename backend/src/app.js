const express = require("express")
const cors = require("cors")

// required routers
const authRouter =   require("./routers/auth.route")
const postRouter = require("./routers/post.route")
const userRouter = require("./routers/user.route")

const cookieParser = require("cookie-parser")
const app = express();

// middlewares fuctions
app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
    credentials: true,
        origin: "http://localhost:5173"
    }
))

// using routers
app.use("/api/auth", authRouter)
app.use("/api/post", postRouter)
app.use("/api/user", userRouter)


module.exports = app;
