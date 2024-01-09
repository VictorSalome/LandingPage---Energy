
import {
  Box,
  Stack,
  styled,
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  const StackColumn = styled(Stack)(() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  const WhatsAppLink = () => {
    const phoneNumber = '+5511998482108';

    const handleWhatsAppClick = () => {
      const whatsappMessage = encodeURIComponent('Olá! Estou interessado nos seus serviços.');
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
      window.open(whatsappLink, '_blank');
    }

    return (
      <Link
        href="#"
        variant="body2"
        onClick={handleWhatsAppClick}
        sx={{
          color: '#414141',
          "&:hover": {
            color: '#1c2859',
          }
        }}
      >
        <WhatsAppIcon />
      </Link>
    );
  };

  return (
    <BoxRow
      component='footer'
      sx={{
        py: 4,
        px: 2,
      }}
    >
      <StackColumn>
        <FooterTitle text={'Endereço e contato'} />
        <FooterLink text={'Av do paiol, Rua 2 '} />
        <FooterLink text={'11 99848-2108'} />
        <FooterLink text={'greletrica@outlook.com'} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'GrEletrica&Construções'} />
        <Stack
          direction='row'
          width='70px'
          maxWidth='100%'
          justifyContent='space-between'
        >
          <Link
            href="#"
            variant="body2"
            sx={{
              color: '#414141',
              "&:hover": {
                color: '#1c2859',
              }
            }}
          >
            <InstagramIcon />
          </Link>

          <WhatsAppLink />

          <Link
            href="#"
            variant="body2"
            sx={{
              color: '#414141',
              "&:hover": {
                color: '#1c2859',
              }
            }}
          >
            <FacebookIcon />
          </Link>
        </Stack>
        <Typography
          variant='caption'
          component='p'
        >
          &copy; 2024 GrEletrica&Construções Inc.
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer;
