import React from 'react'
import Lottie from 'react-lottie';
import * as animation404 from './../../assets/animation/animation_404.json'
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

const Page404 = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation404,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className='h-screen flex justify-center items-center flex-col'>
            <Lottie options={defaultOptions}
                height={400}
                width={400}
            />
            <NavLink to="/">
                <Button type="primary" className='bg-blue-700 hover:bg-blue-800'>
                    Back To Home
                </Button>
            </NavLink>
        </div>
    )
}

export default Page404