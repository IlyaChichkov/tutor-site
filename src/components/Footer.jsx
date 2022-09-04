import React from 'react';
import {ReactComponent as WhatsAppIcon} from "../assets/socials/whatsapp.svg";
import {ReactComponent as TelegramIcon} from "../assets/socials/telegram.svg";

function Footer(props) {
    return (
        <div className={'max-w-[92%] mx-auto mt-12'}>
            <h4 className={'font-bold text-lg'}>Обратная связь</h4>
            <div className={'flex flex-col py-4'}>
                <a className={'social-icon'} href={'https://api.whatsapp.com/send/?phone=79269024361'}>
                    <div className={'flex flex-row py-2'}>
                        <WhatsAppIcon/>
                        <p className={'font-rb ml-3'}>+7 (926) 902 43 61</p>
                    </div>
                </a>
                <a className={'social-icon mt-0 mb-8'} href={'https://t.me/sofiyanosonya'}>
                    <div className={'flex flex-row py-4'}>
                        <TelegramIcon/>
                        <p className={'font-rb ml-3'}>@sofiyanosonya</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Footer;