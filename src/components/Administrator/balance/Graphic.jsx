import { Card } from "react-bootstrap";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
    { name: 'Page A', uv: 400, pv: 300 }, 
    { name: 'Page B', uv: 300, pv: 198 }, 
    { name: 'Page C', uv: 200, pv: 100 }, 
    { name: 'Page D', uv: 300, pv: 200 }, 
    { name: 'Page E', uv: 100, pv: 200 }, 
    { name: 'Page F', uv: 500, pv: 400 }];

function Graphic() {

    return <>
        <Card className="mt-3">
            <Card.Title>
                Grafic Component
            </Card.Title>
            <Card.Text>sales balance</Card.Text>
            <Card.Body>
            <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#888400" />
                    <Line type="monotone" dataKey="pv" stroke="#0000d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="uv"  />
                    <Tooltip />
                </LineChart>
            </Card.Body>
        </Card>
    </>
}

export default Graphic;