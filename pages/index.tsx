import { PROPERTYLISTINGSAMPLE } from "@/constants";
import React from "react";
import { HERO_BG } from "@/constants";
import Pill from "@/components/Pill";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "City Center",
  "Private Pool",
  "Mountain View",
];

const Home: React.FC = () => {
  return (
    <>
      <section
        className="w-full h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-4"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${HERO_BG})`,
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      <section className="py-6 px-4 md:px-12 flex flex-wrap gap-3 justify-center">
        {filters.map((filter, index) => (
          <Pill key={index} label={filter} />
        ))}
      </section>

      <section className="py-10 px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
            <img
               src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover"
               />
            <div className="p-4">
               <h3 className="text-lg font-semibold">{property.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                   ${property.price.toLocaleString()} per night
                </p>
            <p className="text-yellow-500 font-medium mt-2">
          ★ {property.rating}
        </p>
      </div>
    </div>
  ))}
</section>

    </>
  );
};

export default Home;
