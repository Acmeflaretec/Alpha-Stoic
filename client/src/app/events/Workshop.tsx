"use client"; // Ensure client-side rendering

import React, { useState } from 'react';
// import Image from 'next/image';
import { Pagination, Button, Modal, TextField, Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import './style.css';
import Link from 'next/link';
import dayjs from 'dayjs';

interface WorkshopProps {
  workshops: {
    _id: string;
    eventName: string;
    text: string;
    features: string[];
    images: string[];
    price: number;
    date: string;
  }[];
}
const Workshops: React.FC<WorkshopProps> = ({ workshops }) => {
  const URL = process.env.NEXT_PUBLIC_URL
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;
  const maxFeatures = 6;

  const handlePageChange = (_: React.ChangeEvent<unknown>, pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  

  

  const totalPages = Math.ceil(workshops.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const selectedWorkshops = workshops.slice(startIndex, startIndex + cardsPerPage);

  const formatDate = (dateString: string) => {
    return dayjs(dateString).format('DD/MM/YYYY');
  };
  return (
    <div className="pt-[150px]">
      <div className="text-center mt-5">
        <h2 className="mb-8 text-3xl leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
          Upcoming workshops
        </h2>
      </div>

      <div className="card-container">
        {selectedWorkshops.length !== 0 ? (
          selectedWorkshops.map((workshop) => (
            <div key={workshop._id} className="card">
              <div className="">
                <div className="relative h-64 w-full">
                  <Carousel showThumbs={false} autoPlay infiniteLoop>
                    {workshop.images.map((src, index) => (
                      <div key={index} className="relative h-64 w-full">
                        {/* <Image
                          src={`${URL}/uploads/${src}`}
                          alt={workshop.eventName}
                          layout="fill"
                          objectFit="cover"
                        /> */}
                        {/* <img src={`${URL}/uploads/${src}`} alt={workshop.eventName} style={{ width: '100%', height: '200px', objectFit: 'cover' }} /> */}
                        <img
                         src={`${URL}/uploads/${src}`}
                          // src='mentor.png'
                          alt={workshop.eventName}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className="p-4">
                  <div className="mb-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {workshop?.price ? <h3 className="text-l font-bold">₹{workshop.price}</h3>
                      : <h3 className="text-l font-bold bg-green-100 text-green-500">&nbsp; FREE &nbsp;</h3>}
                    <h3 className="text-l font-bold">{formatDate(workshop.date)}</h3>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{workshop.eventName}</h3>
                  <p className="text-gray-700 mb-4">{workshop.text}</p>
                  <ul className="list-disc pl-5">
                    {workshop.features.slice(0, maxFeatures).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='container mb-5'>
                {/* <Link href="/event-details"> */}
                <Link href={{ pathname: '/event-details', query:{id:workshop._id}}}>
                  <Button
                    style={{ backgroundColor: '#3EB449' }}
                    variant="contained"
                    color="success"
                    fullWidth
                    className="mt-4"
                  // onClick={() => handleEnrollClick(workshop)}
                  >
                    Enroll
                  </Button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <span style={{ color: 'red' }}>Events Not Organized</span>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="standard"
        />
      </div>
     
    </div>
  );
};



export default Workshops;
