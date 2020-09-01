import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import matchSorter, { rankings } from 'match-sorter';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';

SearchBar.propTypes = {
  searchList: PropTypes.array,
  showSelection: PropTypes.func,
};

export default function SearchBar({ searchList, showSelection }) {
  const [searchTerm, setSearchTerm] = useState('');
  const results = usePersonMatch(searchTerm);

  return (
    <div>
      <Combobox onSelect={showSelection}>
        <p>Select a meeting:</p>
        <ComboboxInput
          placeholder="Search for a person"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        {results && (
          <ComboboxPopover>
            {results.length > 0 ? (
              <ComboboxList>
                {results.slice(-1).map((result, index) => (
                  <ComboboxOption key={index} value={`${result.person}`} />
                ))}
              </ComboboxList>
            ) : (
              <span>No results found</span>
            )}
          </ComboboxPopover>
        )}
      </Combobox>
    </div>
  );

  function usePersonMatch(searchTerm) {
    return useMemo(
      () =>
        searchTerm.trim() === ''
          ? null
          : matchSorter(searchList, searchTerm, {
              keys: [{ threshold: rankings.STARTS_WITH, key: 'person' }],
            }),
      [searchTerm]
    );
  }
}
