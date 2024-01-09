
// mui
import {
    Typography,
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title'
import Paragraph from './Paragraph'
import { useState } from "react";


const Gallery = () => {

    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: 'https://images.pexels.com/photos/17842843/pexels-photo-17842843.jpeg?cs=srgb&dl=pexels-fatih-yurtman-17842843.jpg&fm=jpg&_gl=1*7pgaxg*_ga*Nzk5MDE0ODAyLjE3MDQ4MDg2OTM.*_ga_8JE65Q40S6*MTcwNDgwODY5My4xLjEuMTcwNDgwODgxOC4wLjAuMA..'
        },
        {
            alt: 'image2',
            url: 'https://images.pexels.com/photos/4254160/pexels-photo-4254160.jpeg?cs=srgb&dl=pexels-gustavo-fring-4254160.jpg&fm=jpg&_gl=1*1svzgu1*_ga*Nzk5MDE0ODAyLjE3MDQ4MDg2OTM.*_ga_8JE65Q40S6*MTcwNDgwODY5My4xLjEuMTcwNDgwODkwNC4wLjAuMA..'
        },
        {
            alt: "image3",
            url: 'https://images.pexels.com/photos/8853534/pexels-photo-8853534.jpeg?cs=srgb&dl=pexels-los-muertos-crew-8853534.jpg&fm=jpg&_gl=1*ho16wf*_ga*Nzk5MDE0ODAyLjE3MDQ4MDg2OTM.*_ga_8JE65Q40S6*MTcwNDgxMTM2MS4yLjEuMTcwNDgxMTM2Mi4wLjAuMA..'
        },
        {
            alt: "image4",
            url: 'https://images.pexels.com/photos/17924298/pexels-photo-17924298.jpeg?cs=srgb&dl=pexels-fatih-yurtman-17924298.jpg&fm=jpg&_gl=1*1r3c8dz*_ga*Nzk5MDE0ODAyLjE3MDQ4MDg2OTM.*_ga_8JE65Q40S6*MTcwNDgxMTM2MS4yLjEuMTcwNDgxMTQyMy4wLjAuMA..'
        },
        {
            alt: "image5",
            url: 'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?cs=srgb&dl=pexels-onics-energy-14319099.jpg&fm=jpg&_gl=1*xb8vnj*_ga*Nzk5MDE0ODAyLjE3MDQ4MDg2OTM.*_ga_8JE65Q40S6*MTcwNDgxMTM2MS4yLjEuMTcwNDgxMTQ2OC4wLjAuMA..'
        },
    ];

    const renderSlides = imageData.map((image) => (
        <div key={image.alt}>
            <img src={image.url} alt={image.alt} />
        </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{
                py: 8,
                px: 2,
                display: { xs: 'flex' },
            }}
        >
            <Box
                component='section'
                sx={{
                    paddingBottom: 3,
                }}
            >
                <Title
                    text={
                        'Trabalhos realizados'
                    }
                    textAlign={'center'}
                />
                <Typography
                    variant='h5'
                    component='h4'
                    align='center'
                    sx={{
                        paddingTop: 1,
                    }}
                >
                    Galeria de projetos
                </Typography>
                <Paragraph text={
                    'Temos mais de 200 avaliações e nossos clientes confiam em nossos serviços. Se você estiver interessado, entre em contato conosco'
                }
                    maxWidth={'sm'}
                    mx={'auto'}
                    textAlign={'center'}
                />
            </Box>

            <Box sx={{
                maxWidth: 700,
                width: '100%',
            }}>
                <Carousel
                    centerSlidePercentage={40}
                    thumbWidth={180}
                    dynamicHeight={false}
                    centerMode={false}
                    showArrows={false}
                    autoPlay={false}
                    infiniteLoop={true}
                    selectedItem={imageData[currentIndex]}
                    onChange={handleChange}
                    className="carousel-container"
                >
                    {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery