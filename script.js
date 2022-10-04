
function displayImage(data){
    $('<img>', {
        src: data.url,
        height: '100%',
        width: '100%'
    }).appendTo('#image');
}

$.ajax({
    url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2022-10-03',
    method: 'get',
    success: displayImage
});