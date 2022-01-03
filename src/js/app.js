var catList = document.getElementById('categories');
var apiList = document.getElementById('api-list');
var nav = document.getElementById('nav');

var category = [];

let url = new Request('public_api.json');
fetch(url)
    .then(res => res.json()).then(data => {
        data.entries.forEach(element => {
            if(!(category.includes(element.Category))){
                category.push(element.Category)            
            }
            // cat.innerHTML += `<li> ${element.Category} </li>`
        });
        category.forEach(element => {
            // cat.innerHTML += `<li class="categoryClass cursor-pointer transition-all truncate hover:bg-slate-600 hover:rounded hover:pl-3"> ${element} </li>`
            let li = document.createElement('li');
            li.className = "categoryClass cursor-pointer transition-all truncate hover:bg-slate-600 hover:rounded hover:pl-3";
            li.appendChild(document.createTextNode(element));
            catList.appendChild(li);
        });
    });


let CAT_URL = "https://api.publicapis.org/entries?category=";

catList.addEventListener('click', (e) => {
    apiList.innerHTML = "";
    let CAT_TEXT = e.target.innerText; 
    fetch(CAT_URL + CAT_TEXT)
    .then(response => response.json())
    .then(data => {
        data.entries.forEach(datum => {
            apiList.innerHTML += `
            <div class="container mx-auto">
            <li class="mx-2 my-5 bg-slate-100 flex rounded-2xl w-[85%] ">

                <div class="bg-slate-900 p-6 text-slate-200 rounded-l-2xl">
                    <h5> <strong>API:</strong>           </h5>
                    <p> <strong>Description:</strong>    </p>
                    <p> <strong>Auth:</strong>           </p>
                    <p> <strong>HTTPS:</strong>          </p>
                    <p> <strong>Cors:</strong>           </p>
                    <p> <strong>Link:</strong>           </p>
                    <p> <strong>Category:</strong>           </p>
                </div>
                <div class="ml-6 p-6 overflow-x-hidden" >
                    <h5>                    <b> ${datum.API} </b>       </h5>
                    <p class="truncate">        ${datum.Description}    </p>
                    <p>                         ${datum.Auth} -         </p>
                    <p>                         ${datum.HTTPS}          </p>
                    <p>                         ${datum.Cors}           </p>
                    <p class="truncate"><a class="text-blue-600 cursor-pointer" href="${datum.Link}"> ${datum.Link}       </a></p>
                    <p>                         ${datum.Category}       </p>
                </div>
            </li>
            </div>
            `;
        })
    })
})