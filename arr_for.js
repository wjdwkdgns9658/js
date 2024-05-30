const nav_data = [
    {
        gnb_li_a : "회사소개",
        gnb_li_href : "./comapny.html"
    },
    {
        gnb_li_a : "제품소개",
        gnb_li_href : "./product.html"
    },
    {
        gnb_li_a : "커뮤니티",
        gnb_li_href : "./board.html"
    },
    {
        gnb_li_a : "인트라넷",
        gnb_li_href : "./intro.html"
    }
]
// console.log(nav_data[1].gnb_li_href);
// console.log(nav_data[1]["gnb_li_href"]);  //속성명을 문자열로 지정하여 접근

 let mygnb ="";
 for(var liea = 0; liea < 4; liea++){
        mygnb += nav_data[liea].gnb_li_href;
        }

    console.log(mygnb);

let mygnb2 ="";
for(var v in nav_data){
        // mygnb2 += nav_data[liea].gnb_li_href;
        //console.log("forin문처리 : ",v);
        mygnb2 += `${nav_data[v].gnb_li_href}\n`;
        }

        console.log(mygnb2);
   

// document.getElementsByClassName("gnb").length; //HTML 문서에서 class가 "gnb"인 모든 요소의 개수를 반환
// document.querySelectorAll(".gnb").length; 

// console.log(nav_data[2].gnb_li_a)

// console.log("한번만 실행");


// for(var i = 0; i < 5; i++ ){
// console.log("난 다섯번 실행");
// }

// let count = 10;
// count++; //후치연산 count += 1 /++count(전치연산)
// count++;
// count++;
// count++;

// let count = 10;
//     count +=100; 
//     count +=1; //111
//     ++count;  //112
//     count++;  //112

// console. log(count); //113

// let count = 10;
//     count +=100; 
//     count =1; //111
//     ++count;  //112
//     count++;

// let multy = 10;
//     multy = multy * 3; // multy *= 3; 곱하기(*)
//     multy = multy / 3; // multy /= 3; 나누기(/)

// //문자연산식
// let mystudy = "리액트"
//     mystudy = "리액트" + "뷰" ; //mystudy += "뷰" ;

let startjs = 10; 
    startjs += 10;   //20
    startjs += "원"; //text가 들어가는 순간 문장이 된다
    startjs += 100; //10원100
    startjs += 100; //10원100100


let meg = "";   
for(var i = 0; i < 10; i++){
    meg += "나 \"열번\"나오게 해줘 \n";
}

console.log(meg)