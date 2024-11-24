import AddItemForm from './AddItemForm'
import SnackOrBoozeApi from './Api'

const AddItemPage = () => {
  const addToDb = (route, obj) => {
    SnackOrBoozeApi.postItem(route, obj)
  }

  return (
    <div>
      <AddItemForm addToDb={addToDb} />
    </div>
  )
}

export default AddItemPage
