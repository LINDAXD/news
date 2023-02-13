const getLatestNews =()=>{
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`);

let header = new Headers({'x-api-key':'550-ZbVwEuPY3VCOCZiQRbrO0tfE2ShW7_38rQiAFmk'})

let reponse = fetch(url,{headers:header})
};

getLatestNews();



//setTimeout(함수, 시간) : 시간 딜레이 함수, 시간