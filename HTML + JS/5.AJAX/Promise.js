// ========================================================
//                     CALLBACK HELL
// ========================================================

;`

Vadalar:

1. Keyinroqqa qoldiramiz, asosiy ishimizni tugatilgandan keyin bajarishni boshlaymiz
2. Vadani bajarib koramiz
  - Amalga oshsa "xursand" qilamiz
  - Bolmasa "uzr" so'raymiz

`

function work(vadaliIsh) {
  // IMPORTANT WORKK!!!

  setTimeout(() => {
    vadaliIsh('Uzr(', 'Ish')
  }, 0)
}

const vadaliIsh = (err, result) => {
  if (err) {
    return console.log(err)
  }

  return console.log(result)
}

work(vadaliIsh)

// +1 Vada yana

function work(vadaliIsh, vadaliIsh2) {
  // IMPORTANT WORKK!!!

  setTimeout(() => {
    vadaliIsh('Uzr(', 'Ish')

    setTimeout(() => {
      vadaliIsh2('', 'Amalladim birodar)!')
    }, 0)
  }, 0)
}

const vadaliIsh2 = (err, result) => {
  if (err) {
    return console.log(err)
  }

  return console.log(result)
}

work(vadaliIsh, vadaliIsh2)

// ===============
// Another Example

vadaBerilganIsh(function () {
  // Ishni qilamiz!
  // ...

  vadaBerilganIsh2(function () {
    // Ishni qilamiz!
    // ...

    vadaBerilganIsh3(function () {
      // Ishni qilamiz!
      // ...

      console.log("Bo'ldi")
    })
  })
})

// =====

vadaBerilganIsh(function () {
  // Ishni qilamiz!
  // ...

  vadaBerilganIsh2(function () {
    // Ishni qilamiz!
    // ...

    vadaBerilganIsh3(function () {
      // Ishni qilamiz!
      // ...

      vadaBerilganIsh4(function () {
        // Ishni qilamiz!
        // ...

        vadaBerilganIsh5(function () {
          // Ishni qilamiz!
          // ...

          vadaBerilganIsh6(function () {
            // Ishni qilamiz!
            // ...

            console.log("Bo'ldi")
          })
        })
      })
    })
  })
})

// ========================================================
//                     PROMISE
// ========================================================

const promise = new Promise((resolve, reject) => {
  // Do something
  const isWorkSuccessFull = true

  if (isWorkSuccessFull) {
    resolve('Success')
  } else {
    reject('Failure')
  }
})

// Promise
const work = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']

    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('No I cannot!')
    }
  }, 2000)
})

work
  .then((result) => {
    console.log(result)
  })
  .catch((error) => console.log(error))

// ===
work
  .then((result) => {
    console.log(result)
  })
  .then((result) => {
    console.log(result)
  })
  .then((result) => {
    console.log(result)
  })
  .catch((error) => console.log(error))

// PROMISE lar bilan chuqurlashmaymiz, mavzu `Middle` darajadagi
1`https://www.freecodecamp.org/news/javascript-es6-promises-for-beginners-resolve-reject-and-chaining-explained/`
