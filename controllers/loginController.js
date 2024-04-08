import prisma from "../lib/client.js";
import jwt from "jsonwebtoken";

export async function loginMiddleware(req, res, next) {
  try {
    if (req.headers.authorization) {
      const token = req.headers?.authorization?.split(" ")[1];

      if (!token) {
        throw new Error("Not Authenticated");
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.userId;
      next();
    } else {
      next();
    }
  } catch (err) {
    console.log("Error is ", err);
  }
}

export async function handleLogin(req, res, next) {
  try {
    const findUser = await prisma.user.findFirst({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });

    if (!findUser) {
      throw new Error("User Not Found");
    }

    const token = jwt.sign({ userId: findUser.id }, process.env.JWT_SECRET);

    res.status(201).json({
      status: "ok",
      data: {
        token,
        user: findUser,
      },
    });
  } catch (err) {
    console.log("Error is ", err);
  }
}
