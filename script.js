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

/* ---
console.log('Getting ready to boil water')
boilWater(10000)
console.log('Now we are chopping carrots and meanwhile water is boiling')

function boilWater(time) {
  console.log('boiling ...')

  setTimeout(() => {
    console.log('Water fully boiled and we are done! with boiling')
  }, time)
}
--- */
// Example-2: Until & Unless the Call Stack is empty, we cannot get the Async Tasks run!
/* ---
function boilWater(time) {
  console.log('boiling ...')
  setTimeout(time => {
    console.log('Done with boiling water')
  }, time)
}

boilWater(1000) // Let's try boiling water only for one second
console.log('chop carrot')

// But now a synchronous task is taking longer than the assumed set time for the boilWater function
for (let i = 0; i < 10000; i++) {
  console.log('still busy')
}

--- */

/* --- CALL BACK HELL! 
    Whenever we have to perform an action, one after the another in async world, we have to wait until the first action is complete. And only then we can use execute the second action, even in asynchronous world.

    Suppose we are on the products page, and we clicked on a particular product to get more information about the product. So, we have to wait until the product info is available to show the product.
--- */

/* ---
console.log('boiling started ...')
setTimeout(() => {
  console.log('boiling done!')
  setTimeout(() => {
    console.log('Add Carrots & resume boiling for 5 minutes')

    // Here I am trying to mimic boiling is in process! But anyways this is just an example!
    setTimeout(() => {
      console.log('boiling done')
    }, 5000)

    setTimeout(() => {
      console.log('Carrots Done!')
      setTimeout(() => {
        console.log('Add Onions')
        setTimeout(() => {
          console.log('Carrots Done!')
        })
      }, 2000)
    }, 2000)
  })
}, 5000)

--- */

/** --- EXAMPLE-3: CallBack Hell DOM Example --- */

const btnDOM = document.querySelector('button')

/* --- Not the Right Example
btnDOM.addEventListener('click', () => {
  setInterval(() => {
    btnDOM.style.transform += `translateX(100px)`
  }, 1000)
})
--- */

// This is an Example of Callback Hell in DOM
function moveX() {
  setTimeout(() => {
    btnDOM.style.transform += `translateX(100px)`
    setTimeout(() => {
      btnDOM.style.transform += `translateX(100px)`
      setTimeout(() => {
        btnDOM.style.transform += `translateX(100px)`
        setTimeout(() => {
          btnDOM.style.transform += `translateX(100px)`
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}

moveX()

// async-await example to fetch data
;(async function getTodos() {
  // Within this Async-Await function lines are executed one after another
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()

  console.log(data)
})()

console.log('Synchronous Code!')
