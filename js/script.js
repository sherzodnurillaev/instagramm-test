import { header } from "../components/header.js"

header()

let url = "http://localhost:3001"

let stor = document.querySelector('.stories')
let post = document.querySelector('.posts')
let dialog = document.querySelector('dialog')
let topm = document.querySelector('.top_modal')
let clos = document.querySelector('.close')
let topImg = document.querySelector('.top_modal_img')
let topTxt = document.querySelector('.top_modal_right h1')
let storpho = document.querySelector('.stories_photo')

axios.get(url + "/stories")
.then(res => {
    reload(res.data)
    console.log(res)
})
.catch(error => console.log(error))

function reload(res) {

    res.forEach(item => {
        let box = document.createElement("div")
            let img = document.createElement("img")
            let name = document.createElement("p")
            
            img.setAttribute("src", item.images)
            img.classList.add('scrollImg')
            box.classList.add('scrollBox')
            name.innerText = item.userName

            if (item.checked == false) {
                img.classList.add('acctive')
            } else {
                img.classList.remove('acctive')
            }
            
        
            stor.append(box)
            box.append(img, name)  

            clos.onclick = () => {
                dialog.close()
            }

            img.onclick = () => {
                dialog.showModal()
                axios.patch(url + "/stories" + "/" + item.id, { checked: true })
                .then(res => console.log(res.data))
                .catch(error => console.error(error))
                
                topImg.setAttribute('src', item.images)
                topImg.classList.add('topimg')
                topTxt.innerText = item.userName
                storpho.setAttribute("src", item.images)

                setTimeout(() => {
                    dialog.close()
                }, 15000)

            }
    });
}

axios.get(url + "/posts")
.then(json => {
    postSection(json.data),
    console.log(json)
})
.catch(error => console.log(error))


function postSection(json) {
    json.forEach( elem => {

        const boxPost = document.createElement('div')
        const boxPostHeader = document.createElement('div')
        const headerLeft = document.createElement('div')
        let headerImg = document.createElement('img')
        let boxTopTxt = document.createElement('div')
        let boxTophTwo = document.createElement('h2')
        let boxTopP = document.createElement('p')
        let headerRight = document.createElement('div')
        let headerRightImg = document.createElement('img')
        let midBox = document.createElement('div')
        let midBoxImg = document.createElement('img')
        let boxFooter = document.createElement('div')
        let boxFooterTop = document.createElement('div')
        let boxTopRight = document.createElement('div')
        let boxRightimg = document.createElement('img')
        let boxRightImg = document.createElement('img')
        let boxLeftImg = document.createElement('img')
        let boxLeftimg = document.createElement('img')
        let favorit = document.createElement('div')
        let favoritSpan = document.createElement('span')
        let favoritP = document.createElement('p')
        let commit = document.createElement('div')
        let commitSpan = document.createElement('span')
        let commitP = document.createElement('p')



        boxPost.classList.add('box_post')
        boxPostHeader.classList.add('boxtop_header')
        boxPostHeader.classList.add('header_left')
        headerLeft.classList.add('header_left')
        headerImg.classList.add('headerImg')
        boxTopTxt.classList.add('txt_boxtop')
        headerRight.classList.add('txt_boxtop')
        headerRightImg.classList.add('headerRightImg')
        midBoxImg.classList.add('midBoxImg')
        headerRightImg.classList.add('headerRightImg')
        midBox.classList.add('mid_box')
        boxFooter.classList.add('box_footer')
        boxFooterTop.classList.add('box_footer_top')
        boxTopRight.classList.add('box_footer_top')
        boxRightimg.classList.add('headerRightImg')
        boxRightImg.classList.add('headerRightImg')
        boxLeftImg.classList.add('headerRightImg')
        favorit.classList.add('box_footer_likes')
        commit.classList.add('commit')



        headerImg.setAttribute('src', "https://i.scdn.co/image/ab67616d00001e022a038d3bf875d23e4aeaa84e")
        boxTophTwo.innerText = elem.name
        boxTopP.innerText = elem.country
        headerRightImg.setAttribute('src', './img/postsImg/point.png')
        midBoxImg.setAttribute('src', elem.postImages)
        boxRightimg.setAttribute('src', './img/postsImg/comment.png')
        boxRightImg.setAttribute('src', './img/postsImg/like.png')
        boxLeftImg.setAttribute('src', './img/postsImg/send.png')
        favoritSpan.innerText = '888'
        favoritP.innerText = 'likes'
        commitSpan.innerText = 'Nickname'
        commitP.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis... more'

        post.append(boxPost,)
        boxPost.append(boxPostHeader, midBox, boxFooter)
        boxPostHeader.append(headerLeft, headerRight)
        headerLeft.append(headerImg, boxTopTxt)
        boxTopTxt.append(boxTophTwo, boxTopP)
        headerRight.append(headerRightImg)
        midBox.append(midBoxImg)
        boxFooter.append(boxFooterTop, favorit, commit)
        boxFooterTop.append(boxTopRight, boxLeftImg)
        boxTopRight.append(boxRightImg, boxRightimg)
        favorit.append(favoritSpan, favoritP)
        commit.append(commitSpan, commitP)
    })
}
