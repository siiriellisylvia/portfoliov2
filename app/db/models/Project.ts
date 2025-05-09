import { Schema, model, Types, type InferSchemaType } from "mongoose";

// Define the schema for the Project collection in MongoDB
const projectSchema = new Schema(
  {
    slug: {
      type: String,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    date: {
      type: String,
    },
    duration: {
      type: String,
    },
    type: {
      type: String,
    },
    tech: {
      type: String,
    },
    description: {
      type: String,
    },
    overview: {
      type: String,
    },
    features: [
      {
        type: String,
      },
    ],
    improvements: {
      type: String,
    },
    image: {
      type: String,
    },
    video: {
      type: String,
    },
    liveLink: {
      type: String,
    },

  },
  { timestamps: true } // Automatically add `createdAt` and `updatedAt`
);

export type ProjectType = InferSchemaType<typeof projectSchema> & {
  _id: Types.ObjectId | string;
};

const Project = model<ProjectType>("Project", projectSchema);

export default Project;
