import { Card } from "react-bootstrap";

function Adons() {

    return <>
        <Card className="m-3 p-3">
            <Card.Title  className="text-danger">Ad Earning</Card.Title>
            <Card.Text className="text-primary">last month</Card.Text>
            <Card.Text className="text-primary">this month</Card.Text>
        </Card>
    </>
}

export default Adons;