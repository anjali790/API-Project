const btn = document.querySelector('.btn');
const display = document.querySelector('.display');
const tableData = document.querySelector('.tableData');

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch(`https://api.covid19api.com/summary`)
    
    .then(res=>res.json())
    .then(data=>{
        console.log(data)

            let html = `
            <td class="data">${data['Global']['TotalConfirmed']}</td>
            <td class="data">${data['Global']['TotalRecovered']}</td>
            <td class="data">${data['Global']['TotalDeaths']}</td>
            `
    
            tableData.innerHTML= html;

    });
    
});