import Spinner from "react-bootstrap/Spinner";

export default function LoadingBox() {
  return (
    <div className="order-container text-light">
      <Spinner animation="border" role="status">
        {/* <span className="order-container">Loading...</span> */}
      </Spinner>
    </div>
  );
}
