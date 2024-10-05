import { useFormSubmit } from '../../hooks/useFormSubmit'; // Importando o hook
import { TextField, Button } from '@mui/material';

export default function Form() {

    const { formValues, errors, handleChange, handleSubmit } = useFormSubmit();
    // const [formValues, setFormValues] = useState({
    //     fieldTitle: '',
    //     fieldArea: '',
    // });
    //   const [errors, setErrors] = useState({
    //     fieldTitle: '',
    //     fieldArea: '',
    // });
    
    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormValues({ ...formValues, [name]: value });
    
    //     // Limpa o erro se o campo tiver 3 ou mais caracteres
    //     if (value.length >= 3) {
    //       setErrors({ ...errors, [name]: '' });
    //     }
    // };
    
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    
    //     const newErrors = { fieldTitle: '', fieldArea: '' };
    
    //     // Validação dos campos
    //     Object.keys(formValues).forEach((key) => {
    //         if (!formValues[key]) {
    //         newErrors[key] = 'O campo acima é obrigatório!';
    //         } else if (formValues[key].length < 3) {
    //         newErrors[key] = 'O campo precisa ter pelo menos 3 caracteres!';
    //         }
    //     });
    
    //     setErrors(newErrors);
    
    //     // Verifica se não há erros
    //     if (!newErrors.fieldTitle && !newErrors.fieldArea) {
    //         const key = process.env.REACT_APP_TRELLO_API_KEY;
    //         const token = process.env.REACT_APP_TRELLO_TOKEN;
    //         const boardID = process.env.REACT_APP_TRELLO_ID_BOARD;
    //         const name = formValues.fieldTitle;
    //         const desc = formValues.fieldArea;

    //         const url = `https://api.trello.com/1/cards/`;

    //         const data = {
    //             idList: boardID,
    //             name: name,
    //             desc: desc,
    //             key: key,
    //             token: token,
    //         };

    //         console.log('Dados enviados:', data); // Log para debugar

    //         try {
    //             const response = await fetch(url, {
    //               method: 'POST',
    //               headers: {
    //                 'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
    //               },
    //               body: JSON.stringify(data), // Envia os dados como um JSON
    //             });
            
    //             if (!response.ok) {
    //               throw new Error('Erro na requisição: ' + response.status);
    //             }
            
    //             const result = await response.json(); // Lê a resposta em formato JSON
    //             console.log('Card criado com sucesso:', result); // Manipula os dados retornados
    //         } catch (error) {
    //             console.error('Erro ao criar o card:', error); // Tratamento de erro
    //         }

    //         console.log('Formulário enviado com sucesso:', formValues);
    //         // Limpa os campos após o envio
    //         setFormValues({ fieldTitle: '', fieldArea: '' });
    //     }
    // };

    return (
        <>
            <form onSubmit={handleSubmit}
                className='flex flex-wrap items-center content-center justify-around w-full h-auto mx-auto md:px-8 sm:m-0 sm:p-0'>
                <h3 className='font-bold text-lg text-center text-slate-700 m-4'>Preencha os campos abaixo para criar seu card:</h3>
                
                <TextField 
                    fullWidth 
                    label="Digite o título*" 
                    id="fullWidth" 
                    sx={{
                        width: '90%',
                        marginTop: 4,
                        '@media (max-width: 360px)': {
                          width: '100%',
                        }
                    }}
                    name="fieldTitle"
                    value={formValues.fieldTitle}
                    onChange={handleChange}
                    error={!!errors.fieldTitle}
                    helperText={errors.fieldTitle}
                />

                <TextField 
                    fullWidth 
                    multiline 
                    rows={3} 
                    label="Digite a descrição*" 
                    id="fullWidth" 
                    sx={{
                        width: '90%',
                        marginTop: 4,
                        '@media (max-width: 360px)': {
                          width: '100%',
                        }
                    }}
                    name="fieldArea"
                    value={formValues.fieldArea}
                    onChange={handleChange}
                    error={!!errors.fieldArea}
                    helperText={errors.fieldArea}
                />

                <p className='flex justify-start items-start w-11/12 pt-4 text-xs'>
                    * Campos de preenchimento obrigatório
                </p>

                <Button 
                    type="submit"
                    onClick={handleSubmit}
                    variant="contained" 
                    sx={{ 
                        width: 360, 
                        height: 60,
                        marginTop: 5,
                        backgroundColor: '#00e676',
                        color: '#fff',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        '&:hover': {
                        backgroundColor: '#00c853',
                        }}
                    }>
                    Criar card
                </Button>
            </form>
        </>
    )
  }