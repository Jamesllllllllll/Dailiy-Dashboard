import * as React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const StyledCard = styled((props) => <Card {...props} />)(({ theme }) => ({
  position: 'relative',
  borderRadius: 25,
  width: '100%',
  padding: '2rem',
  marginBottom: '1rem',
  boxShadow: '0 15px 25px rgba(0,0,0,.15); 0 5px 10px rgba(0,0,0,.05)',
}));

const FeatureCard = (props) => {
  const { content } = props;

  return <StyledCard>{content}</StyledCard>;
};

export default FeatureCard;