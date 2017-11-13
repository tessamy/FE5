'use strict';

// sivulla on p elementti 'message', jossa olisi tarkoitus näyttää palvelimen vastaus
// valitse se, ja tallenna muuttujaan

const message = document.querySelector('#message');

// tee funktio 'upload', joka
// - estää lomakkeen lähetyksen *
// - kirjoittaa 'message' elementtiin 'Upload in progress...'*
// - hakee lomakkeesta file kentän *
// - tekee FormData -olion ja lisää käyttäjän valitseman tiedoston siihen
// - lähettää tiedoston fetch -metodilla osoitteeseen 'upload.php'
// - kun tiedoston lähetys on valmis, kirjoittaa palvelimen vastauksen 'message' elementtiin

const upload = (evt) => {
  evt.preventDefault();

  message.innerText = 'Upload in progress...';

  const input = document.querySelector('input[type="file"]');
  const data = new FormData();

  data.append('fileToUpload', input.files[0]);

  const settings = {
    method: 'post',
    body: data
  };

  fetch('upload.php', settings).then((response) => {
    return response.text();
  }).then((text) => {
    console.log(text);
    message.innerText = text;
  })
};

document.querySelector('form').addEventListener('submit', upload);

// tee tapahtumakuuntelija, joka kutsuu 'upload' funktiota, kun lomake lähetetään
