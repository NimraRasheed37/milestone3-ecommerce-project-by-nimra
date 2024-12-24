'use client';
import BookCards from "@/components/BookCards";
import Footer from "@/components/Footer";
import HeaderTop from "@/components/HeaderTop";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
   <>
   <HeaderTop/>
   <Navbar/>
   <Hero/>
   <BookCards/>
   <Footer/>
   </>
  );
}
