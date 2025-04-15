import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // useNavigate and useLocation from react-router-dom
import { FaCalendarAlt, FaUsers, FaHotel, FaRupeeSign, FaDownload, FaUserAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti'; // For confetti effect

const Confirmation = () => {
  const navigate = useNavigate(); // Used for navigation
  const location = useLocation(); // Accessing the passed state
  const { firstName, lastName, phoneNumber, email, checkIn, checkOut, guests, roomType, pricePerNight } = location.state;

  // Handle downloading PDF with booking details
  const handleDownload = () => {
    import('jspdf').then(jsPDFModule => {
      const doc = new jsPDFModule.jsPDF();
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(14);
      doc.text("Palm Paradise Resort - Booking Confirmation", 20, 20);
      doc.text(`Name: ${firstName} ${lastName}`, 20, 30);
      doc.text(`Phone: ${phoneNumber}`, 20, 40);
      doc.text(`Email: ${email}`, 20, 50);
      doc.text(`Check-in: ${checkIn}`, 20, 60);
      doc.text(`Check-out: ${checkOut}`, 20, 70);
      doc.text(`Guests: ${guests}`, 20, 80);
      doc.text(`Room Type: ${roomType}`, 20, 90);
      doc.text(`Price/Night: ₹${pricePerNight}`, 20, 100);
      doc.save("Palm_Paradise_Booking_Confirmation.pdf");
    });
  };

  React.useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="bg-[#e0f7fa] text-[#003f5c] min-h-screen px-6 py-10 relative overflow-hidden">
      {/* Back to Home Button */}
      <div className="fixed top-4 right-4 flex gap-4 z-50 bg-[#e0f7fa] p-2 rounded-xl shadow-lg backdrop-blur-md">
        <button
          onClick={() => navigate('/')} // Back to home page functionality
          className="text-sm px-4 py-2 bg-[#7bdff2] text-[#003f5c] rounded-lg font-semibold shadow-md hover:bg-[#58c4dc]"
        >
          ← Back to Home
        </button>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-[#38b6ff] text-center drop-shadow mb-10"
      >
        🎉 Booking Confirmed!
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-[#f0fcff] max-w-xl mx-auto p-6 rounded-2xl shadow-xl space-y-6 border border-[#7bdff2]"
      >
        {/* Booking Details and User Information */}
        <div className="space-y-2 text-lg">
          <p className="flex items-center gap-2"><FaUserAlt className="text-[#0077b6]" /> Name: <strong>{firstName} {lastName}</strong></p>
          <p className="flex items-center gap-2"><FaPhoneAlt className="text-[#0077b6]" /> Phone: <strong>{phoneNumber}</strong></p>
          <p className="flex items-center gap-2"><FaEnvelope className="text-[#0077b6]" /> Email: <strong>{email}</strong></p>
          <p className="flex items-center gap-2"><FaCalendarAlt className="text-[#0077b6]" /> Check-in: <strong>{checkIn}</strong></p>
          <p className="flex items-center gap-2"><FaCalendarAlt className="text-[#0077b6]" /> Check-out: <strong>{checkOut}</strong></p>
          <p className="flex items-center gap-2"><FaUsers className="text-[#0077b6]" /> Guests: <strong>{guests}</strong></p>
          <p className="flex items-center gap-2"><FaHotel className="text-[#0077b6]" /> Room Type: <strong>{roomType}</strong></p>
          <p className="flex items-center gap-2"><FaRupeeSign className="text-[#0077b6]" /> Price/Night: <strong>₹{pricePerNight}</strong></p>
        </div>

        <div className="text-center pt-4">
          <p className="italic text-[#555] text-sm">A confirmation email with your booking details has been sent.</p>
        </div>

        {/* Download Confirmation PDF Button */}
        <div className="text-center">
          <button
            onClick={handleDownload}
            className="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-[#7bdff2] text-[#003f5c] rounded-lg font-semibold shadow-md hover:bg-[#58c4dc]"
          >
            <FaDownload /> Download Confirmation
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Confirmation;
