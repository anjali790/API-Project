const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const result = document.querySelector('.user-github')

btn.addEventListener('click', function (event) {
    event.preventDefault();

    const originalUserName = input.value.split(' ').join();

    fetch("https://api.github.com/users/" + originalUserName)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let html = `<div class="displayDiv">
            <h1 class="userName">${data.name}</h1>
            <div class="displayInnerDiv">
            <p><i class="fa-solid fa-users"></i>  ${data.followers} <span>followers . ${data.following} following</span></p>
            </div>
            <p class="bio"><span>Bio: </span> ${data.bio}</p>
            <a href="https://www.github.com/${originalUserName}">
            <img src="${data.avatar_url}"></div>`

            result.innerHTML = html;
        });
});