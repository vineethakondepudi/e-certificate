import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Teddy", topicSchema);

export default Topic;