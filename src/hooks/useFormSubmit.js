import { useState } from 'react';

export const useFormSubmit = () => {
    const [formValues, setFormValues] = useState({
        fieldTitle: '',
        fieldArea: '',
    });
    const [errors, setErrors] = useState({
        fieldTitle: '',
        fieldArea: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });

        // Limpa o erro se o campo tiver 3 ou mais caracteres
        if (value.length >= 3) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newErrors = { fieldTitle: '', fieldArea: '' };

        // Validação dos campos
        Object.keys(formValues).forEach((key) => {
            if (!formValues[key]) {
                newErrors[key] = 'O campo acima é obrigatório!';
            } else if (formValues[key].length < 3) {
                newErrors[key] = 'O campo precisa ter pelo menos 3 caracteres!';
            }
        });

        setErrors(newErrors);

        // Verifica se não há erros
        if (!newErrors.fieldTitle && !newErrors.fieldArea) {
            const key = process.env.REACT_APP_TRELLO_API_KEY;
            const token = process.env.REACT_APP_TRELLO_TOKEN;
            const boardID = process.env.REACT_APP_TRELLO_ID_BOARD;
            const name = formValues.fieldTitle;
            const desc = formValues.fieldArea;

            const url = `https://api.trello.com/1/cards/`;

            const data = {
                idList: boardID,
                name: name,
                desc: desc,
                key: key,
                token: token,
            };

            console.log('Dados enviados:', data); // Log para debugar

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
                    },
                    body: JSON.stringify(data), // Envia os dados como um JSON
                });

                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.status);
                }

                const result = await response.json(); // Lê a resposta em formato JSON
                console.log('Card criado com sucesso:', result); // Manipula os dados retornados
            } catch (error) {
                console.error('Erro ao criar o card:', error); // Tratamento de erro
            }

            console.log('Formulário enviado com sucesso:', formValues);
            // Limpa os campos após o envio
            setFormValues({ fieldTitle: '', fieldArea: '' });
        }
    };
    return {
        formValues,
        errors,
        handleChange,
        handleSubmit,
    };
};