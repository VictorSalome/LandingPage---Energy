
// import {
//     Box,
//     Button,
//     Stack,
//     TextField
// } from '@mui/material'
// import Title from './Title'
// import Paragraph from './Paragraph'

// const Details = () => {

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const data = new FormData(event.currentTarget);

//         console.log({
//             email: data.get('email'),
//             phone: data.get('phone'),

//         });
//     }


//     return (
//         <Stack
//             component='section'
//             direction="column"
//             justifyContent='center'
//             alignItems='center'
//             sx={{
//                 py: 10,
//                 px: 2,
//             }}
//         >
//             <Title
//                 text={
//                     'Interessado em nosso servicos?'
//                 }
//                 textAlign={'center'}
//             />
//             <Paragraph
//                 text={
//                     'Buscando melhorias na energia elétrica ou transição para solar? Entre em contato para soluções personalizadas e torne sua casa mais eficiente e sustentável conosco.'
//                 }
//                 maxWidth={'sm'}
//                 mx={0}
//                 textAlign={'center'}
//             />

//             <Box
//                 component="form"
//                 noValidate
//                 onSubmit={handleSubmit}
//                 sx={{
//                     mt: 1,
//                     py: 2
//                 }}>
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="email"
//                     label="Endereço de e-mail"
//                     name="email"
//                     autoComplete="email"
//                     autoFocus
//                 />
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     name="phone"
//                     label="Numero de telefone"
//                     type="phone"
//                     id="phone"
//                     autoComplete="current-phone"
//                 />
//                 <Button
//                     variant="contained"
//                     fullWidth
//                     type="submit"
//                     size="medium"
//                     sx={{
//                         fontSize: '0.9rem',
//                         textTransform: 'capitalize',
//                         py: 2,
//                         mt: 3,
//                         mb: 2,
//                         borderRadius: 0,
//                         backgroundColor: '#14192d',
//                         "&:hover": {
//                             backgroundColor: '#1e2a5a',
//                         }
//                     }}
//                 >
//                     Enviar
//                 </Button>
//             </Box>
//         </Stack>
//     )
// }

// export default Details;


import {
    Box,
    Stack,
} from '@mui/material';
import Title from './Title';
import Paragraph from './Paragraph';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Details = () => {

    return (
        <Stack
            component='section'
            direction="column"
            justifyContent='center'
            alignItems='center'
            sx={{
                py: 10,
                px: 2,
            }}
        >
            <Title
                text={
                    'Interessado em nosso serviços?'
                }
                textAlign={'center'}
            />
            <Paragraph
                text={
                    'Buscando melhorias na energia elétrica ou transição para solar? Entre em contato para soluções personalizadas e torne sua casa mais eficiente e sustentável conosco.'
                }
                maxWidth={'sm'}
                mx={0}
                textAlign={'center'}
            />

            <Box>
                <a
                    href="https://wa.me/5511998482108"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        textDecoration: 'none',
                        color: '#000', // Cor do texto do link
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        border: '1px solid #14192d',
                        borderRadius: '4px',
                        padding: '10px 20px',
                        backgroundColor: '#25D366', // Cor de fundo do link
                        marginTop: '1.5rem',
                        marginBottom: '18rem',

                    }}
                >
                    <WhatsAppIcon /> {/* Ícone do WhatsApp */}
                    Entrar em contato pelo WhatsApp
                </a>
            </Box>
        </Stack>
    )
}

export default Details;
