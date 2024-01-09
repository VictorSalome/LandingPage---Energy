import { Typography } from '@mui/material';
import PropTypes from 'prop-types';


const FooterTitle = ({ text }) => {
  return (
    <Typography
      variant='h6'
      component='h6'
      sx={{
        fontWeight: '700',
        textTransform: 'capitalize',
        pb: 1,
      }}
    >
      {text}
    </Typography>
  );
};

FooterTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default FooterTitle;
