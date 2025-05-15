import { Request, Response } from "express";
import { User } from "../models/user.model";
import { registerUserSchma } from "../validations/schemas";
const bcrypt = require("bcrypt");

const SignUp = async (req: Request, res: Response) => {
  const validatedData = registerUserSchma.safeParse(req.body)
  if (!validatedData.success) {
    res.status(400).json({ message: "Invalid input", errors: validatedData.error.format() });
    return
  }
  const email = validatedData.data.email;
  let user = await User.findOne({ email });
  if (user) {
    res.status(400).send("User already exisits. Please sign in");
    return
  } else {

    try {
      const user = new User({
        name: validatedData.data.name,
        email: validatedData.data.email,
        password: validatedData.data.password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt)

      await user.save();
      res.status(201).json(user);
      return

    } catch (err: any) {
      res.status(400).json({ message: err?.message });
      return
    }
  }
};

export default SignUp