import '@/scss/index.scss'
import board from '@/js/Board'


(function() {
  const randomName = Math.floor(Math.random() * Math.floor(10))

  fetch(`https://jsonplaceholder.typicode.com/users/${ randomName || 1 }`)
    .then(response => response.json())
    .then(data => {
      board.create('Player', `${data.username}`)
      // console.log( board.players )
      // console.log( board.players[1].playerCards, board.players[0].playerCards)
    })
    .catch(() => {
      board.create('Player', 'AI')
    })

})()


// TODO  добавить "взять"-функцию для экшн-кнопки
// TODO  счетчики карт и надписи
// TODO  стартовую страницу с кнопкой начать


