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
import styled from 'styled-components';

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
        <StyledLabel>Search for a person:</StyledLabel>
        <ComboboxInput
          placeholder="Name"
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

const StyledLabel = styled.p`
  margin: 0 0 10px 0;
`;
