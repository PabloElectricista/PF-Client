import { Card } from "react-bootstrap";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function Graphic({orders}) {

    return <div className="p-2 w-200">
        <Card>
            <Card.Title  className="text-danger">
                Grafic Component
            </Card.Title>
            <Card.Text>sales balance</Card.Text>
            <Card.Body>
            <LineChart width={600} height={300} data={orders}>
                    <Line type="monotone" dataKey="totalamount" stroke="#0033cc" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="date" />
                    <YAxis dataKey="uv"  />
                    <Tooltip />
                </LineChart>
            </Card.Body>
        </Card>
    </div>
}

export default Graphic;