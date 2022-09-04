import React from 'react';
import {ReactComponent as WhatsAppIcon} from "../assets/socials/whatsapp.svg";
import {ReactComponent as TelegramIcon} from "../assets/socials/telegram.svg";

function Footer(props) {
    return (
        <div>
            <h4>Обратная связь</h4>
            <div className={'flex flex-col items-center py-4'}>
                <div className={'flex flex-row justify-between w-[100px]'}>
                    <a className={'social-icon'} href={'#'}>
                        <div>
                            <WhatsAppIcon/>
                        </div>
                    </a>
                    <a className={'social-icon'} href={'#'}>
                        <TelegramIcon/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;