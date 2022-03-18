import Card from "react-bootstrap/Card";
import "./Catalogue.css";
import { Link } from "react-router-dom";

function CardView(props) {
  const { image, title, description, course } = props;
  const link = "/course/" + course;
  const to = {
    pathname: link,
  };

  return (
    <Link to={to}>
      <div className="Card">
        <Card style={{ width: "24rem" }}>
          <Card.Img
            variant="top"
            style={{ width: "24rem", border: "1px solid rgba(0, 0, 0, 1)" }}
            src={image}
          />
          <Card.Body>
            <Card.Title>
              <p className="CardTitle">{title}</p>
            </Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
}

export default CardView;
