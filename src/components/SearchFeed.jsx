import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { fetchAPI } from '../utils/fetchAPI';
import { Videos } from './';

const SearchFeed = () => {
  const { searchTerm } = useParams();
  console.log(searchTerm);
  // const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  // Run fetchAPI to fetch videos when app init
  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        <span>Search results for </span>
        {searchTerm}
        <span style={{ color: '#F31503' }}> videos</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
