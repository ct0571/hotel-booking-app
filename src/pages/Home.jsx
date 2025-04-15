import React from 'react';
import { Link } from "react-router-dom";
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaLink, FaUtensils
} from 'react-icons/fa';

function Home() {
  const breakfastItems = [
    { name: "Masala Dosa", image: "/breakfast_images/masala_dosa.png", included: true, ingredients: "Rice, Urad Dal, Potato, Mustard Seeds, Curry Leaves", allergens: "Mustard Seeds" },
    { name: "Maple Pancakes", image: "/breakfast_images/maple_pancakes.png", included: false, ingredients: "Flour, Eggs, Milk, Maple Syrup, Butter", allergens: "Eggs, Milk" },
    { name: "Omelette", image: "/breakfast_images/omelette.png", included: true, ingredients: "Eggs, Onion, Tomato, Cheese, Butter", allergens: "Eggs, Cheese" },
    { name: "Assorted Cereals", image: "/breakfast_images/assorted_cereals.png", included: true, ingredients: "Corn Flakes, Chocos, Muesli, Milk", allergens: "Milk" },
    { name: "Fruit Bowl", image: "/breakfast_images/fruit_bowl.png", included: true, ingredients: "Apple, Banana, Papaya, Watermelon, Grapes", allergens: "None" },
    { name: "Toast with Jam", image: "/breakfast_images/toast_with_jam.png", included: true, ingredients: "Bread, Butter, Jam (Strawberry/Mango)", allergens: "Gluten, Dairy" },
    { name: "Fresh Juice", image: "/breakfast_images/fresh_juice.png", included: false, ingredients: "Orange, Apple, Watermelon (seasonal)", allergens: "None" },
    { name: "Tea / Coffee", image: "/breakfast_images/tea__coffee.png", included: true, ingredients: "Milk, Tea Leaves / Coffee Beans, Sugar", allergens: "Milk" },
  ];

  const scenicSpots = [
    { name: "Dudhsagar Falls", distance: "46 km", hours: "6 AM – 5 PM", link: "https://goa-tourism.com/dudhsagar" },
    { name: "Fort Aguada", distance: "8.2 km", hours: "9 AM – 6 PM", link: "https://goa-tourism.com/fort-aguada" },
    { name: "Chapora Fort", distance: "15.6 km", hours: "8 AM – 7 PM", link: "https://goa-tourism.com/chapora" },
  ];

  const services = [
    { name: "Goa Medical College", type: "Hospital", distance: "10 km", hours: "24/7", link: "https://www.gmc.goa.gov.in/" },
    { name: "Apollo Pharmacy", type: "Pharmacy", distance: "2 km", hours: "8 AM – 10 PM", link: "https://www.apollopharmacy.in/" },
    { name: "Café Bodega", type: "Restaurant", distance: "1.5 km", hours: "9 AM – 11 PM", link: "https://www.cafebodega.in/" },
  ];

  const contactInfo = {
    phone: "+91-1234567890",
    email: "contact@palmparadise.com",
    locationLink: "https://maps.google.com/?q=Palm+Paradise+Resort",
  };

  return (
    <div className="bg-[#d0eaff] text-[#004a70] min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-[#d0eaff] border-b border-[#7bdff2]">
        <div className="text-2xl font-bold text-[#38b6ff] glow-text">Palm Paradise</div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-[#38b6ff] glow-link">Home</Link>
          <Link to="/book" className="hover:text-[#38b6ff] glow-link">Book</Link>
          <Link to="/confirmation" className="hover:text-[#38b6ff] glow-link">Confirmation</Link>
        </div>
      </nav>

      {/* Hero Image Section */}
      <section className="relative h-[60vh]">
        <img
          src="/resort_gallery/resort_entrance.png"
          alt="Palm Paradise Resort"
          className="absolute inset-0 w-full h-full object-cover brightness-90"
        />
        <div className="relative z-10 h-full bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#7bdff2] mb-4 glow-text">Welcome to Palm Paradise Resort</h1>
          <p className="text-white text-lg max-w-2xl">Experience luxury and tranquility nestled in the heart of Goa. Your dream vacation starts here.</p>
        </div>
      </section>

      {/* Breakfast Menu - Flip Cards */}
      <section className="px-6 py-10">
        <h2 className="text-2xl text-[#38b6ff] font-bold mb-6 flex items-center gap-2">
          <FaUtensils /> Breakfast Menu
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {breakfastItems.map((item, index) => (
            <div key={index} className="group [perspective:1000px]">
              <div className="relative h-60 w-full rounded-xl shadow-lg transition-transform duration-[1200ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 rounded-xl bg-[#005f83] flex flex-col justify-center items-center text-center p-3 [backface-visibility:hidden]">
                  <img src={item.image} alt={item.name} className="rounded-md w-full h-32 object-cover mb-2" />
                  <h3 className="text-base font-semibold text-white">{item.name}</h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 rounded-xl bg-[#006f8e] p-3 text-xs text-gray-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h3 className="font-bold mb-1">{item.name}</h3>
                  <p><strong>Ingredients:</strong> {item.ingredients}</p>
                  <p className="mt-1"><strong>Allergens:</strong> <span className="text-red-400">{item.allergens}</span></p>
                  <p className="mt-2">
                    {item.included ? (
                      <span className="text-green-400 font-bold">✅ Included</span>
                    ) : (
                      <span className="text-yellow-300 font-bold">💵 Extra Cost</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scenic Spots */}
      <section className="px-6 py-10 bg-[#e0f7fa]">
        <h2 className="text-3xl font-bold text-[#38b6ff] mb-6">Nearby Scenic Spots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {scenicSpots.map((spot, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
              <a href={spot.link} className="text-[#004a70] hover:text-[#58a6d8]" target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-semibold">{spot.name}</h3>
              </a>
              <p className="text-sm text-gray-600">Distance: {spot.distance} | Timings: {spot.hours}</p>
              <p className="text-sm text-gray-600">Website: <a href={spot.link} className="text-[#38b6ff]" target="_blank" rel="noopener noreferrer">{spot.link}</a></p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Services */}
      <section className="px-6 py-10">
        <h2 className="text-3xl font-bold text-[#38b6ff] mb-6">Emergency Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
              <a href={service.link} className="text-[#004a70] hover:text-[#58a6d8]" target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-semibold">{service.name} - {service.type}</h3>
              </a>
              <p className="text-sm text-gray-600">Distance: {service.distance} | Timings: {service.hours}</p>
              <p className="text-sm text-gray-600">Website: <a href={service.link} className="text-[#38b6ff]" target="_blank" rel="noopener noreferrer">{service.link}</a></p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-6 py-10 bg-[#e0f7fa] flex justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-[#38b6ff]" />
            <p className="text-lg font-semibold">{contactInfo.phone}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-[#38b6ff]" />
            <p className="text-lg font-semibold">
              <a href={`mailto:${contactInfo.email}`} className="text-[#004a70]">{contactInfo.email}</a>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-[#38b6ff]" />
            <a href={contactInfo.locationLink} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#004a70] hover:text-[#58a6d8]">View on Map</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
