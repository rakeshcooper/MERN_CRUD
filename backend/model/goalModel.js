import mongoose from "mongoose";

const goalSchema = mongoose.Schema({
    text: {
        required: [true, "Please add a text value"],
        type: String
    }
},
{
    timestamps: true,
}
)

export default mongoose.model('Goal',goalSchema)