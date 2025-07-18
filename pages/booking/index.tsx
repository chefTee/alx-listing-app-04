// pages/booking/index.tsx
import React from 'react';
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import GroundRules from "@/components/booking/GroundRules";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
    endDate: "27 August 2024",
    guests: 4,
    propertyImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    rating: 4.76,
    reviewCount: 345
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Booking</h1>
          <p className="text-gray-600">Review your details and confirm your reservation</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms and Policies */}
          <div className="lg:col-span-2 space-y-8">
            {/* Booking Form Section */}
            <section className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">Your Information</h2>
                <p className="text-sm text-gray-600 mt-1">Please fill in your details to complete the booking</p>
              </div>
              <div className="p-6">
                <BookingForm />
              </div>
            </section>
            
            {/* Cancellation Policy Section */}
            <section className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">Cancellation Policy</h2>
                <p className="text-sm text-gray-600 mt-1">Important information about cancellations and refunds</p>
              </div>
              <CancellationPolicy />
            </section>
            
            {/* Ground Rules Section */}
            <section className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">House Rules</h2>
                <p className="text-sm text-gray-600 mt-1">Please review and agree to follow these rules</p>
              </div>
              <GroundRules />
            </section>

            {/* Terms and Conditions */}
            <section className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <div>
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the{' '}
                    <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    By checking this box, you confirm that you have read and agree to our terms and conditions.
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Right Column - Order Summary (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <OrderSummary bookingDetails={bookingDetails} />
              
              {/* Booking Actions */}
              <div className="mt-6 space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-200">
                  Confirm Booking
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition duration-200">
                  Save for Later
                </button>
              </div>

              {/* Security Notice */}
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-medium text-green-800">Secure Booking</span>
                </div>
                <p className="text-xs text-green-700 mt-1">
                  Your payment information is encrypted and secure. We never store your credit card details.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <div className="text-2xl mb-2">🛡️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Secure Payment</h3>
            <p className="text-sm text-gray-600">Your payment is protected with bank-level security</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <div className="text-2xl mb-2">📞</div>
            <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-600">Get help anytime with our customer support team</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <div className="text-2xl mb-2">✅</div>
            <h3 className="font-semibold text-gray-900 mb-2">Instant Confirmation</h3>
            <p className="text-sm text-gray-600">Receive booking confirmation immediately after payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}