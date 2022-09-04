import React, {useEffect, useState} from 'react';
import './Navigation.scss'
import {ReactComponent as BookIcon} from '../assets/book-icon.svg'
import {ReactComponent as MenuIcon} from '../assets/menu-icon.svg'
import {ReactComponent as WhatsAppIcon} from '../assets/socials/whatsapp.svg'
import {ReactComponent as TelegramIcon} from '../assets/socials/telegram.svg'
import {useDispatch} from "react-redux";
import {toggleMobile} from "../redux/deviceSlice";
import {CSSTransition} from "react-transition-group";

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

function Navigation() {
    const [isMobile, setMobile] = useState(false);
    const dispatch = useDispatch();
    const [isMobileMenu, setMobileMenu] = useState(false);

    const closeMenu = () => {
        setMobileMenu(false);
    }
    const navClass = isMobile? 'fixed top-0': 'absolute top-[-150px]';
    useEffect(() => {
        const resizeListener = () => {
            if(getWidth() > 859){
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
        <div className={'nav ' + navClass}>
            {isMobile?
                <div className={'bg-white shadow-md shadow-secondary'}>
                    {/*Mobile Nav*/}
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
                    <CSSTransition in={isMobileMenu}
                                   timeout={300}
                                   classNames="item"
                                   unmountOnExit>
                        <div className={'mobile-menu'}>
                            {/*Links*/}
                            <hr/>
                            <div className={'flex flex-col text-center py-4'}>
                                <a onClick={closeMenu} className={'mob-menu-i'} href={'#about-me'}>Обо мне</a>
                                <a onClick={closeMenu} className={'mob-menu-i'} href={'#my-services'}>Услуги</a>
                                <a onClick={closeMenu} className={'mob-menu-i'} href={'#questions'}>Вопросы</a>
                                <a onClick={closeMenu} className={'mob-menu-i-special'} href={'#signup-form'}>Записаться</a>
                            </div>
                            <hr/>
                            {/*Socials*/}
                            <div className={'flex flex-col items-center py-4'}>
                                <div className={'flex flex-row justify-between w-[100px]'}>
                                    <a className={'social-icon'} href={'https://api.whatsapp.com/send/?phone=79269024361'}>
                                        <WhatsAppIcon/>
                                    </a>
                                    <a className={'social-icon'} href={'https://t.me/sofiyanosonya'}>
                                        <TelegramIcon/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </div>:
                <div className={'flex flex-row justify-between mx-auto max-w-[92%] lg:max-w-[78%]'}>
                    {/*Desktop Nav*/}
                    <div className={'flex flex-row justify-between items-center py-4'}>
                        {/*Branding*/}
                        <a href={'#'} className={'flex flex-row items-center ml-6'}>
                            <BookIcon/>
                            <p className={'text-2xl font-bold ml-2 font-rbMono select-none'}>Sophia<br/>Tutor</p>
                        </a>
                    </div>
                    <div className={'flex flex-row'}>
                        <div className={'flex flex-row text-center py-4'}>
                            <a className={'desk-menu-i'} href={'#about-me'}>Обо мне</a>
                            <a className={'desk-menu-i'} href={'#my-services'}>Услуги</a>
                            <a className={'desk-menu-i'} href={'#questions'}>Вопросы</a>
                            <a className={'desk-menu-i-special'} href={'#signup-form'}>Записаться</a>
                        </div>
                        <div className={'flex flex-col items-center mt-2 py-4'}>
                            <div className={'flex flex-row justify-between'}>
                                <a className={'social-icon mr-4'} href={'https://api.whatsapp.com/send/?phone=79269024361'}>
                                    <WhatsAppIcon/>
                                </a>
                                <a className={'social-icon'} href={'https://t.me/sofiyanosonya'}>
                                    <TelegramIcon/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Navigation;