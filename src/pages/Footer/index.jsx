import logoSmall from '../../images/logo-cg-small.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Header() {
    return (
        <>
            <div className='flex flex-wrap items-center justify-around h-auto w-full bg-customPurple max-503:flex-col max-503:justify-center'>
                <div className='flex items-center flex-wrap justify-start w-2/3 h-1/2 mt-2 border-r max-503:border-none max-503:justify-center'>
                    <a href='/'>
                        <img src={logoSmall} alt='Logo Card Genius' width="166px" />
                    </a>
                    <p className='h-1/4 w-1/2 text-center text-white mt-2'>
                        Todos os direitos reservados © e desenvolvido por Lucas Alves Oliveira.
                    </p>
                </div>
                <div className='flex flex-wrap justify-center w-1/3 h-3/4 max-503:w-full pt-6'>
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
            </div>
        </>
    )
  }