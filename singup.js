import { auth, db } from "./firebase.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { addDoc , collection } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


document.getElementById('singup').addEventListener('click', () => {
    if (email == '' || password == '') {
        Swal.fire({
            icon: 'warning',
            title: 'Error!',
            text: 'Please Fill The Input!',
        })
    }
    else {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                const uid = user.uid;
                console.log(user.uid);
                console.log(uid);

                try {
                    const docRef = await addDoc(collection(db, "users-E-A-D-U"), {
                       email : email,
                       password : password,
                    });
                    console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
                    setTimeout(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Successs',
                            text: 'SingUp successfully!',
                        }).then(()=>{
                            location.href = './login.html'
                        })
                    }, 2000);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
            });
    }
})
