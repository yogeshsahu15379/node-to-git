import mongoose from "mongoose";

const check1 = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
})

export default mongoose.model("check1",check1);