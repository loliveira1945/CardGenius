import logoSmall from '../../images/logo-cg-small.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Header() {
    return (
        <>
            <div className='flex flex-wrap items-center justify-between h-auto w-full bg-customPurple'>
                <div className='flex items-center justify-end w-1/2 h-3/4 mt-2 border-r'>
                    <a href='/'>
                        <img src={logoSmall} alt='Logo Card Genius' width="166px" />
                    </a>
                </div>
                <div className='flex flex-wrap justify-start w-1/2 h-3/4'>
                    <div className='flex flex-wrap items-center'>
                        <a href='https://www.instagram.com/oliveira.vargass' target='_blank' rel="noreferrer">
                            <InstagramIcon className='m-4 text-white' />
                        </a>
                        <a href='https://www.linkedin.com/in/lucasalvesoliveira2042' target='_blank' rel="noreferrer">
                            <LinkedInIcon className='m-4 text-white' />
                        </a>
                        <a href='https://github.com/loliveira1945' target='_blank' rel="noreferrer">
                            <GitHubIcon className='m-4 text-white' />
                        </a>
                    </div>
                </div>
                <p className='h-1/4 w-full text-center text-white mt-2'>
                    Todos os direitos reservados © e desenvolvido por Lucas Alves Oliveira.
                </p>
            </div>
        </>
    )
  }