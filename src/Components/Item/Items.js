import React, { useEffect, useState } from 'react';
import ServiceItem from '../Services/ServiceItem';

const Items = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://watch-review-server.vercel.app/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 px-36 pb-12">
        {services.slice(0, 3).map((service) => (
          <ServiceItem key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Items;
