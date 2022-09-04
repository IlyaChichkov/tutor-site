import React from 'react';
import './SignupForm.scss'

function SignupForm(props) {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className={'signup-form'}>
            <h2 className={'title-secondary'}>Записаться на занятие</h2>
            <form onSubmit={handleSubmit} className={'flex flex-col bg-page-white rounded-lg p-4'}>
                <label>
                    Фамилия
                    <input className={''} type={'text'} placeholder={'Петров'}/>
                </label>
                <label>
                    Имя
                    <input className={''} type={'text'} placeholder={'Иван'}/>
                </label>
                <label>
                    Телефон
                    <input className={''} type={'tel'} placeholder={'+7 825 255 25 25'}/>
                </label>
                <label>
                    Цель
                    <select>
                        <option selected>ЕГЭ/ОГЭ Литература</option>
                        <option selected>ЕГЭ/ОГЭ Русский</option>
                        <option selected>Помощь с домашней работой/сочинением</option>
                        <option selected>Помощь иностранцам</option>
                    </select>
                </label>
                <button type={'submit'} className={'main mt-3 mb-5'}>Отправить заявку</button>
            </form>
        </div>
    );
}

export default SignupForm;