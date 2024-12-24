'use client';

import { useState } from "react";
import HeaderTop from "@/components/HeaderTop";
import Navbar from "@/components/Navbar";
import { books } from "@/data/books";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

// Importing useParams hook from 'next/navigation' to unwrap params
import { useParams } from 'next/navigation';
import Footer from "@/components/Footer";

const BookDetailsPage = () => {
  // Quantity state for cart
  const [quantity, setQuantity] = useState(1);

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Unwrap the params object using useParams
  const { id } = useParams();

  const book = books.find((book) => book.id.toString() === id);

  // Handle adding to the cart
  const handleAddToCart = () => {
    if (book) {
      alert(`Added ${quantity} of "${book.title}" to your cart!`);
    }
  };

  // Early return if no book found
  if (!book) {
    return <p className="text-center text-red-600">Book not found</p>;
  }

  return (
    <>
      <HeaderTop />
      <Navbar />
      <div className="p-8 w-full md:w-[70%] mx-auto">
        {/* Back Button */}
        <div className="mb-4">
          <Link href="/books" className="flex items-center text-red-600 hover:text-red-800">
            <AiOutlineArrowLeft className="mr-2" />
            <span>Back to Books</span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-start">
          <Image
            src={book.image}
            alt={`${book.title} cover`}
            width={300}
            height={400}
            className="w-full max-w-sm object-contain mb-6 md:mb-0"
          />
          <div className="md:ml-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{book.title}</h2>
            <p className="text-lg font-bold text-gray-800">Author: {book.author}</p>
            <p className="text-md text-gray-600 mt-2">Price: {book.price}</p>
            <p className="mt-4 text-gray-700">{book.description}</p>

            {/* Quantity Selector */}
            <div className="mt-6 flex items-center space-x-4">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="mt-6 px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BookDetailsPage;
