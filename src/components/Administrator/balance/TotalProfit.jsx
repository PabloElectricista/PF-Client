import { Card } from "react-bootstrap";

function TotalProfit() {

    return <div className="container mx-2 p-3">
        <Card>
            <Card.Title  className="text-danger">Total Profit</Card.Title>
            <Card.Text className="text-primary">last month</Card.Text>
            <Card.Text className="text-primary">this month</Card.Text>
        </Card>
    </div>
}

export default TotalProfit;