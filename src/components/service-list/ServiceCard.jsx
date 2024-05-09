import React from "react";

const ServiceCard = ({ label, image, imageAlt, description }) => {
  return (
    <div className="service-card px-3 py-6 flex flex-row-reverse justify-between sm:justify-center items-center gap-5 sm:gap-10 rounded-sm border border-primary">
      <img
        src={image}
        alt={imageAlt}
        className="w-12 h-12 object-contain"
        loading="lazy"
      />
      <div>
        <h4 className="font-medium capitalize text-lg">{label}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
