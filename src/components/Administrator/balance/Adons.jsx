import { Card } from "react-bootstrap";

function Adons() {

    return <div className="container mx-2 p-2 w-30">
        <Card>
            <Card.Title  className="text-danger">Ad Earning</Card.Title>
            <Card.Text className="text-primary">last month</Card.Text>
            <Card.Text className="text-primary">this month</Card.Text>
        </Card>
    </div>
}

export default Adons;