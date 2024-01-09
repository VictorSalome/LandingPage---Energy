
import {
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack
            component='section'
            direction="column"
            justifyContent='center'
            alignItems='center'
            sx={{
                py: 10,
                mx: 6,
            }}
        >
            <Title
                text={
                    'Nos contate para saber mais'
                }
                textAlign={'center'}
            />
            <Paragraph
                text={
                    'Estamos comprometidos em oferecer serviços profissionais e agradáveis em instalações elétricas e energia solar para sua residência. Se você procura melhorar ou atualizar o sistema elétrico de sua casa, ou busca adotar energia solar para um ambiente mais sustentável, clique no botão abaixo para descobrir mais sobre nossos serviços'
                }
                maxWidth={'sm'}
                mx={0}
                textAlign={'center'}
            />
            <Button component={Link}
                to={'/contact'}
                variant="contained"
                type="submit"
                size="medium"
                sx={{
                    fontSize: '0.9rem',
                    textTransform: 'capitalize',
                    py: 2,
                    px: 4,
                    mt: 3,
                    mb: 2,
                    borderRadius: 0,
                    backgroundColor: '#14192d',
                    "&:hover": {
                        backgroundColor: '#1e2a5a',
                    }
                }}
            >
                Entrar em contato
            </Button>

        </Stack>
    )
}

export default GetInTouch;