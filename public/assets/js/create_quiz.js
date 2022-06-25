document.addEventListener('DOMContentLoaded', function(){
    let keyword = $('#kategori_select').find('option:selected').val();
    getKategoriId(keyword);

    $("#kategori_select").change(function() {
        keyword = $('#kategori_select').find('option:selected').val();
        getKategoriId(keyword)
    });

})

const getKategoriId = (keyword) => {
    $.ajax({
        url: "http://localhost:3000/category/quiz/"+keyword,
        method: "GET",
        success: (kategori) => {
            let select = ``;

            kategori.forEach( el => {
                select += `<option value="${el.id}">${el.title}</option>`
            });

            console.log(select)

            $('#list_quiz').html(select);
        },
        error: (err) => {
            console.log(err)
        }
    })
}