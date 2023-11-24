import React, { useState } from 'react';
import { Container, Typography, Box, Card, CardContent, Button, LinearProgress, Divider, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Course = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoList = [
    "Introdução ao Mobile",
    "Estrutura",
    "React Native",
    "NodeJS",
    "Estilização",
    "Atividades Práticas",
    "Conclusão",
  ];

  const handleNextVideo = () => {
    if (currentVideo < videoList.length - 1) {
      setCurrentVideo(currentVideo + 1);
    }
  };

  const handlePreviousVideo = () => {
    if (currentVideo > 0) {
      setCurrentVideo(currentVideo - 1);
    }
  };

  return (
    <Container>
      <Box mt={3} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Nome do Curso
        </Typography>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Lista de Vídeos
            </Typography>
            <List>
              {videoList.map((video, index) => (
                <div key={index}>
                  <ListItem>
                    <PlayArrowIcon />
                    <ListItemText primary={index === currentVideo ? <strong>{video}</strong> : video} />
                  </ListItem>
                  {index !== videoList.length - 1 && <Divider />}
                </div>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
      <Box mt={3}>
        <LinearProgress
          variant="determinate"
          value={(currentVideo / (videoList.length - 1)) * 100}
        />
      </Box>
      <Box mt={3} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handlePreviousVideo}
          disabled={currentVideo === 0}
        >
          Vídeo Anterior
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNextVideo}
          disabled={currentVideo === videoList.length - 1}
        >
          Próximo Vídeo
        </Button>
      </Box>
      <Box mt={3} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/quiz"
        >
          Ir para o Quiz
        </Button>
        <Button
                component={Link}
                to="/list"
                variant="contained"
                color="primary"
                style={{ marginLeft: '10px' }} 
              >
                Listas
              </Button>
      </Box>
    </Container>
  );
};

export default Course;
