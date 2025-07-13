const form = document.getElementById("form")
const table = document.getElementById("usertable").getElementsByTagName("tbody")[0]


form.addEventListener("submit", function (event) {

    event.preventDefault()



    const formData = new FormData(form)

    let user = {
        name: formData.get("name"),
        age: formData.get("number"),
        email: formData.get("Email"),
        gender: formData.get("gender"),
        course: formData.get("course")
    }

    const row = table.insertRow()

    row.innerHTML = `
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td>${user.email}</td>
    <td>${user.gender}</td>
    <td>${user.course}</td>
    <td>
    <button onclick="deleteBtn(this)">delete</button>
        </td>
    `
    form.reset()

   
})

function deleteBtn(btn){
    btn.parentNode.parentNode.remove()
}


