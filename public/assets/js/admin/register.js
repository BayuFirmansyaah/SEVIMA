window.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = form.username.value;
        const password = form.password.value;
        const r_password = form.r_password.value;
        const role = form.role.value;

        const user ={username, password, r_password, role};

        $.ajax({
            url: "http://localhost:3000/account",
            method: "POST",
            dataType: "application/json",
            data: user,
            success: (user) => {
                $('#alert').html(
                    `<div class="alert alert-success alert-dismissible fade show mt-5" role="alert">
                        <strong>Success Register Account</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`
                )
            },
            error: (err) => {
                if(err.status == 400){
                    const result = JSON.parse(err.responseText)
                    console.log(result.message);
                    
                    $('#alert').html(
                        `<div class="alert alert-danger alert-dismissible fade show mt-5" role="alert">
                            <strong>${result.message}</strong>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`
                    )
                }else if( err.status == 200){
                    $('#alert').html(
                        `<div class="alert alert-success alert-dismissible fade show mt-5" role="alert">
                            <strong>Success Register Account</strong>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`
                    )

                    form.username.value = ""
                    form.password.value = ""
                    form.r_password.value = ""
                }

            }
        })
    })
})