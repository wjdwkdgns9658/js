let study = '프론트앤드';
// const myword = "그래 나도 한 번 " + study + " 해보자!";
const myword = `그래 나도 한 번 ${study} 해보자!`;
console.log(myword);


let Month = [2, 3, 7];
let Study = ['피그마', '리액트', '뷰'];
let Name = ['윤주연', '손흥민', '박지성'];

const myintroduce0 = `저는 ${Month[0]}개월간의 ${Study[0]} 공부를 한 ${Name[0]}입니다.`;
const myintroduce1 = `저는 ${Month[1]}개월간의 ${Study[1]} 공부를 한 ${Name[1]}입니다.`;
const myintroduce2 = `저는 ${Month[2]}개월간의 ${Study[2]} 공부를 한 ${Name[2]}입니다.`;

//console.log(myintroduce0, myintroduce1, myintroduce2);

const myarr = [
    ["네이버","http://www.naver.com"],
    ["다음","http://www.daum.com"],
    ["구글","http://www.google.com"]
]

console.log("첫번쨰 배열",myarr[0], typeof myarr[0],
            "첫번째배열의 첫번쨰값",myarr[0][0],typeof(myarr[0][0]) );

// console.log("<a href='http://www.naver.com'>네이버</>")
console.log(`<a href='${myarr[0][1]}'>${myarr[0][0]}</>`)
console.log(`<a href='${myarr[1][1]}'>${myarr[1][0]}</>`)
console.log(`<a href='${myarr[2][1]}'>${myarr[2][0]}</>`)

const myarrobj = {
    _month : [2,3,7],
    _Study : ['피그마', '리액트', '뷰'],
    _Name :  ['윤주연', '손흥민', '박지성']
}

console.log(myarrobj._Study[0])

// const gnb={
//     d1:{
//         text :"회사소개",
//         href : "/company.html"
//     },
//     d2:[
//         {
//             text :"ceo인사말",
//             href : "/ceo.html"
//         },
//         {
//             text :"조직도",
//             href : "/organ.html"
//         }
//     ]
    
// }


const gnb={
    d1:{
        text : "회사소개",
        href : "/company.html"
    },
    d2:[
        {
            text : "인사말",
            href : "/hello.html"
        },
        {
            text : "조직도",
            href : "/asd.html"
        }
    ]

}


console.log( `<a href="${gnb.d1.href}">${gnb.dl.text}</a>`)
console.log( `<a href="${gnb.d2[0].text}">${gnb.d2[1].text}</a>`)

