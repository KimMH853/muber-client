import React from 'react';
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='h-screen'>
            <Helmet>
                <title>LogIn|Muber</title>
            </Helmet>
            <header className='h-[70%] bg-gradient-to-r from-[#0099c480] to-[#0099c466] flex items-center justify-center' >
                <div className='w-[110px] h-[110px] bg-white flex justify-center items-center shadow-md font-medium text-2xl'>
                    Muber
                </div>
            </header>
            <footer>
                <Link to={"/phone-login"}>
                    <div className='p-5'>
                        <h2 className='text-[30px]'>Get moving with Muber</h2>
                        <div className='my-12 text-[25px] font-light'>
                            🇰🇷 +82 
                            <span className='ml-[10px] text-[#7f8c8d]'>
                                Enter your   mobile number
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to={'/social-login'}>
                <div className='border-t border-[#7f8c8d] px-[30px] py-[20px]'>
                    <span className='text-[20px] text-[#3498db]'>
                        Or connect with social
                    </span>
                </div>
                </Link>
                
            </footer>
        </div>
    );
};

export default Login;