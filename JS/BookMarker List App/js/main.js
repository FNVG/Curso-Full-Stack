//Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
   
    e.preventDefault();
    //Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    console.log("siteUrl: "+siteUrl);
    //Prevent form from submitting
   
    if(!siteName || !siteUrl) {
       alert('Favor complete todos los campos');
       return false;     
    }

    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    const regex = new RegExp(expression);


    if(!siteUrl.match(regex)){
        alert('Favor complete con una url valida');
        return false;
    }

    var bookmark = {
        name: siteName,
        url: siteUrl
    }

   if(localStorage.getItem('bookmarks') == null) {
        //Init array
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   } else {
        //Get bookmarks from localStore
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //add bookmarks to array
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    
    //Re-fetch bookmarks
    fetchBookmarks();
}

//Delete bookmarks
function deleteBookmark(url){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    for (var i=0; i< bookmarks.length; i++){
        bookmarks.splice(i,1);
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    //Re-fetch bookmarks
    fetchBookmarks();
}


function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
    var bookmarksResults = document.getElementById('bookmarksResults');

    bookmarksResults.innerHTML = '';

    for (var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        console.log("url: "+bookmarks[i].url);
        bookmarksResults.innerHTML += '<div class="well">'+
                                        '<h3>'+name+
                                        '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> '+
                                        '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger"  href="#">Delete</a>'+
                                        '</h3>'+
                                        '</div>'
                                        ;
    }
}