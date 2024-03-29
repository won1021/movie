//별점 저장

import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


function HoverRating() {

  const [value, setValue] = useState(1.5);
  const movieid = useParams().Id;

  const onChange = (event) => {
    setValue(event.target.value);
  }

  window.localStorage.setItem(movieid, value);
  return (
    <Box>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={onChange}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
  )


  
}

export default HoverRating;


