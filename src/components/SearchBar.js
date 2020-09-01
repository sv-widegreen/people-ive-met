import React, { useState, useMemo } from 'react';
import matchSorter, { rankings } from 'match-sorter';
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

export default function SearchBar({ searchList }) {
  const [searchTerm, setSearchTerm] = useState('');
  const results = usePersonMatch(searchTerm);

  return (
    <div>
      <Combobox>
        <ComboboxInput
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        {results && (
          <ComboboxPopover>
            {results.length > 0 ? (
              <ComboboxList>
                {results.slice(0, 10).map((result, index) => (
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
    // const throttledTerm = useThrottle(searchTerm, 100);
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
