
function news_click(){
    console.log("NEWS CLICKED")
    document.getElementById('content_trending').classList.toggle('hidden');
    document.getElementById('content_discussions').classList.toggle('hidden');
    console.log("NEWS CLICKED")
};

function discussions_click(){
    console.log("DISCUSSIONS CLICKED")
    document.getElementById('content_trending').classList.toggle('hidden');
    document.getElementById('content_news').classList.toggle('hidden');
    console.log("DISCUSSIONS CLICKED")
};
function trending_click(){
    console.log("TRENDING CLICKED")
    document.getElementById('content_news').classList.toggle('hidden');
    document.getElementById('content_discussions').classList.toggle('hidden');
    console.log("TRENDING CLICKED")
};
