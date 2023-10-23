import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  nim: {
    type: Number,
    required: [true, "nim diperlukan"],
  },
  password: {
    type: String,
    required: [true, "password diperlukan"],
  },
  nama: {
    type: String,
    required: [true, "nama diperlukan"],
  },
  jurusan: {
    type: String,
    required: [true, "jurusan diperlukan"],
  },
  prodi: {
    type: String,
    required: [true, "prodi diperlukan"],
  },
  noHp: {
    type: String,
    required: [true, "no hp diperlukan"],
  },
});

const User = model("User", UserSchema);
export default User;
