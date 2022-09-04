import React, {useEffect, useState} from 'react';
import './SignupForm.scss'
import SendForm from "../core/sendFormToBot";

String.prototype.isNumber = function(){return /^\d+$/.test(this);}

function SignupForm(props) {
    const [formData, setFormData] = useState({
        surname: '',
        name: '',
        telephone: '',
        commissionType: 'ЕГЭ/ОГЭ Литература'
    })
    const [isFormVal, setFormVal] = useState(false)

    function SetSurname(val){
        setFormData({...formData, surname: val});
    }

    function SetName(val){
        setFormData({...formData, name: val});
    }

    function SetTel(target){
        if(target.value.isNumber()){
            setFormData({...formData, telephone: target.value});
        }else{
            setFormData({...formData, telephone: ''});
        }
    }

    function SetCommissionType(val){
        setFormData({...formData, commissionType: val});
    }
    
    function validateForm() {
        if(formData.surname != '' && formData.name != '' && formData.telephone != '' && formData.commissionType != ''){
            setFormVal(true);
        }else{
            setFormVal(false);
        }
    }

    useEffect((() => {
        validateForm();
    }), [formData])

    function validatePhone(field) {
        if (field.match(/^\d{10}/)) {
            return true;
        }
        return false;
    }

    function handleSubmit(e) {
        e.preventDefault();
        validateForm();
        if(isFormVal){
            SendForm(formData);
        }
    }

    return (
        <div className={'signup-form'}>
            <h2 className={'title-secondary'}>Записаться на занятие</h2>
            <form onSubmit={handleSubmit} method={'post'} className={'flex flex-col bg-page-white rounded-lg p-4'}>
                <label>
                    Фамилия
                    <input onChange={(e) => {SetSurname(e.target.value)}} className={''} type={'text'} placeholder={'Петров'} required/>
                </label>
                <label>
                    Имя
                    <input onChange={(e) => {SetName(e.target.value)}} className={''} type={'text'} placeholder={'Иван'} required/>
                </label>
                <label>
                    Телефон
                    <input onChange={(e) => {SetTel(e.target)}} className={''} type={'tel'} placeholder={'+7 825 255 25 25'} required/>
                </label>
                <label>
                    Цель
                    <select onChange={(e) => {SetCommissionType(e.target.value)}}>
                        <option selected>ЕГЭ/ОГЭ Литература</option>
                        <option>ЕГЭ/ОГЭ Русский</option>
                        <option>Помощь с домашней работой/сочинением</option>
                        <option>Помощь иностранцам</option>
                    </select>
                </label>
                <div className="g-recaptcha" data-sitekey="6LcviNEhAAAAAI9Q9fW55ShrYERccn6uOO7gV99A"></div>
                <button data-sitekey={"your_site_key"}  disabled={!isFormVal} type={'submit'} className={'g-recaptcha main mt-3 mb-5'}>Отправить заявку</button>
            </form>
        </div>
    );
}

export default SignupForm;