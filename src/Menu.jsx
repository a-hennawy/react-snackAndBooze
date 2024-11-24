import { Link } from 'react-router-dom'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from 'reactstrap'

import './Menu.css'

const Menu = ({ provisions, title }) => {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">{`${title} menu`}</CardTitle>
          <CardText>{`Have a look at our fun ${title}.`}</CardText>
          <ListGroup>
            {provisions.map((p) => (
              <Link to={`/${title}/${p.id}`} key={p.id}>
                <ListGroupItem style={{ color: 'white' }}>
                  {p.name}
                </ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  )
}

export default Menu
