const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "required",
      minlength: 1,
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createValue) =>
        moment(createValue).format("MMM DD, YYYY [at] hh:mm a"),
    },

    username: {
      type: String,
      required: true,
    },

    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
