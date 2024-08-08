import React, { useState } from 'react';
import { Input, Button, VStack } from '@chakra-ui/react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <VStack spacing={4} align="start">
      <Input
        placeholder="Search reports..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button onClick={handleSearch} colorScheme="teal">
        Search
      </Button>
    </VStack>
  );
}

export default SearchBar;