const mongoose = require("mongoose");

const formSubmissionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    info: {
      phoneNumber: {
        type: String,
        required: true,
      },
      CompanyName: {
        type: String,
        required: true,
      },
      CompanyWebsite: {
        type: String,
        required: true,
      },
    },
    message: {
      type: String,
      maxlength: 500,
    },
  },
  { timestamps: true }
);

const FormSubmission =
  mongoose.models.FormSubmission ||
  mongoose.model("FormSubmission", formSubmissionSchema);

module.exports = FormSubmission;
