document.addEventListener('DOMContentLoaded', function(){
    $.ajax({
        url: "http://localhost:3000/account",
        method: "GET",
        success: (users) => {
            let i = 1;
            let list = ``;
            let role = ''

            users.forEach( user => {
                if(user.role == 1){
                    role = "admin"
                }
                list += `
                <tr>
                    <td>${i}</td>
                    <td>${user.username}</td>
                    <td>${user.password}</td>
                    <td>${role}</td>
                </tr>
                `
                i++
            });

            $('tbody').html(list)

        },
        error: (err) => {
            console.log(400);
        }
    })
})