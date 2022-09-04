import axios from "axios";

const token = "5685715550:AAFQuH24idBMwEiSPMX1E7X2tqAB61cOjDw";

const chat_id = "-1001624105809";

export default function SendForm(data) {
    console.log(data);
    let message = '';
    message += "✅ Привет! С твоего сайта поступила новая заявка:%0A";
    message += "🤓 <b>Фамилия:</b> " + data.surname + "%0A";
    message += "🤝 <b>Имя:</b> " + data.name + '%0A';
    message += "📞 <b>Телефон:</b> " + data.telephone + "%0A";
    message += "📖 <b>Вид услуги:</b> " + data.commissionType + '%0A';
    console.log(message);
    axios.get(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${message}`)
        .then(responce => console.log('GOT: ' + responce))
}