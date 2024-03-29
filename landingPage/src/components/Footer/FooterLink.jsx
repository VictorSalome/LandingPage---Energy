import { Link } from '@mui/material';
import PropTypes from 'prop-types';

const FooterLink = ({ text }) => {
  return (
    <Link
      href="#"
      variant='p'
      component='a'
      sx={{
        fontSize: '0.9rem',
        fontWeight: '400',
        textDecoration: 'none',
        color: '#414141',
        textTransform: 'capitalize',
        "&:hover": {
          color: '#1c2859',
        }
      }}
    >
      {text}
    </Link>
  )
}

FooterLink.propTypes = {
  text: PropTypes.string.isRequired 
};

export default FooterLink;
