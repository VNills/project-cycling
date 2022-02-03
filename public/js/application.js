document
  .registrationForm // ловим событие на форме регистрации
  ?.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('1');
    const {
      method,
      action: url,
      name: { value: name },
      surname: { value: surname },
      email: { value: email },
      password: { value: password },
      doublePassword: { value: doublePassword },
    } = event.target;

    const elem = fetch(url, {
      method,
      body: JSON.stringify({
        name, surname, email, password, doublePassword,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
    // .then(({ registration }) => {
    //  const message = registration ? 'Успешный вход!' : 'Ошибка входа.';
      .catch(console.log);
    console.log(elem);
  });

const editTrackForm = document.querySelector('#editTrackForm'); // форма редактировать пост
const deleteTrackButton = document.querySelector('#deleteTrackButton'); // кнопка удалить пост

if (editTrackForm) {
  editTrackForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const response = await fetch(`/track/${event.target.dataset.trackid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // title: event.target.title.value,
        // body: event.target.body.value,
      }),
    });

    const responseJson = await response.json();

    if (!responseJson.isUpdateSuccessful) {
      const errorDiv = document.createElement('div');
      errorDiv.classList.add('error');
      errorDiv.innerText = responseJson.errorMessage;
      event.target.parentElement.append(errorDiv);
      return;
    }

    window.location = `/entries/${responseJson.entryID}`;
  });
}

if (deleteTrackButton) {
  deleteTrackButton.addEventListener('click', async (event) => {
    const response = await fetch(`/entries/${event.target.dataset.trackid}`, {
      method: 'DELETE',
    });

    const responseJson = await response.json();

    // if (!responseJson.isDeleteSuccessful) {
    //   const errorLi = document.createElement('li');
    //   errorLi.classList.add('pipe-separate');
    //   errorLi.classList.add('left');
    //   errorLi.classList.add('error');
    //   errorLi.innerText = responseJson.errorMessage;
    //   const editAndDeleteUl = document.querySelector('#editAndDeleteUl');
    //   editAndDeleteUl.append(errorLi);
    //   return;
    // }

    // window.location = '/entries';
  });
}
