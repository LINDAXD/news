let news = [];
const getLatestNews = async() => { //await를 사용하면 써 줘야 함
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`);

let header = new Headers({"x-api-key":"5S0-ZbVwEuPY3VCOCZiQRbrO0tfE2ShW7_38rQiAFmk",});

let response = await fetch(url,{headers:header}); //ajax, http, fetch
let data = await response.json();
news = data.articles;
console.log(news);

render();

};

// const render = () =>{
//     let newsHTML = "";
//     newsHTML = news.map((news) => {
//         return `<div class="row news">
//         <div class="col-lg-4">
//             <img class="news-img-size" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfIejwc4oyTiimF71tHWNsVAuKyFbRihAr_A&usqp=CAU" alt="">
//         </div>
//         <div class="col-lg-8">
//             <h2>코딩알려주는 누나 전격 수업 오픈하다!!</h2>
//             <p>코딩알려주는 누나가 자바스크립트 강의를 오픈했다.</p>
//             <div>
//                 KES * 2023-02-15
//             </div>
//         </div>
//     </div>`;
//     }).join('');
//     console.log(newsHTML);

//     document.getElementById("news-board").innerHTML=newsHTML;
// };


const render = () =>{
        let newsHTML = "";
        newsHTML = news.map((news) => {
            return `<div class="row news">
            <div class="col-lg-4">
                <img class="news-img-size" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfIejwc4oyTiimF71tHWNsVAuKyFbRihAr_A&usqp=CAU" alt="">
            </div>
            <div class="col-lg-8">
                <h2>내용</h2>
                <p>내용</p>
                <div>
                    KES * 2023-02-15
                </div>
            </div>
        </div>`;
        }).join('');
        console.log(newsHTML);
    
        document.getElementById("news-board").innerHTML=newsHTML;
    };

getLatestNews();



//setTimeout(함수, 시간) : 시간 딜레이 함수, 시간
//stack에서
//대기실 web api 로 보냄 - settime , ajax -> 서버 , event (유저가 클릭할때까지 기다릴수없기에) 
//queue로 다시 보냄
//stack로 다시 보냄

//async / await를 이용해 기다려 줘야 함 