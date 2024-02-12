import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'

const Job = ({ data }) => {
  const dispatch = useDispatch()
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9} className="d-flex justify-content-between ">
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <Button
          variant="dark"
          onClick={() => {
            dispatch({ type: 'ADD_TO_FAVORITES', payload: data.company_name })
          }}
        >
          Add to Favorites
        </Button>
      </Col>
    </Row>
  )
}

export default Job
