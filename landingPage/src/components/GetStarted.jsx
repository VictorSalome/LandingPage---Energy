
import {
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/eletrica1.jpg';
import imgDetail2 from '../assets/eletrica2.jpg';


const GetStarted = () => {

    const CustomGridItem = styled(Grid)({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })

    const CustomTypography = styled(Typography)({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (

        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}
            sx={{
                py: 10,
                px: 2,

            }}
        >
            <CustomGridItem item xs={12} sm={8} md={6}
                component='section'

            >
                <Box component='article'
                    sx={{
                        px: 4,
                    }}
                >
                    <Title
                        text={
                            'Instalações Elétricas Residenciais e Prediais: Qualidade e Satisfação Garantidas'
                        }
                        textAlign={'start'}
                    />
                    <CustomTypography>
                        Profissional especializado em instalações elétricas residenciais e prediais. Comprometido com a qualidade, nosso objetivo é garantir satisfação total aos clientes. Oferecemos soluções elétricas confiáveis e adaptadas às necessidades individuais, assegurando ambientes seguros e funcionais. Seja para residências ou edifícios, nosso foco é proporcionar resultados excepcionais e tranquilidade aos nossos clientes.
                    </CustomTypography>
                </Box>

            </CustomGridItem>

            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt=""
                    style={{
                        width: '95%',
                    }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
                sx={{
                    order: { xs: 4, sm: 4, md: 3 }
                }}
            >
                <img src={imgDetail2} alt=""
                    style={{
                        width: "95%",
                    }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
                sx={{
                    order: { xs: 3, sm: 3, md: 4 }
                }}
            >
                <Box component='article'
                    sx={{
                        px: 4,
                    }}
                >
                    <Title
                        text={
                            'Energia Solar: Sustentabilidade e Eficiência Energética ao seu Alcance'

                        }
                        textAlign={'start'}
                    />
                    <CustomTypography>
                        Além de instalações elétricas de alta qualidade em residências e prédios, oferecemos também soluções em energia solar. Nossa equipe especializada realiza a instalação e manutenção de sistemas de energia solar para residências e estabelecimentos comerciais. Priorizamos a transição para uma energia mais sustentável, garantindo eficiência, economia e compromisso com o meio ambiente.
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;