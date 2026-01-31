
const forms = document.querySelectorAll('form')

forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const formData = new FormData(form)
        const body = {}

        formData.append('form', form.classList.value)

        console.log(formData);
        formData.forEach((value, field) => {
            body[field] = value
        })

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => {
                console.log(response);
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.status)
                }
            })
            .then(data => {
                alert('данные отправлены успешно');
            })
            .catch(error => {
                console.log(error.message);
                alert('данные отправлены с ошибкой ' + error.message);
            })
            .finally(() => {
                form.reset()
            })
    })
})

