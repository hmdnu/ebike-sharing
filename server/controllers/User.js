import User from "../models/User.js";
import { createToken } from "../utils/token.js";

export async function getUser(req, res) {
  try {
    const users = await User.find();

    return res.status(200).json({ users, message: "fetch users success", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to fetch users", success: false });
  }
}

export async function createUser(req, res) {
  const { nim, nama, password, jurusan, prodi, noHp } = req.body;

  try {
    const user = await User.create({ nim, nama, password, jurusan, prodi, noHp });
    return res.status(200).json({ user, message: "create user success", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "cant create user", success: false });
  }
}

export async function login(req, res) {
  const { nim, password } = req.body;

  try {
    const user = await User.findOne({ nim });

    if (!user) {
      return res.status(401).json({ message: "user not found", success: false });
    }

    if (password === user.password) {
      const maxAge = 86_400_000;

      const token = createToken(user._id);

      res.cookie("auth", token, {
        maxAge,
        withCredentials: true,
      });

      return res.status(200).json({ user, message: "login success", success: true });
    } else {
      return res.status(401).json({ message: "password incorrect", success: false });
    }
  } catch (error) {
    console.log(error);
    return res.status(501).json({ message: "cant login", success: false });
  }
}

export async function getIndividualUser(req, res) {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    return res.status(200).json({ user, message: "fetch user success", success: true });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ message: "cant fetch user", success: false });
  }
}
