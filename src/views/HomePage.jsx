import React from 'react';
import store from "../redux/store";
import './HomePage.scss'
import { useSelector } from "react-redux";
import {ReactComponent as StudyPicture} from '../assets/study-picture.svg';
import {ReactComponent as ArrowLeftIcon} from '../assets/arrow-left.svg';
import {ReactComponent as ArrowUpIcon} from '../assets/arrow-up.svg';
import {ReactComponent as QuoteLeft} from '../assets/quote-left.svg';
import {ReactComponent as QuoteRight} from '../assets/quote-right.svg';
import {ReactComponent as DesktopVideoIcon} from '../assets/desktop-video-icon.svg';
import {ReactComponent as PlanIcon} from '../assets/plan-icon.svg';
import {ReactComponent as ClockIcon} from '../assets/clock-icon.svg';
import Spoiler from "../components/Spoiler";
import SignupForm from "../components/SignupForm";

const unservableWorks =
    <ul>
        <li>Не пишу олимпиады за учеников и не помогаю в их решении.</li>
        <li>Не провожу очных занятий.</li>
        <li>Не решаю за ученика его домашнее задание.</li>
    </ul>;

function HomePage(props) {
    const isMobile = useSelector(state => state.device.isMobile);

    return (
        <div className={'app-page'}>
            {/* Main screen */}
            <section className={'page-section section-main first-section'}>
                <div className={'grid grid-cols-2'}>
                    {/*Desktop Person Image*/}
                    <div className={'lg:hidden col-span-2 h-fit w-full inline-flex flex-col items-center'}>
                        <StudyPicture className={'h-[280px] flex-shrink'}/>
                    </div>
                    {/*Welcome Text*/}
                    <div className={'col-span-2 lg:col-span-1 flex flex-col justify-center'}>
                        <p className={'font-rbMono tracking-widest text-xl mb-4'}>София Шуман</p>
                        <h1 className={'mb-4'}>Твой личный помощник в мире выразительного, красивого и могучего русского языка</h1>
                        <h3 className={'mb-4'}>Репетитор русского языка и литературы</h3>
                        <div className={'flex flex-col xl:flex-row items-center  mt-8 mb-12'}>
                            <a href={'#signup-form'}>
                                <button className={'main w-[60%] max-w-[340px] min-w-[290px]'}>Записаться на занятие</button>
                            </a>
                            <div className={'flex flex-row xl:mt-0 mt-8'}>
                                <ArrowUpIcon className={'xl:hidden'}/>
                                <ArrowLeftIcon  className={'hidden ml-6 xl:block'}/>
                                <p className={'ml-2'}>
                                    Пробное занятие <span className={'text-main'}>бесплатно</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*Desktop Person Image*/}
                    <div className={'hidden lg:block'}>
                        <StudyPicture className={'lg:max-h-[430px]'}/>
                    </div>
                </div>
            </section>
            {/* About me */}
            <section id={'about-me'} className={'page-section'}>
                <div className={'section-secondary-container'}>
                    <div className={'section-container-desktop'}>
                        <h2 className={'title-secondary'}>Обо мне</h2>
                        <div className={'flex flex-row items-center justify-center'}>
                            <QuoteLeft className={'min-w-[32px] hidden md:block'}/>
                            <p className={'max-w-[92%] px-4 text-lg tracking-tighter text-justify font-rbMono font-medium tracking-widest'}>Здравствуйте! Меня зовут София и я репетитор для учащихся 5-11 классов.
                                Являюсь студенткой филологического факультета (педагогическое направление с двумя профилями подготовки: русский язык и литература).</p>
                            <QuoteRight className={'min-w-[32px] hidden md:block'}/>
                        </div>
                        <div className={'about-facts'}>
                            <div className={'achive-block'}>
                                <div className={'achive-title'}>
                                    <p>97 баллов</p>
                                </div>
                                <p className={'achive-body'}>ЕГЭ Литература 2020 год</p>
                            </div>
                            <div className={'achive-block'}>
                                <div className={'achive-title'}>
                                    <p>78 баллов</p>
                                </div>
                                <p className={'achive-body'}>ЕГЭ Русский язык 2020 год</p>
                            </div>
                            <div className={'achive-block'}>
                                <div className={'achive-title'}>
                                    <p>2 года</p>
                                </div>
                                <p className={'achive-body'}>Опыта работы репетитором и преподавателем в онлайн школах</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* My services */}
            <section id={'my-services'} className={'page-section section-main pb-12'}>
                <h2 className={'title-main'}>Чем могу помочь?</h2>
                <div className={'services-container'}>
                    <p className={'service-block'}>
                        Подготовка к ЕГЭ и ОГЭ по литературе
                    </p>
                    <p className={'service-block'}>
                        Помощь с домашней работой и написанием сочинений
                    </p>
                    <p className={'service-block'}>
                        Подготовка к ЕГЭ и ОГЭ по русскому языку
                    </p>
                    <p className={'service-block'}>
                        Помощь инофонам (иностранцам) в освоении русского языка
                    </p>
                </div>
            </section>
            {/* Study plan */}
            <section className={'page-section'}>
                <div className={'section-secondary-container'}>
                    <div className={'section-container-desktop'}>
                        <h2 className={'title-secondary'}>Формат и ход обучения</h2>
                        <div className={'plan-list'}>
                            <div className={'plan-item'}>
                                <div className={'plan-item-header'}>
                                    <DesktopVideoIcon className={'plan-item-icon'}/>
                                    <h3 className={'plan-item-title'}>Дистанционное обучение</h3>
                                </div>
                                <p className={'plan-item-body'}>Экономия твоего времени на дорогу и возможность заниматься из любой точки мира.</p>
                            </div>
                            <hr className={'plan-hr'}/>
                            <div className={'plan-item'}>
                                <div className={'plan-item-header'}>
                                    <PlanIcon className={'plan-item-icon'}/>
                                    <h3 className={'plan-item-title'}>Индивидуальный план</h3>
                                </div>
                                <p className={'plan-item-body'}>На пробном занятии проверяю уровень знаний с помощью тестирования/беседы и составляю план обучения.</p>
                            </div>
                            <hr className={'plan-hr'}/>
                            <div className={'plan-item'}>
                                <div className={'plan-item-header'}>
                                    <ClockIcon className={'plan-item-icon'}/>
                                    <h3 className={'plan-item-title'}>Урок - от 60 минут</h3>
                                </div>
                                <p className={'plan-item-body'}>Оплачивается только урок, поэтому, например, нет переплат за дополнительные 30 минут, если будет такая необходимость).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Questions spoiler list */}
            <section id={'questions'} className={'page-section section-main pb-8'}>
                <h2 className={'title-main'}>Часто задаваемые вопросы</h2>
                <div className={'spoilers-container'}>
                    <Spoiler label={'Сколько раз в неделю нужно заниматься с репетитором?'} spoilerText={'Зависит от целей ученика, денежных возможностей и его уровня знаний. В среднем 2 раза в неделю.'}/>
                    <hr/>
                    <Spoiler label={'Какие работы я НЕ выполняю?'} spoilerText={unservableWorks}/>
                    <hr/>
                    <Spoiler label={'Сколько стоит одно занятие?'} spoilerText={'Стоимость одного занятия 800 рублей.'}/>
                    <hr/>
                    <Spoiler label={'Как начать заниматься?'} spoilerText={'Написать мне в telegram или whatsapp, где вы предварительно обозначите свои цели. Далее мы можем созвониться, чтобы обсудить подробнее все детали нашей будущей работы и выбрать день и время для пробного занятия.'}/>
                    <hr/>
                    <Spoiler label={'Где проходят занятия?'} spoilerText={'На платформе zoom.'}/>
                </div>
            </section>
            {/* Sign up form */}
            <section id={'signup-form'} className={'page-section'}>
                <div className={'section-secondary-container'}>
                    <div className={'section-container-desktop'}>
                        <SignupForm/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;