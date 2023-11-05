import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box mt={3} textAlign="center">
            <Typography variant="h4" gutterBottom>
              Bem-vindo, Aluno!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Curso 1
              </Typography>
              <Button
                component={Link}
                to="/course"
                variant="contained"
                color="primary"
              >
                Ir para Curso 1
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Curso 2
              </Typography>
              <Button
                component={Link}
                to="/course"
                variant="contained"
                color="primary"
              >
                Ir para Curso 2
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Curso 3
              </Typography>
              <Button
                component={Link}
                to="/course"
                variant="contained"
                color="primary"
              >
                Ir para Curso 3
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Curso 4
              </Typography>
              <Button
                component={Link}
                to="/course"
                variant="contained"
                color="primary"
              >
                Ir para Curso 4
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Curso 5
              </Typography>
              <Button
                component={Link}
                to="/course"
                variant="contained"
                color="primary"
              >
                Ir para Curso 5
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Curso 6
              </Typography>
              <Button
                component={Link}
                to="/course"
                variant="contained"
                color="primary"
              >
                Ir para Curso 6
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Curso 7
              </Typography>
              <Button
                component={Link}
                to="/course"
                variant="contained"
                color="primary"
              >
                Ir para Curso 7
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Curso 8
              </Typography>
              <Button
                component={Link}
                to="/course"
                variant="contained"
                color="primary"
              >
                Ir para Curso 8
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Curso 9
              </Typography>
              <Button
                component={Link}
                to="/course"
                variant="contained"
                color="primary"
              >
                Ir para Curso 9
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Curso 10
              </Typography>
              <Button
                component={Link}
                to="/course"
                variant="contained"
                color="primary"
              >
                Ir para Curso 10
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Curso 11
              </Typography>
              <Button
                component={Link}
                to="/course"
                variant="contained"
                color="primary"
              >
                Ir para Curso 11
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Curso 12
              </Typography>
              <Button
                component={Link}
                to="/course"
                variant="contained"
                color="primary"
              >
                Ir para Curso 12
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box mt={3} textAlign="center">
      </Box>
    </Container>
  );
};

export default Home;
