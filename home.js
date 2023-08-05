import { auth, database } from "./firebase.mjs";
import { getDatabase, set, ref, get, child, remove, update } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";




onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);

        let name = document.getElementById('name');
        let roll = document.getElementById('roll');
        let section = document.getElementById('section');
        let select = document.getElementById('select');


        let insert = document.getElementById('insert');
        let select1 = document.getElementById('select1');
        let update1 = document.getElementById('Update');
        let dele = document.getElementById('delete');

        // Data Add
        insert.addEventListener('click', () => {
            set(ref(database, "TheStudent/" + uid), {
                name: name.value,
                roll: roll.value,
                section: section.value,
                select: select.value,
            })
            .then(() => {
                alert('data stored successfully')
            })
            .catch((error) => {
                alert(error);
            })
        })

        // Data Edit
        select1.addEventListener('click', () => {
            const dbref = ref(database);

            get(child(dbref, "TheStudent/" + uid))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        name.value = snapshot.val().name;
                        roll.value = snapshot.val().roll;
                        section.value = snapshot.val().section;
                        select.value = snapshot.val().select;
                    }
                    else {
                        alert("No data found")
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        })


        // Data update

        update1.addEventListener('click', () => {
            update(ref(database, "TheStudent/" + uid), {
                name: name.value,
                roll : roll.value,
                section: section.value,
                select: select.value,
            })
                .then(() => {
                    alert('data update successfully')
                })
                .catch((error) => {
                    alert(error);
                })
        })



        // Data Delete

        dele.addEventListener('click', () => {
            remove(ref(database, "TheStudent/" + uid))

                .then(() => {
                    alert('data delete successfully')
                })
                .catch((error) => {
                    alert(error);
                })
        })

    } else {
       
    }
})









