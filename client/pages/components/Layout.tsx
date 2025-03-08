import { ReactNode } from 'react';
import { Container } from "react-bootstrap";
import { Metadata } from 'next';
import MainNav from "./MainNav";

interface RootLayoutProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: {
      template: '%s | Shenderey Gymnastics',
      default: 'Shenderey Gymnastics',
    },
};


export default function RootLayout(props: RootLayoutProps) {
    return (
        <>
            <MainNav /> 
            <br /> 
            <Container> 
                {props.children} 
            </Container> 
            <br /> 
        </>
    )
}