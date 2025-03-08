import { Card } from "react-bootstrap"

interface PageHeaderProps {
    text: string
}

export default function PageHeader({ text }: PageHeaderProps) {
    return (
        <>
            <Card className="bg-light">
                <Card.Body>{text}</Card.Body>
            </Card>
            <br />
        </>
    )
}