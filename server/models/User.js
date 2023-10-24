import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  nim: {
    type: Number,
    required: true,
  },
  email: String,
  password: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  jurusan: {
    type: String,
    required: true,
  },
  prodi: {
    type: String,
    required: true,
  },
  noHp: {
    type: String,
    required: true,
  },
  historyRental: [
    {
      bikeCode: Number,
      station: Number,
      pickUpTime: Date,
      dateRent: Date,
    },
  ],
});

const User = model("User", UserSchema);
export default User;
