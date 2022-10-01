import { Card } from "react-bootstrap";

function TotalProfit() {

    return <>
        <Card className="m-3 p-3">
            <Card.Title>Total Profit</Card.Title>
            <Card.Text>last month</Card.Text>
            <Card.Text>this month</Card.Text>
        </Card>
    </>
}

export default TotalProfit;