/* ---
console.log('This is a JS file! And I am preparing for an interview!')

const moveBtn = document.querySelector('button')

console.log('Line 1')
setTimeout(() => {
  console.log('Executed at last')
}, 3000)
console.log('Line 2')
--- */

// Async Nature of JavaScript is only with the help of Web APIs not with Intrinsic JavaScript

// CallBack Hell

/* ---
setTimeout(() => {
  moveBtn.style.transform = `translateX(20px)`
  setTimeout(() => {
    moveBtn.style.transform += `translateX(20px)`
    setTimeout(() => {
      moveBtn.style.transform += `translateX(20px)`
      setTimeout(() => {
        moveBtn.style.transform += `translateX(20px)`
        setTimeout(() => {
          moveBtn.style.transform += `translateX(20px)`
          setTimeout(() => {
            moveBtn.style.transform += `translateX(20px)`
            setTimeout(() => {
              moveBtn.style.transform += `translateX(20px)`
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)
--- */

/* ---
const moveX = (element, amount, delay) => {
  setTimeout(() => {
    element.style.transform = translateX(`${amount}px`)
  }, delay)
}

moveX(moveBtn, 300, 2000)
--- */

// 06-October-2024 : Async-JavaScript with John Smilga

// Topic-1 JavaScript is a single threaded, synchronous language which means, it is executed line after line (one thing at a time)

/* ---
function boilWater() {
  console.log('boiling in progress ...')
  for (let i = 0; i < 10000; i++) {
    console.log('still boiling...')
  }
}

console.log('I am first')
console.log('I am second')

boilWater()
console.log('I am third')

console.log('Water is finally Boiled!')
--- */
// So, JavaScript is executed single line at a time, It on its own cannot do multi-tasking

/** --- Topic-2 Recipe | Chop Carrots while the water is boiling in the background --- */
console.log('Getting ready to boil water')
boilWater(10000)
console.log('Now we are chopping carrots and meanwhile water is boiling')

function boilWater(time) {
  console.log('boiling ...')

  setTimeout(() => {
    console.log('Water fully boiled and we are done! with boiling')
  }, time)
}
