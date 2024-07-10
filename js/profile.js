import { header } from "../components/header.js"

header()


let url = "http://localhost:3001"

const profile = document.querySelector('.profile_post')

axios.get(`${url}/profile`)
.then(res => {
    console.log(res.data)
    prof(res.data)
})
.catch(error => console.error(error))

function prof(res) {
    res.forEach(elem => {
        const proFot = document.createElement('div')
        let img = document.createElement('img')
    
        proFot.classList.add('profile_foto')
        img.setAttribute('src', elem.photo)
    
        profile.append(proFot)
        proFot.append(img) 
    });
}
