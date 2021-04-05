import './Filter.css'

const Filter = (props) => {
  return (
    <form className='filter-form' onSubmit={(e) => props.onSubmit(e)}>
      <div>
      <input 
        className="filter-input"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        name="filter"
        placeholder="search"
        type="text"
        autoFocus
        />
        </div>
    </form>
    
  )
}

export default Filter