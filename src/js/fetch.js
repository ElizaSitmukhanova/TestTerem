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

    getData('http://localhost:3000/requests')
        .then(data => {
            alert(message.success);
        }).catch(() => {
            alert(message.failure);
        }).finally(() => {
            form.reset();
        });
});

