export const Toolbar = (props) => {
  const { filters } = props;
  const { selected } = props;
  const { onSelectFilter } = props;

  return (
    <>
        { filters.map(filter => filter === selected ?
          <button key={filter} className="selected-filter">{filter}</button> :
          <button key={filter} onClick={ onSelectFilter }>{filter}</button>) }
    </>
  )
}
