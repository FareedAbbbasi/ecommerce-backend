import { Request, Response } from "express";
import { User } from "../models/user.model";
import { registerUserSchma } from "../validations/schemas";
const bcrypt = require("bcrypt");
  

const signUp = async (req: Request, res: Response) => {
  const validatedData =  registerUserSchma.safeParse(req.body)
  if (!validatedData.success) {
    return res.status(400).json({ message: "Invalid input", errors: validatedData.error.format() });
  }
  const { name, email, password } = validatedData.data;
  let user = await User.findOne({email});
  if (user) {
    res.status(400).send("User already exisits. Please sign in");
    return
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);
      const user = new User({
        name: ({name }),
        email: ({email}),
        password: password,
      });
      await user.save();
      res.status(201).json(user);
      return
    } catch (err: any) {
      res.status(400).json({ message: err?.message });
      return
    }
  }
};

export default signUp;