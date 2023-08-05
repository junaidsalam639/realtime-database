
















































// import { auth , database } from "./firebase.mjs";
// import { getDatabase , ref , set , child , get} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";



// let input = document.getElementById('input');
// document.getElementById('add').addEventListener('click' , ()=>{

//     set(ref(database , 'users/' + input.value), {
//         user : input.value
//       });
//     })
    
//     const dbRef = ref(getDatabase());
//     get(child(dbRef, `users/${input.value}`)).then((snapshot) => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//         for(let key in snapshot.val()){
//            console.log(snapshot.val()[key].user);

//           document.getElementById('list').innerHTML += ` 
//           <li>
//                 <p>${snapshot.val()[key].user}</p>
//                 <button onclick='edit("${snapshot.val()[key].user}")'>Edit</button>
//                 <button onclick='dele("${snapshot.val()[key].user}")'>Delete</button>
//           </li>`
//         }
        
//       } else {
//         console.log("No data available");
//       }
//     }).catch((error) => {
//       console.error(error);
//     });

// function edit(e){
//     console.log(e);
//     let disable = document.getElementById('disable');
//     disable.innerHTML += `<input type="text" id="disable" value='${e}'></input><br>`
// }

// function dele(e){
//     console.log(e);
// }

// window.edit = edit
// window.dele = dele



