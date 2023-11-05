import React, { useState } from 'react';
import { Container, Typography, Box, Card, CardContent, Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';

const Quiz = () => {
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const calculateScore = () => {
    const correctAnswers = {
      q1: 'a', // Resposta correta para a pergunta 1
      q2: 'b', // Resposta correta para a pergunta 2
      q3: 'b', // Resposta correta para a pergunta 3
    };

    let userScore = 0;

    for (const question in correctAnswers) {
      if (answers[question] === correctAnswers[question]) {
        userScore += 1;
      }
    }

    setScore(userScore);
    setShowResults(true);
  };

  return (
    <Container>
      <Box mt={3} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Quiz sobre React
        </Typography>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <form>
              <FormControl component="fieldset">
                <FormLabel component="legend">Pergunta 1: O que é React?</FormLabel>
                <RadioGroup
                  aria-label="q1"
                  name="q1"
                  value={answers.q1}
                  onChange={(e) => handleAnswerChange('q1', e.target.value)}
                >
                  <FormControlLabel value="a" control={<Radio />} label="Biblioteca JavaScript" />
                  <FormControlLabel value="b" control={<Radio />} label="Framework JavaScript" />
                  <FormControlLabel value="c" control={<Radio />} label="Linguagem de programação" />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset">
                <FormLabel component="legend">Pergunta 2: O que é JSX?</FormLabel>
                <RadioGroup
                  aria-label="q2"
                  name="q2"
                  value={answers.q2}
                  onChange={(e) => handleAnswerChange('q2', e.target.value)}
                >
                  <FormControlLabel value="a" control={<Radio />} label="JavaScript puro" />
                  <FormControlLabel value="b" control={<Radio />} label="Extensão de JavaScript" />
                  <FormControlLabel value="c" control={<Radio />} label="Framework JavaScript" />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset">
                <FormLabel component="legend">Pergunta 3: Quem mantém o React?</FormLabel>
                <RadioGroup
                  aria-label="q3"
                  name="q3"
                  value={answers.q3}
                  onChange={(e) => handleAnswerChange('q3', e.target.value)}
                >
                  <FormControlLabel value="a" control={<Radio />} label="Google" />
                  <FormControlLabel value="b" control={<Radio />} label="Facebook" />
                  <FormControlLabel value="c" control={<Radio />} label="Microsoft" />
                </RadioGroup>
              </FormControl>
            </form>

            <Box mt={3} textAlign="center">
              <Button
                variant="contained"
                color="primary"
                onClick={calculateScore}
              >
                Enviar Respostas
              </Button>
            </Box>
            
            {showResults && (
              <Box mt={3} textAlign="center">
                <Typography variant="h6" gutterBottom>
                  Você acertou {score} de 3 perguntas.
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Quiz;
