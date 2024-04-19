
let isDragging = false,
  startX,
  startScrollLeft
// let isDragging = false;

const dragStart = (e) => {
  const carousel = document.querySelector('.carousel')
  console.log('dragStart')
  isDragging = true
  carousel.classList.add('dragging')
  startX = e.pageX
  startScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
  const carousel = document.querySelector('.carousel')
  console.log('dragging')
  if (!isDragging) return
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
}

const dragStop = () => {
  const carousel = document.querySelector('.carousel')
  console.log('dragStop')
  isDragging = false
  carousel.classList.remove('dragging')
}

export const addEvents = () => {
  const carousel = document.querySelector('.carousel')
  const arrowbnt = document.querySelectorAll('.wrapper i ')
  const firstCardWidth = carousel.querySelector('.card').offsetWidth
 
  arrowbnt.forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log(btn.id, 'addEventListener')
     
      carousel.scrollLeft +=
        btn.id === 'left' ? -firstCardWidth :firstCardWidth
    });
  });

  carousel.addEventListener('mousedown', dragStart)
  carousel.addEventListener('mousemove', dragging)
  document.addEventListener('mouseup', dragStop)
}