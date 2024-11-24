import Menu from './Menu'
import './FoodMenu.css'

function DrinkMenu({ drinks }) {
  return (
    <section className="col-md-4">
      <Menu provisions={drinks} title={'Drinks'} />
    </section>
  )
}

export default DrinkMenu
