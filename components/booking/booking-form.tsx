
"use client";

interface BookingFormProps {
  tourId?: string;
  tourTitle?: string;
  tourPrice?: number;
}

export const BookingForm = () => {
  const whatsappNumber = "255785696021"; // Replace with your business number
  const defaultMessage = "Hello! @mafiaislandauthentic I'm interested in booking a tour. Please provide more details.";
  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Book This Tour</h3>
      <div className="flex flex-col items-center mb-6">
        <img
          src="/Chinanda.jpg"
          alt="Mafia Island Authentic Logo"
          className="w-16 h-16 rounded-full mb-2 border border-primary"
        />
        <div className="font-semibold text-lg text-primary">Mafia Island Authentic</div>
        <div className="text-gray-500 text-sm">WhatsApp: +255 785 696 021</div>
        <div className="text-gray-500 text-sm">Your local tour expert</div>
      </div>
      <button
        onClick={handleWhatsApp}
        className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/80 transition-colors"
      >
        Chat via WhatsApp
      </button>
    </div>
  );
};
