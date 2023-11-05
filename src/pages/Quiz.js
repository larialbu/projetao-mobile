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

  const isAnswerCorrect = (question, answer) => {
    return answers[question] === answer;
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
                  <FormControlLabel
                    value="a"
                    control={<Radio />}
                    label={
                      <span
                        style={{
                          color: isAnswerCorrect('q1', 'a') ? 'green' : 'red',
                        }}
                      >
                        Biblioteca JavaScript
                      </span>
                    }
                  />
                  <FormControlLabel
                    value="b"
                    control={<Radio />}
                    label={
                      <span
                        style={{
                          color: isAnswerCorrect('q1', 'b') ? 'green' : 'red',
                        }}
                      >
                        Framework JavaScript
                      </span>
                    }
                  />
                  <FormControlLabel
                    value="c"
                    control={<Radio />}
                    label={
                      <span
                        style={{
                          color: isAnswerCorrect('q1', 'c') ? 'green' : 'red',
                        }}
                      >
                        Linguagem de programação
                      </span>
                    }
                  />
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
                  <FormControlLabel
                    value="a"
                    control={<Radio />}
                    label={
                      <span
                        style={{
                          color: isAnswerCorrect('q2', 'a') ? 'green' : 'red',
                        }}
                      >
                        JavaScript puro
                      </span>
                    }
                  />
                  <FormControlLabel
                    value="b"
                    control={<Radio />}
                    label={
                      <span
                        style={{
                          color: isAnswerCorrect('q2', 'b') ? 'green' : 'red',
                        }}
                      >
                        Extensão de JavaScript
                      </span>
                    }
                  />
                  <FormControlLabel
                    value="c"
                    control={<Radio />}
                    label={
                      <span
                        style={{
                          color: isAnswerCorrect('q2', 'c') ? 'green' : 'red',
                        }}
                      >
                        Framework JavaScript
                      </span>
                    }
                  />
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
                  <FormControlLabel
                    value="a"
                    control={<Radio />}
                    label={
                      <span
                        style={{
                          color: isAnswerCorrect('q3', 'a') ? 'green' : 'red',
                        }}
                      >
                        Google
                      </span>
                    }
                  />
                  <FormControlLabel
                    value="b"
                    control={<Radio />}
                    label={
                      <span
                        style={{
                          color: isAnswerCorrect('q3', 'b') ? 'green' : 'red',
                        }}
                      >
                        Facebook
                      </span>
                    }
                  />
                  <FormControlLabel
                    value="c"
                    control={<Radio />}
                    label={
                      <span
                        style={{
                          color: isAnswerCorrect('q3', 'c') ? 'green' : 'red',
                        }}
                      >
                        Microsoft
                      </span>
                    }
                  />
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
                  Pontuação: {score} de 3
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
