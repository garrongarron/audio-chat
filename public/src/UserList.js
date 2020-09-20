import { mute } from "./Mute.js"
import mySelf from "./MySelf.js"

let ul = document.createElement('ul')
ul.classList.add('player')
document.body.appendChild(ul)
const populate = (arr) =>{
    ul.innerText = ''

   for (const key in arr[1]) {
       if (arr[1].hasOwnProperty(key)) {
            let li = document.createElement('li')
            li.innerText = arr[1][key]
            li.classList.add('u-'+key)
            ul.appendChild(li)
       }
   }

    let ul2 = document.querySelector('.u-'+mySelf.id)
    if(ul2) ul2.appendChild(mute)
}
export default populate