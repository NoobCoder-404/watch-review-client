import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import ServiceItem from './ServiceItem';

const Services = () => {
  const [services, setServices] = useState([]);
  useTitle('Services');
  useEffect(() => {
    fetch('https://watch-review-server.vercel.app/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 px-36 pb-12">
      {services.map((service) => (
        <ServiceItem key={service._id} service={service} />
      ))}
    </div>
  );
};

export default Services;
