import { Container, Row, Col } from 'react-bootstrap'

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

export default function ListingDetails({ listing }: { listing: Listing }) {
    return (
        <Container>
            <Row>
                <Col lg>
                <img 
                    onError={(event) => { 
                    const target = event.target as HTMLImageElement; // Cast to HTMLImageElement
                    target.onerror = null; // Remove the event handler to prevent infinite loop 
                    target.src = 
                        "https://placehold.co/600x400?text=Photo+Not+Available"; 
                    }} 
                    className="img-fluid w-100" 
                    src={listing.images.picture_url} 
                    alt="Listing Image" 
                /> 
                <br /> 
                <br />
                </Col>
                <Col lg>
                    {listing.summary} 
                    <br />
                    <br /> 
                    <strong>Price:</strong> ${Number(listing.price).toFixed(2)}<br /> 
                    <strong>Room:</strong> {listing.room_type}<br /> 
                    <strong>Bed:</strong> {listing.bed_type} ({listing.beds})<br /><br /> 
                    <strong>Rating:</strong> {listing.review_scores.review_scores_rating}/100 ({listing.reviews ? listing.reviews.length : 0})<br /> 
                    <br /> 
                    <br />
                </Col>
            </Row>
        </Container>
    )
}