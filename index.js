class UserForm {
    constructor() {
        this.name = '';
        this.email = '';
    }

    get userName() {
        return this.name;
    }

    get userEmail() {
        return this.email;
    }

    renderUserNameField () {
        document.getElementById('user-name').value =this.name;
    }

    renderUserEmailField () {
        document.getElementById('user-email').value = this.email;
    }

    setUserName (name) {
        this.name = name;
        this.renderUserNameField();
    }

    setUserEmail (email) {
        this.email = email;
        this.renderUserEmailField();
    }

    sendData () {
        let formElement = document.getElementById('form');
        formElement.classList = [];

        if (!this.name || !this.email) {
            return formElement.classList.add('invalid-text');
        }

        formElement.classList.add(sendUserData() ? "success-text" : "error-text");

        this.setUserName("");
        this.setUserEmail("");
        return;
    }
}

const userForm = new UserForm();

// Метод отправляет данные по некоторому url и возвращает bool значение
// в зависисмости от того, записан новый пользователь на мастер-класс или нет
const sendUserData = async () => {
    // const response = await fetch(
    //     "http://some.address.com/",
    //     {
    //         method: "POST",
    //         header: {
    //             "Content-Type": "application/json",
    //             //CSRF Token
    //         },
    //         body: JSON.stringify({
    //             name: userForm.userName,
    //             email: userForm.userEmail
    //         })
    //     }
    // );
    // const data = await response.json();

    // В 4 из 5 случаев возвращает true, имитируя работу реального сервиса
    return Boolean(getRandomInt(5));
}

// Метод вызывается на клик по кнопке "Записаться" и делает видимой форму
const setUserFormVisible = () => {
    let formElement = document.getElementById('popup-with-form');

    formElement.style.visibility = 'visible';
    formElement.classList.add('visible-animation');
}

// Выдаёт рандомное целое неотрицательное значение не большее данного
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

window.onload = () => {
    document.querySelector('button.button').addEventListener('click', setUserFormVisible);

    
    document.getElementById('user-name').addEventListener('change', (e) => {
        e.preventDefault();
        userForm.setUserName(e.target.value);
    });

    document.getElementById('user-email').addEventListener('change', (e) => {
        e.preventDefault();
        userForm.setUserEmail(e.target.value);
    });

    document.getElementById('popup-with-form').querySelector('button').addEventListener('click', (e) => {
        e.preventDefault();
        userForm.sendData();
    });
}