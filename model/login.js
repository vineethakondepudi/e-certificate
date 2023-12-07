import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Login || mongoose.model("Login_form_details_eCertificate", topicSchema);

export default Topic;