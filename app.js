// We  give here the selectors
const jokeBracket = document.querySelector(".joke")
const again = document.querySelector(".again")


//Trigger the joke gen with a button to click
again.addEventListener("click", makeJoke)
//First trigger here 
makeJoke()
//Making it asynchronous
async function makeJoke() {

   //Call here the API
   let result = await fetch('https://icanhazdadjoke.com/', {
      headers: {
         'Accept': 'application/json'

      }

   })
   //Converting it to json
   let telling = await result.json()


   jokeBracket.textContent = telling.joke

}