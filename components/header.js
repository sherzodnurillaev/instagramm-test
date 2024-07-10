function header() {
    let header = document.querySelector('header')

    header.innerHTML = `
            <img src="./img/imgPost/Logo (1).png" alt="" style="width: 100px;">

            <form>
                <input type="text" placeholder="Search">
            </form>

            <div class="header_icon">
                <img src="./img/home.png" alt="" style="width: 20px;">
                <img src="https://i.scdn.co/image/ab67616d00001e022a038d3bf875d23e4aeaa84e" alt="" style="width: 30px; border-radius: 50px;">
            </div>
    `
}

export { header }
