import React from 'react';

export const useStatusList = () => {
    const [selectedId, setSelectedId] = React.useState([]);

    const handleListIds = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedId(value); // Armazena o ID selecionado
    };

    const handleListCards = () => {
        const key = process.env.REACT_APP_TRELLO_API_KEY;
        const token = process.env.REACT_APP_TRELLO_TOKEN;

        // Fazendo a requisição à API do Trello
        fetch(`https://api.trello.com/1/lists/${selectedId}/cards?key=${key}&token=${token}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Para lidar com os dados retornados
        })
        .catch(error => {
            console.error('Erro ao listar os cards:', error);
        });
    };
    return {
        selectedId,
        handleListIds,
        handleListCards,
    };
};