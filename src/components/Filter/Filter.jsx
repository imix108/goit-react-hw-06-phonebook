import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { query } from '../../redux/sliceFilter'

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <label className={css.filterLabel} htmlFor="filter">
        <span>Find contacts by name</span>
      </label>
      <input
        className={css.filterInput}
        value={filter}
        onChange={e => dispatch(query(e.currentTarget.value))}
        type="text"
        name="filter"
        placeholder="Taras Kalina"
      />
    </>
  );
};
