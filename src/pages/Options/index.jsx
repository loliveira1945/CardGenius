import * as React from 'react';
import { options } from '../../constants/options'; //Importando lista de objetos dos status
import { useStatusList } from '../../hooks/useStatusList'; // Importando o hook
import { Button, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
//#FFE74C

//Configurações da estilização do Select (Material UI)
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Header() {

  const { selectedId, handleListIds, handleListCards } = useStatusList(); // Usando o hook da lista

  const navigate = useNavigate();
  const handleClick = (evento) => {
    const route = evento.currentTarget.getAttribute('data-route-button');
    if (route) {
      navigate(route);
    }
  };

    return (
      <>
        <div className='flex flex-wrap items-center content-center justify-around w-full h-auto mx-auto md:px-8 sm:m-0 sm:p-0'>
          <h3 className='font-bold text-lg text-center text-slate-700 m-4'>Selecione abaixo o status dos cards que deseja visualizar:</h3>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={selectedId}
            onChange={handleListIds}
            MenuProps={MenuProps}
            sx={{
              width: '90%',
              marginTop: 4,
              '@media (max-width: 360px)': {
                width: '100%',
              }
            }}
          >
            <MenuItem value="" disabled>
              Escolha um status para ver os cards
            </MenuItem>
            {options.map((option) => (
              <MenuItem
                key={option.id}
                value={option.id}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <div className='flex flex-wrap items-center justify-around w-full h-auto mt-0 mx-auto md:px-8 sm:m-0 sm:p-0'>
            <Button 
                color="success"
                variant="contained" 
                sx={{ 
                    width: 360, 
                    height: 60, 
                    marginTop: 5,
                    backgroundColor: '#FF5964',
                    color: '#fff',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#D64C55',
                    }}
                }
                onClick={handleListCards}>
                Listar cards
            </Button>
            <Button 
                data-route-button="/formCard" //passando a rota, ja que nao tenho props
                onClick={handleClick}
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
          </div>
        </div>
      </>
    )
  }