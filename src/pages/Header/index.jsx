import logoBig from '../../images/logo-cg-big.png'
import memberHeader from '../../images/member-cg.png'
import { Avatar, CircularProgress } from '@mui/material';

export default function Header() {
    return (
        <>
            <div className='flex flex-wrap items-center justify-between shadow-md w-full mx-auto px-4 md:px-8 sm:m-0 sm:p-0'>
                <a href='/'>    
                    <img src={logoBig} alt='Logo Card Genius' width="150px" />
                </a>

                {memberHeader ? (
                    <a href='https://trello.com/u/lucasalvesoliveira1' target='_blank' rel="noreferrer">
                        <Avatar
                            src={memberHeader}
                            alt="Avatar"
                            sx={{ width: 90, height: 90 }}
                        />
                    </a>
                ) : (
                    <CircularProgress color="inherit" />
                )}
            </div>
        </>
    )
  }