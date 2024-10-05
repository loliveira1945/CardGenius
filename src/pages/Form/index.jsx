import { useFormSubmit } from '../../hooks/useFormSubmit'; // Importando o hook
import { TextField, Button } from '@mui/material';

export default function Form() {
    const { formValues, errors, handleChange, handleSubmit } = useFormSubmit();
  
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