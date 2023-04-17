const inputDate = document.querySelector('#data');
const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function countDow(event) {
  const atualizaTimer = setInterval(() => {
    const futureDate = new Date(`${event.target.value} 00:00:00 `);
    const dataBase = new Date();

    const diferencaData = futureDate.getTime() - dataBase.getTime();

    const TimeDay = diferencaData / 1000 / 60 / 60 / 24;
    const TimeHour = diferencaData / 1000 / 60 / 60;
    const TimeMinutes = diferencaData / 1000 / 60;
    const TimeSeconds = diferencaData / 1000;

    day.innerText = Math.floor(TimeDay);
    hour.innerText = Math.floor(TimeHour % 24);
    minute.innerText = Math.floor(TimeMinutes % 60);
    second.innerText = Math.floor(TimeSeconds % 60);
    console.log(day, hour, minute, second);
  }, 1000);
}

inputDate.addEventListener('change', countDow);
