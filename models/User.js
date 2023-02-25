import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true},
        password: {type: String, required: true },
        confirmPassword: {type: String, required: true},
        notification: {type: Boolean}
    },
    {
        timestamps: true
    }
)

let User = mongoose.model("users", schema)

export default User 