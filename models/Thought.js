const { Schema, model } = require("mongoose");
const moment = require("moment");

const reactSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdValue) =>
        moment(createdValue).format("MMM DD, YYYY [at] hh:mm a"),
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "required",
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

    reactions: [reactSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
