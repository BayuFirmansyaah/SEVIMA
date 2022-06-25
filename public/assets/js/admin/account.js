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
                    <td> 
                        <a href="/admin/delete/account/${user.id}" onclick="return confirm('apakah anda yakin ingin menghapus data ini ?')" class="btn btn-danger">Delete</a>
                    </td>
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