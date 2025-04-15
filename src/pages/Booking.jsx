import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaHotel, FaRupeeSign, FaUserAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Booking = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState('deluxe');
  const [showCharacter, setShowCharacter] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // New state for additional fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const roomRates = {
    deluxe: 12500,
    ocean: 15000,
    garden: 10500,
  };

  const pricePerNight = roomRates[roomType];

  const triggerAnimation = (type) => {
    setShowCharacter(type);
    setTimeout(() => setShowCharacter(''), 1500);
  };

  const handleBooking = () => {
    triggerAnimation('confirm');
    setBookingConfirmed(true);
  };

  const goToHome = () => {
    navigate('/');
  };

  const goToConfirmation = () => {
    const bookingData = {
      firstName,
      lastName,
      phoneNumber,
      email,
      checkIn,
      checkOut,
      guests,
      roomType,
      pricePerNight,
    };
    navigate('/confirmation', { state: bookingData });
  };

  return (
    <div className="relative bg-[#e0f7fa] text-[#003f5c] min-h-screen px-6 py-10 flex flex-col items-center">
      <div className="fixed top-4 right-4 flex gap-4 z-50 bg-[#e0f7fa] p-2 rounded-xl shadow-lg backdrop-blur-md">
        <button
          id="homeBtn"
          onClick={() => {
            const button = document.getElementById('homeBtn');
            button.classList.add('animate-bounce');
            setTimeout(() => navigate('/'), 600);
          }}
          className="text-sm px-4 py-2 bg-[#7bdff2] text-[#003f5c] rounded-lg font-semibold shadow-md hover:bg-[#58c4dc]"
        >
          ← Back to Home
        </button>
      </div>

      <h1 className="text-3xl font-bold text-[#38b6ff] mb-6 drop-shadow">Book Your Stay</h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#f0fcff] rounded-2xl shadow-xl p-6 w-full max-w-xl space-y-6 border border-[#7bdff2]"
      >
        {/* Name and Contact Info Section */}
        <div className="flex flex-col gap-3">
          <label className="text-sm text-[#0077b6] flex items-center gap-2">
            <FaUserAlt /> First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="rounded px-3 py-2 bg-[#caf0f8] text-[#003f5c] border-none focus:outline-none focus:ring-2 focus:ring-[#7bdff2] shadow"
          />
          
          <label className="text-sm text-[#0077b6] flex items-center gap-2 mt-4">
            <FaUserAlt /> Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="rounded px-3 py-2 bg-[#caf0f8] text-[#003f5c] border-none focus:outline-none focus:ring-2 focus:ring-[#7bdff2] shadow"
          />

          <label className="text-sm text-[#0077b6] flex items-center gap-2 mt-4">
            <FaPhoneAlt /> Phone Number
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="rounded px-3 py-2 bg-[#caf0f8] text-[#003f5c] border-none focus:outline-none focus:ring-2 focus:ring-[#7bdff2] shadow"
          />

          <label className="text-sm text-[#0077b6] flex items-center gap-2 mt-4">
            <FaEnvelope /> Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded px-3 py-2 bg-[#caf0f8] text-[#003f5c] border-none focus:outline-none focus:ring-2 focus:ring-[#7bdff2] shadow"
          />
        </div>

        {/* Calendar and Other Booking Details */}
        <div className="flex flex-col gap-3 mt-6">
          <label className="text-sm text-[#0077b6] flex items-center gap-2">
            <FaCalendarAlt /> Check-in Date
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => { setCheckIn(e.target.value); triggerAnimation('calendar'); }}
            className="rounded px-3 py-2 bg-[#caf0f8] text-[#003f5c] border-none focus:outline-none focus:ring-2 focus:ring-[#7bdff2] shadow"
          />

          <label className="text-sm text-[#0077b6] flex items-center gap-2 mt-4">
            <FaCalendarAlt /> Check-out Date
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => { setCheckOut(e.target.value); triggerAnimation('calendar'); }}
            className="rounded px-3 py-2 bg-[#caf0f8] text-[#003f5c] border-none focus:outline-none focus:ring-2 focus:ring-[#7bdff2] shadow"
          />

          <label className="text-sm text-[#0077b6] flex items-center gap-2 mt-4">
            <FaUsers /> Number of Guests
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => { if (guests > 1) setGuests(guests - 1); triggerAnimation('guests'); }}
              className="bg-[#90e0ef] text-[#003f5c] font-bold px-3 py-1 rounded-full shadow"
            >-</button>
            <span className="text-xl">{guests}</span>
            <button
              onClick={() => { setGuests(guests + 1); triggerAnimation('guests'); }}
              className="bg-[#90e0ef] text-[#003f5c] font-bold px-3 py-1 rounded-full shadow"
            >+</button>
          </div>

          <label className="text-sm text-[#0077b6] flex items-center gap-2 mt-4">
            <FaHotel /> Room Type
          </label>
          <select
            value={roomType}
            onChange={(e) => { setRoomType(e.target.value); triggerAnimation('room'); }}
            className="rounded px-3 py-2 bg-[#caf0f8] text-[#003f5c] focus:outline-none focus:ring-2 focus:ring-[#7bdff2] shadow"
          >
            <option value="deluxe">Deluxe Room - ₹12,500</option>
            <option value="ocean">Ocean View Room - ₹15,000</option>
            <option value="garden">Garden View Room - ₹10,500</option>
          </select>

          <p className="mt-4 text-[#007f5f] flex items-center gap-2">
            <FaRupeeSign /> {pricePerNight} per night
          </p>
        </div>

        <button
          onClick={handleBooking}
          className="w-full bg-[#7bdff2] hover:bg-[#38b6ff] py-3 rounded-xl font-semibold text-[#003f5c] shadow-lg"
        >
          Confirm Booking
        </button>
      </motion.div>

      {/* Ghibli-style Confirmation Popup */}
      <AnimatePresence>
        {bookingConfirmed && (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-[#e0f7fa] flex flex-col items-center justify-center z-50 text-center px-4"
          >
            <img src="/ghibli_explorer.png" alt="Explorer Girl" className="w-full max-w-sm rounded-2xl shadow-2xl mb-6" />
            <h2 className="text-3xl sm:text-4xl text-[#0077b6] font-[cursive] mb-4 drop-shadow">✨ Booking Confirmed! ✨</h2>
            <p className="text-[#003f5c] text-lg max-w-md font-[cursive]">
              Your magical journey to Palm Paradise is about to begin. Sun, sand, and serenity await you in Goa! 🌞🌴
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                onClick={goToHome}
                className="px-6 py-2 bg-[#7bdff2] text-[#003f5c] rounded-lg font-semibold hover:bg-[#58c4dc] shadow-md"
              >
                ← Return to Home
              </button>
              <button
                onClick={goToConfirmation}
                className="px-6 py-2 bg-[#38b6ff] text-white rounded-lg font-semibold hover:bg-[#2d9cdb] shadow-md"
              >
                Move to Confirmation →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Booking;
