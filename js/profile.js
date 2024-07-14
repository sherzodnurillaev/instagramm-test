import { header } from "../components/header.js"

header()


let url = "http://localhost:3001"
let userId = localStorage.getItem('userId')
console.log(userId);

const profile = document.querySelector('.profile_post')
let nickName = document.querySelector('.top h1')
let avatar = document.querySelector('.left img')
let txt = document.querySelector('.mid .txt span')
let followers = document.querySelector('.mid .followers span')
let following = document.querySelector('.mid .following span')

axios.get(`${url}/users/${userId}`)
.then(res => {
    // console.log(res.data)
    prof(res.data)
})
.catch(error => console.error(error))

function prof(res) {
    res.posts.forEach(elem => {
        const proFot = document.createElement('div')
        let img = document.createElement('img')
    
        proFot.classList.add('profile_foto')

        img.setAttribute('src', elem)

        avatar.setAttribute("src", res.avatarUrl)

        nickName.innerText = res.userName
        followers.innerText = res.followers
        following.innerText = res.followings
        txt.innerText = res.posts.length
    
        profile.append(proFot)
        proFot.append(img) 
    });
}
