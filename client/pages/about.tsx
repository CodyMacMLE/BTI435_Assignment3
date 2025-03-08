import React from 'react'
import { Metadata } from "next";
import Link  from "next/link";
import { Card } from "react-bootstrap";
import ListingDetails from "./components/ListingDetails";
import PageHeader from "./components/PageHeader";

export const metadata: Metadata = {
    title: "About"
};

// Define the type for Listing
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

export async function getStaticProps() {
    try {
        const res = await fetch('https://bti425-cmac.vercel.app/api/listings/7073250');
        const data: Listing = await res.json();
    
        return {
          props: { listing: data }
        };
    } catch (error) {
        console.error('Error fetching listing data:', error);
        return {
          props: { listing: null }
        };
    }
}


export default function About({ listing }: { listing: Listing }) {

    if (!listing) {
        return (
            <>
                <PageHeader text="About the Developer: Cody MacDonald" />
                <Card>
                    <Card.Body>
                        <p>Sorry, No content found.</p>
                    </Card.Body>
                </Card>
            </>
        )
    }

    return (
        <>
            <PageHeader text="About the Developer: Cody MacDonald" />
            <Card>
                <Card.Body>
                    <p>
                        I am <b>Cody MacDonald</b>, a motivated second-year Software Development student at Seneca 
                        Polytechnic with hands-on experience in database management (SQL, MongoDB), web 
                        development (JavaScript, Express.js, and Node.js), and Object Oriented Programming (C++ and 
                        Javascript). I am proud of my strong problem-solving abilities, combined with a passion for 
                        coding and innovation in software engineering. Proven leadership, management, communication, and 
                        presentation skills demonstrated within the sports and recreation industry for over 15 years. 
                        I am eager to contribute technical and soft skills to a dynamic development team.
                    </p>
                    <p>
                        Outside of software development I enjoy Cooking, Formula 1, Hockey, and Gymnastics.
                        As a coach I have developed athletes as good caring people who have confidence as well as provincial
                        champions in their sport. As an athlete I claimed multiple provincial titles as well as a Silver medal 
                        at the Canadian National Championships. My goals are to run a successful software company that cares
                        not just about profit, but wants the best for each of its employees so they can live comfortably.
                    </p>
                    <p >
                        I believe this listing in <Link href='https://bti425-cmac.vercel.app/api/listings/7073250'>Honolulu, HI, United States</Link> has the best view!
                    </p>
                    <ListingDetails listing={listing}/>

                </Card.Body>
            </Card>
        </>
    )
}