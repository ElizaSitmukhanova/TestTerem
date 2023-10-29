      const form = document.querySelector('#form'),
      result = document.querySelector('#result');

const message = {
    loading: 'Идет загрузка данных',
    success: 'Успешно! Все данные отправлены! Спасибо!',
    failure: 'Упс, что-то пошло не так!'
};

const getData = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(message.loading); 

    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData.entries()));
    result.innerHTML = json;
    let url = 'http://localhost:3000/requests?' + new URLSearchParams(formData).toString();

    getData(url)
        .then(data => {
            console.log(data)
            alert(message.success);
        }).catch(() => {
            alert(message.failure);
        }).finally(() => {
            form.reset();
        });
});

 
/* 
class FormHandler {
    constructor(formSelector, url) {
        this.form = document.querySelector(formSelector);
        this.url = url;

        this.message = {
            loading: 'Идет загрузка данных',
            success: 'Успешно! Все данные отправлены! Спасибо!',
            failure: 'Упс, что-то пошло не так!'
        };

        this.setupFormListener();
    }

    setupFormListener() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    async handleSubmit(e) {
        e.preventDefault();
        this.showLoadingMessage();

        const formData = new FormData(this.form);
        const searchParams = new URLSearchParams(formData);

        try {
            const result = await this.getData(`${this.url}?${searchParams}`);
            this.handleSuccess(result);
        } catch (error) {
            this.handleFailure(error);
        } finally {
            this.form.reset();
        }
    }

    async getData(url) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    showLoadingMessage() {
        alert(this.message.loading);
    }

    handleSuccess(data) {
        console.log(data);
        alert(this.message.success);
    }

    handleFailure(error) {
        console.error(error);
        alert(this.message.failure);
    }
}

const formHandler = new FormHandler('form', 'http://localhost:3000/requests'); */