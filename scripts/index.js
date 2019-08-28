//start the page, call other js files//

'use strict';

$(document).ready(function () {
    bookmark.eventListener();
  
    api.getBookmark()
      .then((items) => {
        items.forEach((item) => 
            store.addBookmark(item));
            bookmark.render();
        })
      .catch(err => console.log(err.message));
  });