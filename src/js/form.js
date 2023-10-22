   // Создаем массив с названиями полей и количеством повторений
    const fields = [
      { name: "select", count: 5, label: "Выберите цифру от 1 до 5:" },
    ];

    // Функция для создания элементов формы
    function createFormElement(type, id, name) {
      const element = document.createElement(type);
      element.id = id;
      element.name = name;
      return element;
    }

    // Создаем элементы формы через циклы
    fields.forEach(field => {
      for (let i = 1; i <= field.count; i++) {
        const label = document.createElement("label");
        label.classList.add('label')
        label.for = `${field.name}${i}`;
        label.textContent = field.label;

        let element;
        if (field.name === "select") {
          element = createFormElement("select", `${field.name}${i}`);
          element.classList.add('select');
          element.name = `${field.name}${i}`;
          for (let j = 1; j <= 5; j++) {
            const option = document.createElement("option");
            option.value = j;
            option.textContent = j;
            
            element.appendChild(option);
          }
        }
        

        document.getElementById("check").appendChild(label);
        document.getElementById("check").appendChild(element);
      }
    });


const form = document.querySelector('#form');
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
/*     document.getElementById('result').innerHTML = JSON.stringify(json); */

const resultText = document.createTextNode(JSON.stringify(json));
document.getElementById("result").appendChild(resultText);

    getData('http://localhost:3000/requests')
        .then(data => {
            console.log(data);
            alert(message.success);
        }).catch(() => {
            alert(message.failure);
        }).finally(() => {
            form.reset();
        });

});

//POST запрос 

/* const form = document.querySelector('#form');
const message = {
    loading: 'Идет загрузка данных',
    success: 'Успешно! Все данные отправлены! Спасибо!',
    failure: 'Упс, что-то пошло не так!'
};

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json();
}; 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(message.loading);

    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData.entries()));
    document.getElementById('result').innerHTML = JSON.stringify(json);
    
    postData('http://localhost:3000/requests', json)
        .then(data => {
            console.log(data);
         alert(message.success);
        }).catch(() => {
            alert(message.failure);
        }).finally(() => {
           form.reset(); 
      });
     
});

fetch('http://localhost:3000/requests')
    .then(data => data.json())
    .then(res => console.log(res));

     */