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

nav_data[0]["gnb_li_a"]

let mygnb ="";
for(var liea = 0; liea < nav_data.length; liea++){
       mygnb += nav_data[liea].gnb_li_href;
       }

   console.log(mygnb);

let mygnb2 ="";
for(var v in nav_data[0]){
        mygnb2 += nav_data[0][v];
        }
   
   console.log(mygnb2);
      