import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const { query } = form.elements;

    onSubmit(query.value);
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchBtn}>
          <span className={styles.SearchLabel}>Search</span>
        </button>

        <input
          name="query"
          className={styles.SearchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images..."
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
