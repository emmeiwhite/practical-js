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

// const btnDOM = document.querySelector('button')

/* --- Not the Right Example
btnDOM.addEventListener('click', () => {
  setInterval(() => {
    btnDOM.style.transform += `translateX(100px)`
  }, 1000)
})
--- */

// This is an Example of Callback Hell in DOM

/* ---
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

// async-await example to fetch data; EXAMPLE-4
;(async function getTodos() {
  // Within this Async-Await function lines are executed one after another
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()

  console.log(data)
})()

console.log('Synchronous Code!')

// EXAMPLE-5: DOM Example Again
const heading1 = document.querySelector('.heading-1')
const heading2 = document.querySelector('.heading-2')
const heading3 = document.querySelector('.heading-3')

setTimeout(() => {
  heading1.style.backgroundColor = 'red'
  setTimeout(() => {
    heading2.style.backgroundColor = 'green'
    setTimeout(() => {
      heading3.style.backgroundColor = 'blue'
    }, 2000)
  }, 2000)
}, 2000)

// PROMISE: A better way to handle Asynchronous Code
const promise = new Promise((resolve, reject) => {
  let fetchedData = false // Any Asynchronous Task!

  if (fetchedData) {
    resolve('The Data is fetched successfully!')
  } else {
    reject('Error: Fetching Data')
  }
})

promise.then(data => console.log(data)).catch(err => console.log(err))
--- */

/** --- Practical Example: Promise Loading an Image from URL
 * There are Two Possible Scenarios :
 * 1) The URL will actually return an Image
 * 2) The URL will not be able to return an Image
 *
 * And we have to handle both of these cases using Promises
 *  --- */

// let url = 'https://picsum.photos/500'
// const imgContainer = document.querySelector('.img-container')
// const btn = document.querySelector('button')

// btn.addEventListener('click', () => {
//   // const promise = loadImage(url)
//   // console.log(promise)

//   loadImage(url)
//     .then(data => console.log(data))
//     .catch(error => console.log('Error Fetching Data'))
// })

// function loadImage(url) {
//   return new Promise((resolve, reject) => {
//     let img = new Image()

//     /* --- We can add event listeners for the img
//     a) load: if we are able to load the image
//     b) error: if we are unable to load the image
//     TRICK: we can use img.src = url to direct the img tag to its source
//             - If the url source points to a correct url -> image is loaded
//             - If the url source points to an incorrect url -> image is not loaded
//   --- */

//     img.addEventListener('load', () => {
//       console.log('Successfully loaded the image !')
//       resolve(img)
//     })

//     img.addEventListener('error', () => {
//       console.log('Failed to load the image')
//       reject('Failed to fetch the image')
//     })

//     img.src = url // Here lies all the trick.
//     /** If src points to a correct resource the 'load' event is fired!
//      * If src points to an incorrect resource the 'error' event is fired! **/
//   })
// }

// TECHNIQUE FOR PROMISE.
/**
 * 1. Create a function
 *  2. return a new Promise()
 * 3. Then within the call back (resolve, reject)=>{}, call resolve() or reject() based on the outcome
 */

// Promise Example last:
/*
const heading1 = document.querySelector('.heading-1')
const heading2 = document.querySelector('.heading-2')
const heading3 = document.querySelector('.heading-3')

const actionBtn = document.querySelector('button')

actionBtn.addEventListener('click', async () => {
  // addColor(heading1, 2000, 'red')
  //   .then(() => addColor(heading2, 2000, 'green'))
  //   .then(() => addColor(heading3, 2000, 'blue'))
  //   .catch(error => console.log(error))
  try {
    await addColor(heading1, 2000, 'red')
    await addColor(heading2, 2000, 'green')
    await addColor(heading3, 2000, 'blue')
  } catch (error) {
    console.log(error)
  }
})

function addColor(element, time, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color
        resolve()
      }, time)
    } else {
      reject(new Error(`There is no such element ${element}`))
    }
  })
}

*/

/* ---
const url = './api/persons.json'

const btnDOM = document.querySelector('button')

btnDOM.addEventListener('click', () => {
  fetchAndrenderUI()
})


function fetchAndrenderUI() {
  fetch(url)
    .then(response => {
      console.log(response)
      if (!response.ok) {
        throw new Error('URL not correct')
      }
      return response.json()
    })
    .then(data => {
      displayItems(data)
    })
    .catch(error => {
      console.log(error)
    })
}

function displayItems(data) {
  const personsInUI = data
    .map(person => {
      return `<div>${person.name}</div>`
    })
    .join('')

  const element = document.createElement('div')
  element.innerHTML = personsInUI
  document.body.appendChild(element)
}
--- */
// Fetch Gotchas: fetch() only looks for network errors 404 (say the url typed is wrong)

/** --- Async - Await Syntax  --- */

const url = './api/persons.json'

const btnDOM = document.querySelector('button')

btnDOM.addEventListener('click', async () => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('ERROR: Cannot Fetch Data')
    }

    const data = await response.json()

    console.log(data)
    // We successfully fetched the data with http request with fetch
    // Now, It is time to render the Data in UI (UI should be in sync with data)

    const dataWithHTML = data
      .map(person => {
        return `<p>${person.name}</p>`
      })
      .join('')

    console.log(dataWithHTML)

    const element = document.createElement('div')
    element.innerHTML = dataWithHTML

    document.body.appendChild(element)
  } catch (error) {
    console.log(error)
  }
})

// Practicing IIFE - Used before ES6 Modules
console.log('To avoid namespace collision, we used IIFE before ES6')
const script1 = (function () {
  function sayHello() {
    return 'hello !'
  }

  return {
    a: sayHello
  }
})()

console.log(script1.a())

/* --- Let's practice this keyword step by step: --- */
// Basic Easy to understand definition about "this" keyword
/**
 * 1. this keyword is available in every execution context (be it global or functional execution context)
 * 2. this keyword will always point to some object.
 * 3. Everything is JavaScript is Lexically bound and Lexically scoped, Where a function is defined determines its lexical scope and it have a reference to outer Lexical Environments expect for the this keyword has which has a Dynamic scope and to what object will the this keyword point to is determined by who calls this or which object calls this keyword
 */

// Some Rules for this Keyword:

/**  Rule 1: this in a Regular Function (Default Context) */
function thisCheck1() {
  console.log(this)
}

thisCheck1() // undefined or window

/**  Rule 2: this in an Object Method */

const user = {
  name: 'imran',
  greet() {
    console.log(this.name) // this refers to the user
  }
}

user.greet() // 'imran'

/**  Rule 3: this in a Constructor Function or Class */
function Person(name) {
  this.name = name
}

const me = new Person('rawdha') // a) {}    b) this--->{}   c) me points to the object and so does this

console.log(me.name)

/** Rule 4: this with Arrow Functions:
 * Arrow functions do not have their own this, they inherit this from the surrounding(lexical) scope where they are defined. [Note: object doesn't have their scope, Functions are lexically scoped --- so we need to see which function is closer to arrow function or which is the closest parent as function and it will inherit this value from it]
 */

const user2 = {
  name: 'roufi',
  greet() {
    // Outer Lexical scope is greet() function for arrow function. Within greet() function this points to user2, so the this keyword within arrow function will point to user2
    const arrow = () => {
      console.log(this.name)
    }

    arrow()
  }
}

user2.greet() // Logs 'roufi

/** Rule 5: this with Explicit Binding :
 *  We can control what this points to with call, apply & bind
 */

function showName() {
  console.log(this.name)
}

const user3 = {
  name: 'Sahilu'
}

const bottle = {
  name: 'water bottle'
}

console.log(showName.call(user3))
console.log(showName.call(bottle))

/** --- this keyword --- */

// Now that we know how the "this keyword" works

const wizard = {
  name: 'rawdha',
  health: 70,
  heal() {
    return (this.health = 100)
  }
}

console.log(`**********  WIZARD: ${wizard.name} has HEALING POWERS: ***********`)
console.log(wizard.heal())

// Now that the wizard can heal, the archer do not has a healing power, He needs to consult wizard and borrow healing power from the wizard

const archer = {
  name: 'imran',
  health: 30
}

console.log(`Archer: ${archer.name}'s health is ${archer.health}`)

wizard.heal.call(archer)

console.log(
  `After healing powers granted by ${wizard.name}, healing power of ${archer.name} is also ${archer.health}`
)
