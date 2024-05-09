import "./ServiceList.css";
import React from "react";
import ServiceCard from "./ServiceCard";
import { deliveryVan, moneyBack, serviceHours } from "../../assets";

const ServiceList = ({ ariaLabel }) => {
  return (
    <section aria-label={ariaLabel} className="service-list-container">
      <section className="service-list [&_p]:text-nowrap">
        <ServiceCard
          label={"Free Shipping"}
          image={deliveryVan}
          imageAlt={"Delivery Van"}
          description={"Order over ₹1000000"}
        />
        <ServiceCard
          label={"Money Returns"}
          image={moneyBack}
          imageAlt={"Money Back Guarantee"}
          description={"30 days money returs"}
        />
        <ServiceCard
          label={"24/7 Support"}
          image={serviceHours}
          imageAlt={"Service Hours"}
          description={"Customer support"}
        />
      </section>
    </section>
  );
};

export default ServiceList;
