import React, {useEffect, useState} from 'react';
import './SignupForm.scss'
import SendForm from "../core/sendFormToBot";

String.prototype.isNumber = function(){return /^\d+$/.test(this);}

const defaultForm = {
    surname: '',
    name: '',
    telephone: '',
    commissionType: 'ЕГЭ/ОГЭ Литература'
}

function SignupForm(props) {
    const [formData, setFormData] = useState(defaultForm)
    const [isFormVal, setFormVal] = useState(false)
    const [isWrongTel, setWrongTel] = useState(false)

    const telClass = isWrongTel? 'wrong-input': '';

    function SetSurname(val){
        setFormData({...formData, surname: val});
    }

    function SetName(val){
        setFormData({...formData, name: val});
    }

    function SetTel(target){
        if(validatePhone(target.value)){
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
        console.log(field)
        if (field.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)) {
            setWrongTel(false);
            return true;
        }else{
            setWrongTel(true);
        }
        console.log(isWrongTel)
        return false;
    }

    function handleSubmit(e) {
        e.preventDefault();
        validateForm();
        if(isFormVal){
            SendForm(formData);
            setFormData(defaultForm);
            e.target[0].value = '';
            e.target[1].value = '';
            e.target[2].value = '';
        }
    }

    return (
        <div className={'signup-form'}>
            <h2 className={'title-secondary'}>Записаться на занятие</h2>
            <form onSubmit={handleSubmit} method={'post'} className={'flex flex-col bg-page-white rounded-lg p-4'}>
                <label>
                    Фамилия
                    <input name={'surname'} onChange={(e) => {SetSurname(e.target.value)}} className={''} type={'text'} placeholder={'Иванов'} required/>
                </label>
                <label>
                    Имя
                    <input name={'name'} onChange={(e) => {SetName(e.target.value)}} className={''} type={'text'} placeholder={'Иван'} required/>
                </label>
                <label>
                    Телефон
                    <input name={'telephone'} max={12} min={7} onChange={(e) => {SetTel(e.target)}} className={telClass} type={'tel'} placeholder={'+7 525 255 25 25'} required/>
                </label>
                <label>
                    Цель
                    <select name={'commission'} onChange={(e) => {SetCommissionType(e.target.value)}}>
                        <option selected>ЕГЭ/ОГЭ Литература</option>
                        <option>ЕГЭ/ОГЭ Русский</option>
                        <option>Помощь с домашней работой/сочинением</option>
                        <option>Помощь иностранцам</option>
                    </select>
                </label>
                <button disabled={!isFormVal} type={'submit'} className={'g-recaptcha main mt-3 mb-5'}>Отправить заявку</button>
            </form>
        </div>
    );
}

export default SignupForm;