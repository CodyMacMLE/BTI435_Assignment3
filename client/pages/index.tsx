/*********************************************************************************
* BTI425 – Assignment 3
* 
* * I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html * 
*
* Name: Cody MacDonald       Student ID: 159702232       Date: Feb 13th, 2025 
* 
* ********************************************************************************/

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Pagination, Accordion } from 'react-bootstrap';
import ListingDetails from './components/ListingDetails';
import PageHeader from './components/PageHeader';

// Define the type for a listing
interface Listing {
  _id: number;
  name: string;
  title: string;
  summary: string;
  address: {
    street: string;
  };
  price: string;
  room_type: string;
  bed_type: string;
  beds: number;
  images: {
      picture_url: string;
  };
  review_scores: {
      review_scores_rating: number;
  };
  reviews: [{}];
  // Add other properties as needed
}

export default function Home() {

  let [page, setPage] = useState(1);
  let [pageData, setPageData] = useState<Listing[]>([]); // Specify the type of pageData

  const { data, error } = useSWR<Listing[]>(`https://bti425-cmac.vercel.app/api/listings?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  let previous = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  let next = () => {
    setPage(page + 1);
  };

  return (
    <>
      <PageHeader text="Browse Listings : Sorted by Number of Ratings" />
      <Accordion>
        {pageData.map(listing => (
          <Accordion.Item eventKey={String(listing._id)} key={listing._id}>
            <Accordion.Header><strong>{listing.name}</strong> - {listing.address.street}</Accordion.Header>
            <Accordion.Body>
              <ListingDetails listing={listing} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <br />
      <Pagination>
        <Pagination.Prev onClick={() => previous()} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={() => next()} />
      </Pagination>
    </>
  );
}
