import React from 'react';
import { books } from "@/data/books";
import Link from "next/link";
import Image from "next/image";

const BookCards = () => {
  // Limit books to 8
  const limitedBooks = books.slice(0, 8);

  return (
    <div className="p-8 lg:mx-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Popular Books
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {limitedBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-red-900 shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Replace img with Image */}
            <Image
              src={book.image}
              alt={book.title}
              width={200} // Set appropriate width
              height={250} // Set appropriate height
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-red-900">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-4">by {book.author}</p>
              <p className="text-md text-gray-800 font-bold mt-6 mb-4">Price : {book.price}</p>
              <div className="flex justify-between">
                {/* Use id instead of title */}
                <Link href={`/books/${book.id}`} passHref>
                  <button className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600">
                    View
                  </button>
                </Link>
                <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-900">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/books"
          className="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 hover:shadow-lg"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default BookCards;
