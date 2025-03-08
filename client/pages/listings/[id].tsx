import { useRouter } from "next/router";
import useSWR from 'swr';
import Error from 'next/error'
import ListingDetails from "../components/ListingDetails";
import PageHeader from "../components/PageHeader";


export default function Listing() {
    const router = useRouter();
    const { title, id } = router.query;
    const { data, error, isLoading } = useSWR(`https://bti425-cmac.vercel.app/api/listings/${id}`);

    if (error) return <Error statusCode={404} />
    if (isLoading) return <>Loading...</>

    return (
        <>
            <PageHeader text={title || data.name} />
            <ListingDetails listing={data} />
        </>
    )
}