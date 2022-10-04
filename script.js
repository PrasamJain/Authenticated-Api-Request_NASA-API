
function displayImage(data){
    // $('<img>', {
    //     src: data.url,
    //     height: '100%',
    //     width: '100%'
    // }).appendTo('#image');

    var img = $(document.createElement('img'));       //another method (efficent)
    img.attr('src', data.url);
    img.attr('height', '100%');
    img.attr('width', '100%');
    img.appendTo('#image');
}

$.ajax({
    url: 'https://api.nasa.gov/planetary/apod',
    method: 'get',
    success: displayImage,
    data: {
        api_key: 'DEMO_KEY',
        date: '2018-06-05'
    }
});