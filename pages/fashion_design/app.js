trending_click()
function news_click(){
    document.getElementById('content_trending').classList.add('content_hidden');
    document.getElementById('content_discussions').classList.add('content_hidden');
    document.getElementById('content_news').classList.remove('content_hidden');
};

function discussions_click(){
    document.getElementById('content_trending').classList.add('content_hidden');
    document.getElementById('content_news').classList.add('content_hidden');
    document.getElementById('content_discussions').classList.remove('content_hidden');
};
function trending_click(){
    document.getElementById('content_news').classList.add('content_hidden');
    document.getElementById('content_discussions').classList.add('content_hidden');
    document.getElementById('content_trending').classList.remove('content_hidden');
};
