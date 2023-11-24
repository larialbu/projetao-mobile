// Importe as bibliotecas necessárias
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button, List, ListItem, ListItemText, Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';

const ListPage = () => {
  const [checklistItems, setChecklistItems] = React.useState([
    { id: 1, text: 'At Poo', completed: false },
    { id: 2, text: 'At Mobile', completed: false },
    { id: 3, text: 'At Testes', completed: false },
    { id: 4, text: 'At GenIA', completed: false },
    { id: 5, text: 'At Mobile', completed: false },
    { id: 6, text: 'At Testes', completed: false },
    { id: 7, text: 'At GenIA', completed: false },
    { id: 8, text: 'At Mobile', completed: false },
    { id: 9, text: 'At Testes', completed: false },
  ]);

  const handleToggle = (id) => {
    setChecklistItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <Container>
      <Box mt={3} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Checklist de Atividades
        </Typography>
      </Box>
      <List>
        {checklistItems.map((item) => (
          <ListItem key={item.id} dense button onClick={() => handleToggle(item.id)}>
            <Checkbox edge="start" checked={item.completed} tabIndex={-1} disableRipple />
            <ListItemText primary={item.text} style={{ textDecoration: item.completed ? 'line-through' : 'none' }} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ListPage;
