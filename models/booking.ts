import mongoose, { Schema } from 'mongoose';

const bookSchema = new Schema(
  {
    name: String,
    email: String,
    phone: Number,
    time: String,
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);

export default Book;
