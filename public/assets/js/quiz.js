const render = (quiz) =>{
    let data = quiz;


	// inisialisasi variabel
	let length_quiz = (data.length)-1
    let count = 0;
	let id = null;
	let value = null;
	let idTrue = null;
	let answerTrue = 0;
	let result_chek = null;

	// melakukan pengecekan terhadap jumlah soal yang di kerjakan
	let cek_count = parseInt(localStorage.getItem('count'));
	if(cek_count>0){
		count = cek_count;
	}

	// query element
	let question = document.querySelector('#question');
	let answer = document.querySelectorAll(".answer")

	// menampilkan soal 
	inserData(count,question,answer,data);

	// memberikan event ketika tombol jawaban di tekan
	answer.forEach((el)=>{
		el.addEventListener('click',async function(){
			// mendapatkan data button
			value = this.getAttribute("answer")
            
            if(value == 1){
                answerTrue +=1
            }

            localStorage.setItem("answer_true",answerTrue);

			// menampilkan jawaban yang benar
			changeBg(idTrue,"show",answer);

			// menghitung nomor soal dan menyimpan pada local storage
			count+=1;
			localStorage.setItem('count',count);
			count = parseInt(localStorage.getItem('count'));
			
            console.log(count)

			// melakukan cek apakah soal sudah selesai

			if(count <= length_quiz){
				// mengganti soal dan mereset button
				await setTimeout(()=>{
				inserData(count,question,answer,data);
				changeBg(id,"reset",answer);
				},1000)
			}else{
				// mereset value
				localStorage.setItem('count',0);
				localStorage.setItem('answer_true',0);
				
                let allQuiz = (length_quiz)+1

				if(answerTrue == allQuiz ){
					answerTrue = "Semua"
                    console.log(answerTrue)
				}
				
			}

		})
	})

}



// fungsi untuk mengetahui jawaban yang benar
const chekAnswer = (data,count,id) =>{
	let is_answer = null;
	let chek = data.soal[count].jawaban[id].true;
	return chek;
}

// funsi untuk mengubah button
const changeBg = (id,option,el) =>{
	let dataColor = ["orangered","#e91e63","green","blueviolet"]

	if(option == "show"){
		for(let i=0;i<el.length;i++){
			if(id == i){
				
			}else{
				el[i].setAttribute("style","background-color:#212529")
			}
		}
	}else{
		for(let i=0;i<el.length;i++){
			el[i].setAttribute("style",`background-color:${dataColor[i]}`)
		}
	}
}

// fungsi untuk menampilakn soal
const inserData = (count,question,answer,data) => {
	question.setAttribute("src",`img/quiz/${data[count].image}`);
	
    let answers = JSON.parse(data[count].answer)
    let alfabet = ['a','b','c','d'];
    let key = null;
    let value = null;

	for(let i=0;i<alfabet.length;i++){
        key = `answer_${alfabet[i]}`
        value = `value_${alfabet[i]}`
		answer[i].setAttribute("answer", answers[i][value]);
		answer[i].innerHTML = answers[i][key];
	}	
}

// fungsi untuk mencari nilai yang benar
const trueValue = (answer) =>{
	for(let i=0;i<answer.length;i++){
		let valueAnswer = answer[i].getAttribute("answer");
		if(valueAnswer == 1){
			 return answer[i].getAttribute("id");
		}
	}
}

// get quiz question
const getQuiz = (id) => {
    $.ajax({
        url: "http://localhost:3000/quiz/data/"+id+"",
        method: "GET",
        success: (quiz) => {
            console.log(quiz.result);
            render(quiz.result)
        },
        error: (err) => {
            console.log(err);
        }
    })
}


// get params
let id = document.location.href;
    id = id.split('/');
    id = parseInt(id[4]);

getQuiz(id)
