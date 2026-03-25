import client_data from "./resource/database/client.json" with { type: "json" };

let userRepo = [...client_data];

function renderUserList(userRepo) {
    let userTableBodyHtml = document.getElementById("userList");
    let content = "";

    for (let i = 0; i < userRepo.length; i++) {
        let currentUser = userRepo[i];

        let currentContent =
            "<tr>\n" +
            "   <td>" + currentUser.id + "</td>\n" +
            "   <td>" + currentUser.name + "</td>\n" +
            "   <td>" + currentUser.birthYear + "</td>\n" +
            "   <td>" + currentUser.province + "</td>\n" +
            "   <td>" + currentUser.city + "</td>\n" +
            "</tr>";

        content += currentContent;
    }

    userTableBodyHtml.innerHTML = content;
}

function deleteUser() {
    userRepo.pop();
    renderUserList(userRepo);
}

function addUser() {
    let name = document.getElementById("name").value;
    let birthYear = document.getElementById("birthYear").value;
    let province = document.getElementById("province").value;
    let city = document.getElementById("city").value;

    if (!name || !birthYear || !province || !city) {
        alert("Nhập đầy đủ!");
        return;
    }

    let newUser = {
        id: userRepo.length + 1,
        name: name,
        birthYear: Number(birthYear),
        province: province,
        city: city
    };

    userRepo.push(newUser);
    renderUserList(userRepo);
}

function searchUser() {
    let keyword = document.getElementById("search").value.toLowerCase();

    let filtered = userRepo.filter(function(user) {
        return user.name.toLowerCase().includes(keyword);
    });

    renderUserList(filtered);
}

window.deleteUser = deleteUser;
window.addUser = addUser;
window.searchUser = searchUser;

renderUserList(userRepo);