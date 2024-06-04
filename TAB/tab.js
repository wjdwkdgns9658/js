window.onload = function(){
    const tabbtn = document.querySelectorAll("#tab li");
    tabbtn.forEach(function(ele, idx){
        ele.addEventListener('click', function(){
            // this.classList = 'on'; 초기화
            // this.classList += ' on';


            const sibling = this.parentElement.children;
            //나의 부모의 자식들(html object)
            for (let sibling of sibling) {
                sibling.classList.remove('on');
            }



            this.classList.add('on');
        })
    })
}