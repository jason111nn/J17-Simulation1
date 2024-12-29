const newsData = {
    1: { src: './img/news1.jpg', title: 'News 1', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, soluta veritatis!"},
    2: { src: './img/news2.jpg', title: 'News 2', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quidem tempora ad consequatur perferendis nemo excepturi quis minima."},
    3: { src: './img/news3.jpg', title: 'News 3', text: "Lorem ipsum dolor sit amet, elit. Veniam, soluta consectetur adipisicing veritatis!"},
    4: { src: './img/news4.jpg', title: 'News 4', text: "voluptatum repudiandae, eveniet dolore iste perferendis aliquid tempore quisquam voluptatem dolores dicta expedita ad corrupti hic incidunt exercitationem?"},
    5: { src: './img/news5.jpg', title: 'News 5', text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores voluptatibus quis minima."}
}
function News(number) {
    const news = newsData[number]
    $(".news-img").attr('src', news.src)
    $(".news-h5").text(news.title)
    $(".news-p").text(news.text)
}