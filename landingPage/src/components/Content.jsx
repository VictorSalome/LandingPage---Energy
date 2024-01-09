
import {
    Grid,
    Typography,
    IconButton,
    Card,
    CardContent,
} from "@mui/material";
// icons
import TungstenIcon from '@mui/icons-material/Tungsten';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Title from './Title'
import Paragraph from './Paragraph'


const Content = () => {
    return (
        <Grid container spacing={0}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                py: 10,
                px: 2,
            }}
        >
            <Grid item xs={12} sm={12} md={5}
                component='section'
            >
                <Title
                    text={
                        'O que oferecemos?'
                    }
                    textAlign={'start'}
                />

                <Typography
                    variant='h6'
                    component='h4'
                    sx={{
                        fontWeight: '400',
                        paddingTop: 1,
                    }}
                >
                    Instalação e manutenção de alto padrão
                </Typography>

                <Paragraph
                    text={
                        'Com mais de 200 serviços concluídos, temos uma sólida experiência em atender às necessidades dos nossos clientes. Oferecemos desde manutenção até instalações elétricas residenciais e prediais, sempre garantindo a satisfação do cliente.'
                    }
                    maxWidth={'75%'}
                    mx={0}
                    textAlign={'start'}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc',
                    }}>
                    <CardContent>
                        <IconButton>
                            <TungstenIcon
                                fontSize="large"
                                htmlColor="#3a5636" />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Instalações gerais
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc'
                    }}>
                    <CardContent>
                        <IconButton>
                            <ElectricBoltIcon
                                fontSize="large"
                                htmlColor="#3a5636" />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Manuteções gerais
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={2}
                sx={{
                    display: { xs: 'none', sm: 'block' },
                }}
            >
                <Card
                    square={true}
                    sx={{
                        boxShadow: 'none',
                        minHeight: 180,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                    <CardContent>
                        <ArrowCircleRightRoundedIcon
                            fontSize="large"
                            htmlColor="#3a5636" />
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc'
                    }}>
                    <CardContent>
                        <IconButton>
                            <SolarPowerIcon
                                fontSize="large"
                                htmlColor="#3a5636" />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Instalação solar
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc',
                    }}
                >
                    <CardContent>
                        <IconButton>
                            <MonetizationOnIcon
                                fontSize="large"
                                htmlColor="#3a5636" />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Rentabilidade
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc',
                    }}>
                    <CardContent>
                        <IconButton>
                            <LocalMallIcon
                                fontSize="large"
                                htmlColor="#3a5636" />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Garantia e qualidade
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Content