import { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getJobsActionCreator } from '../redux/actions'
import { useSelector } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoading = useSelector((state) => state.jobs.isLoading)
  const jobs = useSelector((state) => state.jobs.jobs.data)
  const spinnerOn = useSelector((state) => state.jobs.spinnerOn)
  const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    //   try {
    //     const response = await fetch(baseEndpoint + query + '&limit=20')
    //     if (response.ok) {
    //       const { data } = await response.json()
    //       setJobs(data)
    //     } else {
    //       alert('Error fetching results')
    //     }
    //   } catch (error) {
    //     console.log(error)
    //   }
    dispatch(getJobsActionCreator(baseEndpoint, query))
  }
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
          <Button
            variant="dark"
            onClick={() => {
              navigate('/Favorites')
            }}
          >
            Your Favorites
          </Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {spinnerOn && (
            <div className="d-flex justify-content-center align-items-center my-5">
              <Spinner animation="border" variant="primary"></Spinner>
            </div>
          )}
          {!isLoading &&
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
