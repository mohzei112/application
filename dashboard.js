

users= [];

fetch ("data.json")
.then ( data => data.json())
.then (data => {
    users = [...data];
    load(users);
})

const load = data => {
    const elemU = document.querySelector("#users");
    elemU.innerHTML = "";

    data.forEach(user => {

        let {id,title,price,description,category,image,rating} = user;
        
        elemU.innerHTML += 
        `<li ${id}>
         
         <h3>${title}</h3> 
         <h2>${category}</h2>
         <h5>${rating}</h5>
         
         <p>${description}</p>
         <img src= '${image}'>
         <span>${price}</span>
         
        </li>`
        
    });
}