import React, {useEffect, useState} from 'react';
import './Navigation.scss'
import {ReactComponent as BookIcon} from '../assets/book-icon.svg'
import {ReactComponent as MenuIcon} from '../assets/menu-icon.svg'
import {ReactComponent as WhatsAppIcon} from '../assets/socials/whatsapp.svg'
import {ReactComponent as TelegramIcon} from '../assets/socials/telegram.svg'
import {useDispatch} from "react-redux";
import {toggleMobile} from "../redux/deviceSlice";

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

function Navigation() {
    const [isMobile, setMobile] = useState(false);
    const dispatch = useDispatch();
    const [isMobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const resizeListener = () => {
            if(getWidth() > 575){
                setMobile(false);
                dispatch(toggleMobile(false));
            }else{
                setMobile(true);
                dispatch(toggleMobile(true));
            }
        };
        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, []);

    useEffect(() => {
        if(!isMobile && isMobileMenu){
            setMobileMenu(false);
        }
    }, [isMobile])

    return (
        <div className={'nav'}>
            {/*Mobile Nav*/}
            <div className={'bg-white shadow-md shadow-secondary'}>
                <div className={'flex flex-row justify-between items-center py-4'}>
                    {/*Branding*/}
                    <a href={'#'} className={'flex flex-row items-center ml-6'}>
                        <BookIcon/>
                        <p className={'text-2xl font-bold ml-2 font-rbMono select-none'}>Sophia<br/>Tutor</p>
                    </a>
                    {/*Menu Button*/}
                    <div className={'mr-6 p-2'} onClick={() => {setMobileMenu(!isMobileMenu)}}>
                        <MenuIcon/>
                    </div>
                </div>
                {/*Mobile Menu*/}
                { isMobileMenu?
                    <div className={'mobile-menu'}>
                        {/*Links*/}
                        <hr/>
                        <div className={'flex flex-col text-center py-4'}>
                            <a className={'mob-menu-i'} href={'#about-me'}>Обо мне</a>
                            <a className={'mob-menu-i'} href={'#my-services'}>Услуги</a>
                            <a className={'mob-menu-i'} href={'#questions'}>Вопросы</a>
                        </div>
                        <hr/>
                        {/*Socials*/}
                        <div className={'flex flex-col items-center py-4'}>
                            <div className={'flex flex-row justify-between w-[100px]'}>
                                <a href={'#'}>
                                    <WhatsAppIcon/>
                                </a>
                                <a href={'#'}>
                                    <TelegramIcon/>
                                </a>
                            </div>
                        </div>
                    </div>: null
                }
            </div>
            {/*Desktop Nav*/}
            <div>

            </div>
        </div>
    );
}

export default Navigation;