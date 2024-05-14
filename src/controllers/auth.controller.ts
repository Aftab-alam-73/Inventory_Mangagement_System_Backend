import { db } from "../utils/db connection";
import { generateToken } from "../utils/jwt";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { SignupData, SinginData, User } from "../type";

class Authentication {
  singIn = async (req: Request, res: Response) => {
    try {
      const { username, password }: SinginData = req.body;
      const user: User | null = await db.user.findUnique({
        where: { username: username },
      });

      if (!user) {
        return res.status(404).json("USER_NOT_FOUND");
      } else {
        const result: boolean = await bcrypt.compare(password, user.password);

        if (result) {
          const token = generateToken(user);
          return res
            .status(200)
            .cookie("access_token", token, {
              httpOnly: true,
              secure: true,
              expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            })
            .json({ success: true, message: "User Logged In Successfully" });
        }
        return res
          .status(404)
          .json({ success: false, message: "Password is incorrect" });
      }
    } catch (e: any) {
      return res
        .status(500)
        .json({ success: false, message: "Something went wrong" });
    }
  };

  singUp = async (req: Request, res: Response) => {
    try {
      const { username, email, password }: SignupData = req.body;
      const user = await db.user.findUnique({ where: { username: username } });
      if (user) return res.json("User already exists");
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);
      const newUser = await db.user.create({
        data: { username, email, password: hashPassword },
      });
      return res.status(200).json({
        success: true,
        message: "User created successfully",
        user: newUser,
      });
    } catch (e) {
      return res
        .status(500)
        .json({ success: false, message: "Something went wrong" });
    }
  };
}

export const auth = new Authentication();
