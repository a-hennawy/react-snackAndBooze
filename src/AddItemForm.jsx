import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col,
} from 'reactstrap'

const AddItemForm = ({ addToDb }) => {
  const initState = {
    name: '',
    description: '',
    recipe: '',
    serve: '',
  }

  const initRoute = {
    route: '',
  }
  const [contentData, setContentData] = useState(initState)
  const [categoryData, setCategoryData] = useState(initRoute)
  const navigate = useNavigate()

  const handleContent = (evt) => {
    const { name, value } = evt.target
    setContentData((data) => ({ ...data, [name]: value }))
  }
  const handleCategory = (evt) => {
    const { name, value } = evt.target
    setCategoryData((data) => ({ ...data, [name]: value }))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('Added,', contentData)
    // console.log(Object.keys(initState).length)
    navigate('/')
    addToDb(categoryData.route, {
      ...contentData,
      id: contentData.name.toLowerCase(),
    })
    setContentData(initState)
    setCategoryData(initRoute)
  }

  const inputList = Object.keys(initState).map((k) => (
    <>
      <FormGroup>
        <Label htmlFor={k} style={{ margin: '10px', color: 'black' }}>
          {k}
        </Label>
        <Input
          type="text"
          id={k}
          name={k}
          placeholder={`Insert ${k} here`}
          value={categoryData[k]}
          onChange={handleContent}
        />
      </FormGroup>
    </>
  ))

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3">
          <label
            htmlFor="route"
            style={{ marginRight: '10px', color: 'black' }}
          >
            Choose an option:
          </label>

          <select
            id="route"
            name="route"
            value={categoryData.route}
            onChange={handleCategory}
            style={{ padding: '5px' }}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="/snacks">Snacks</option>
            <option value="/drinks">Drinks</option>
          </select>

          {inputList}
          <Button color="primary">Submit</Button>
        </FormGroup>
      </Form>
    </div>
  )
}

export default AddItemForm
