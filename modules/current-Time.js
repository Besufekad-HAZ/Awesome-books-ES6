import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.js'

const displayTime = document.getElementById('date-display')

setInterval(() => {
  const now = DateTime.now()
  displayTime.innerHTML = now.toFormat('ccc LLL dd yyyy, hh:mm:ss a')
}, 500)
