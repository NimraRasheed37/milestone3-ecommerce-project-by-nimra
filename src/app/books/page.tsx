"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { books as bookData } from "@/data/books";
import Navbar from "@/components/Navbar";
import HeaderTop from "@/components/HeaderTop";
import Link from "next/link";
import Footer from "@/components/Footer";

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  price: string;
  category: string;
}

function shuffleArray(array: Book[]): Book[] {
  return array.sort(() => Math.random() - 0.5);
}

export default function BooksPage() {
  const [shuffledBooks, setShuffledBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setShuffledBooks(shuffleArray([...bookData]));
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <HeaderTop />
      <Navbar />

      <div className="p-8 lg:mx-4 xl:mx-10 ">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Popular Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shuffledBooks.map((book, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-red-900 shadow-md overflow-hidden transition-transform transform hover:scale-105 py-2"
            >
              <Image
                src={book.image}
                alt={`${book.title} cover`}
                width={300}
                height={200}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-red-900">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-4">by {book.author}</p>
                <p className="text-md text-gray-800 font-bold mt-6 mb-4">
                  Price: {book.price}
                </p>
                <div className="flex justify-between">
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
      </div>
      <Footer/>
    </>
  );
}
