//my code 

const URL = "http://localhost:3000/games"
//Get request using fetch
function getGames(){
    return fetch(URL)
    .then(res => res.json())
    .then(sport => sport.forEach(value =>{
        console.log(value.name)
//calling the container div element in our html by its ID
        let container2=document.createElement('div')
        let container1 = document.getElementById('cont')
        container1.append
//Creating an empty element and assigning it the name value, then appending it to our html doc
        let funGames = document.createElement('p')
        funGames.textContent=value.name
        let container = document.getElementById('contain')
        container.appendChild(container2)
        container2.appendChild(funGames)
//creating a click function whereby when a name is clicked, it displays the image assigned to the name
        funGames.addEventListener('click', ()=> {
            let gaming = document.createElement('img')
            gaming.src=value.image
            container2.appendChild(gaming)
//Creating an empty element and assigning it the description value. when a name is clicked, the description appears
            let view=document.createElement('p')
        view.innerText=`Description: ${value.description}`
        container2.appendChild(view)
//Creating an empty element and assigning it the description value. when a name is clicked, the Runtime appears
        let watch=document.createElement('p')
        watch.innerText=`Runtime: ${value.runtime}`
        container2.appendChild(watch)
//Creating a button for booking a game
            let button = document.createElement('button')
            button.innerText="Book Game"
            container2.appendChild(button)
            button.addEventListener('click', ()=> {
                let show = document.createElement('p')
                show.innerText="You have successfully booked your game..!"
                container2.appendChild(show)
                let endline=document.createElement('p')
            endline.innerText="---------------------------------------------------------------------------------------------------------------------------"
            container2.appendChild(endline)
            },{once:true})

//Creating an update button
         let button2=document.createElement('button')
         button2.setAttribute('id','update-btn')
         button2.innerText="Update Game"
         container2.appendChild(button2)
         button2.addEventListener('click', ()=> {
                let name=document.getElementById('name').value
                let describe=document.getElementById('Description').value
                let run=document.getElementById('run').value
                let image=document.getElementById('imageUrl').value

                 let id=value.name

        fetch(`${URL}/${id}`,{
               method:"PUT",
                headers:{
                        "Content-Type":"application/json","Accept":"application/json" 
                    },
                body:JSON.stringify({
                        name:name,
                        description:describe,
                        runtime:run,
                        image:image
                })
        })
              

         })



//Creating a delete button
            let button1=document.createElement('button')
            button1.setAttribute('id','delete-btn')
            button1.innerText="Delete Game"
            container2.appendChild(button1)
            
            button1.addEventListener('click', ()=> {
                let id=value.id
                fetch(`${URL}/${id}`,{
                        method: "DELETE",

                        headers:{
                                "Content-Type": "application/json", "Accept":"application.json"

                        }

                })
                


            },{once:true})

            

        },{once:true})

    }))
}

document.addEventListener('DOMContentLoaded', getGames)

//Creating the Add button

let inputs=document.getElementById('form')
inputs.addEventListener('submit', (event)=>{
        let name=document.getElementById('name').value
        let describe=document.getElementById('Description').value
        let run=document.getElementById('run').value
        let image=document.getElementById('imageUrl').value

        fetch(URL,{
                method:"POST",
                headers:{
                        "Content-Type":"application/json","Accept":"application/json" 
                    },
                body:JSON.stringify({
                        name:name,
                        description:describe,
                        runtime:run,
                        image:image
                })
        })

})