import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { deleteFromFavoriteAction } from '../redux/actions'
const Favorites = () => {
  const navigate = useNavigate()
  const myFavorites = useSelector((state) => state.favorite.content)
  const dispatch = useDispatch()
  return (
    <>
      <Container>
        <Row className="my-4">
          <Col className="my-3">
            <h1 className="display-4 my-3">Favorites:</h1>
            <Button
              className="mb-3"
              variant="dark"
              onClick={() => {
                navigate('/')
              }}
            >
              Home
            </Button>

            <ul className="list-unstyled ">
              {myFavorites.map((data, i) => {
                return (
                  <li key={i} className="my-2">
                    <Button
                      className="me-2"
                      variant="dark"
                      onClick={() => {
                        dispatch(deleteFromFavoriteAction(i))
                      }}
                    >
                      {' '}
                      delete
                    </Button>
                    <Link to={'/' + data}>{data}</Link>
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Favorites
