//user interactions and display renderBookmarkLists//

'use strict';

// const bookmarkList = (function() {

//     //render to DOM

//     function renderBookmarkList() {
//         $('.js-bookmark-list').empty();
//         if(store.adding) {
//           const bookmarkForm = generateCreateBookmarkView();
//           $('.js-bookmark-list').prepend(bookmarkForm);
//         }
//         handleAddBookmarkClicked();
//         handleDeleteBookmarkClicked();
//         let items = store.items;
//         const bookmarkString = generateBookmarkString(items);
//         $('.js-bookmark-list').append(bookmarkString);
  
//       }

//     //different state views  

//     function generateBookmarkElement(item) {
//       return `
//       <li class="bookmark-list-items js-bookmark-list-items" data-item-id="${item.id}" aria-label="click to expand bookmark item">
//         <h3 class="list-title js-list-title">${item.title}</h3>
//         <a class="list-link js-list-link" href="${item.url}" target="_blank">${item.url}</a>
//         <section class="star-rating js-star-rating">
//           <p class="star-number js-star-number" aria-label="${item.rating} star">${item.rating} Star</p>
//         </section>
//       </li>`;
//     }
  
  
//     function generateBookmarkString(bookmarkList) {
//       const items = bookmarkList.map((item) => generateBookmarkElement(item));
//       return items.join('');
//     }
  
  
//     function generateExpandedView(item){
//       return `
//         <li aria-label="click to expand bookmark"class="expand-bookmark-view js-expand-bookmark-view" data-item-id="${item.id}">
//           <h2>${item.title}</h2>
//           <form id="js-close-expanded" class="header-right js-header-right">
//           <p class="expanded-stars js-expanded-stars">${item.rating} Star</p>
//             <button class="close-button js-close-button" type="submit" aria-label="click to close ${item.title} expanded view">Close</button>
//           </form>
//           <p class="long-desc js-long-desc">${item.desc}</p>
//           <a class="bookmark-link js-bookmark-link" href="${item.url}" target="_blank">${item.url}</a>
//           <div> 
//               <a class="bookmark-link js-bookmark-link" href="${item.url}" target="_blank">
//               <button class="visit-site-button js-visit-site-button" aria-label="click to visit ${item.title} website">Visit</button></a>
//           </div>
//           <form id="js-delete-bookmark">
//             <button class="delete-bookmark-button js-delete-bookmark-button" type="submit" aria-label="click to delete ${item.title} website">Delete</button>
//           </form>
//         </li>`;
//     }
  
  
//     function generateCreateBookmarkView() {
//       return `
//       <li class="create-bookmark-view js-create-bookmark-view" aria-live="polite">
//         <h2>Create a Bookmark</h2>
//           <form for="close-button" id="js-close-expanded" class="close-header-right js-header-right" id="close-button">
//             <button class="create-close-button js-close-button" type="submit" aria-label="click to close expanded view">Close</button>
//           </form>
//           <form id="js-add-bookmark">
//             <label for="add-bookmark-title"></label>
//             <input class="add-bookmark add-bookmark-title js-add-bookmark-title" id="add-bookmark-title" name="title" type="text" placeholder="Title" required aria-label="please enter a name for your bookmark">
//             <label for="add-bookmark-link"></label>
//             <input class="add-bookmark add-bookmark-link js-add-bookmark-link" id="add-bookmark-link" name="url" type="url" aria-label="please enter a url for your bookmark"value="http://" placeholder="http://url-address.com" required>
//             <label for="add-bookmark-desc"></label>
//             <input class="add-bookmark add-bookmark-desc js-add-bookmark-desc" id="add-bookmark-desc" name="desc" type="text" placeholder="Optional description" aria-label="optional description for your bookmark"align="top">
//             <div id="add-star-rating js-add-star-rating">
//               <div class="add-bookmark rate-radio-button js-rate-radio-buttons" aria-label="please select rating for new bookmark">
//                 <fieldset>
//                   <Legend required>Star</Legend>
//                   <label aria-label="select rating 5 star"for="5-stars">5</label>
//                   <input type="radio" id="5-stars"
//                     name="rate" value="5" required>
//                   <label aria-label="select rating 4 star"for="4-stars">4</label>
//                   <input type="radio" id="4-stars"
//                     name="rate" value="4">
//                   <label aria-label="select rating 3 star"for="3-stars">3</label>
//                   <input type="radio" id="3-stars"
//                     name="rate" value="3">
//                   <label aria-label="select rating 2 star"for="2-stars">2</label>
//                   <input type="radio" id="2-stars"
//                     name="rate" value="2">
//                   <label aria-label="select rating 1 star" for="1-stars">1
//                   <input type="radio" id="1-star"
//                     name="rate" value="1">
//                 </fieldset>
//               </div>
//             </div>
//             <div>
//               <button class="add-button-submit js-add-button-submit" type="submit" aria-label="click to add bookmark">Add</button>
//             </div>
//           </form>
//         </li>`;
//     }
  
  
//     //user interactivity

//     function handleCreateBookmarkClicked() {
//       $('#js-create-bookmark-form').on('submit', (function(event) {
//         event.preventDefault();
//         store.adding = true;
//         renderBookmarkList();
//       }));
//     }
  
  
//     function handleCloseBookmarkClicked() {
//       $('#js-close-expanded').on('click', '.js-bookmark-list-button', event => {
//         event.preventDefault();
//         const id = getItemIdFromElement(event.currentTarget);
//         let item = store.findById(id);
//         store.closing = true;
//         if (store.closing && item.id === id) {
//           renderBookmarkList();
//           store.closing = false;
//         }
//       });
//     }
  
  
//     function handleAddBookmarkClicked() {
//       $('#js-add-bookmark').on('submit', (function(event) {
//         event.preventDefault();
//         const title = event.currentTarget.title.value;
//         const url = event.currentTarget.url.value;
//         const desc = event.currentTarget.desc.value;
//         const rating = event.currentTarget.rate.value;
  
//         api.createItem(title, url, desc, rating)
//             .then(function(bookmark) {
//                 console.log(bookmark);
//                 store.addItem(bookmark);
//                 store.adding = false;
//                 renderBookmarkList();
//             });
//       }));
//     }
  
  
//     function handleExpandViewClicked() {
//       $('.js-bookmark-list').on('click', '.js-bookmark-list-items', event => {
//         const id = getItemIdFromElement(event.currentTarget);
//         let item = store.findById(id);
//         $(event.currentTarget).remove();
        
//         if(item.id === id) {
//           const expandView = generateExpandedView(item);
//           $('.js-bookmark-list').prepend(expandView);
//           store.expanded = true;
//           //renderBookmarkList();
//         }
//       });
//     }
  
  
//     function handleDeleteBookmarkClicked() {
//       $('.js-bookmark-list').on('click', '.js-delete-bookmark-button', event => {
//         const id = $(event.currentTarget.parentElement.parentElement).data('item-id');
//         event.preventDefault();
//         api.deleteItem(id, () => {
//           store.findAndDelete(id);
//           renderBookmarkList();
//         });
//       });
//     }
  
  
//     function handleFilterByRatingClicked() {
//       $('.js-header-select').on('change', function(event) {
//         event.preventDefault();
//         const val = $(event.currentTarget).val();
//         store.filterByRating(val);
//         renderBookmarkList();
//       });
//     }
  
  
//     function getItemIdFromElement(item) {
//       return $(item)
//         .closest('.js-bookmark-list-items')
//         .data('item-id');
//     }
  
  
//   //bind all functions

//     function handleBookmarkList() {
//       handleExpandViewClicked();
//       handleCreateBookmarkClicked();
//       handleFilterByRatingClicked();
//       handleCloseBookmarkClicked();
//     }
  
//     return {
//       handleBookmarkList,
//       renderBookmarkList
//     };
  
//   }());





const bookmark = (function () {

    // generating html for bookmarks in store
    function generateBookmark(obj) {
      if (obj.rating)
        return `
      <li class="js-item-elem" data-id="${obj.id}">
      <div aria-label="bookmark-title"data-id ="${obj.id}" class='bookmark-title'>${obj.title}</div>
      ${expandedHelper(obj)}
      <div class='star-row'>${starMaker(obj)}</div>
      <button aria-label="delete" class='delete-button' data-id="${obj.id}">Delete</button>
      </li>
      `;
      else
        return `
        <li class="js-item-elem" data-id="${obj.id}">
      <div aria-label="bookmark-title" data-id ="${obj.id}" class='bookmark-title'>${obj.title}</div>
      ${expandedHelper(obj)}<br>
      <button aria-label="delete" class='delete-button' data-id="${obj.id}">Delete</button>
      </li>
        `;
    }
  
    function generateBookMarkList(bookmarks) {
      const input = bookmarks.map(i => generateBookmark(i));
      return input.join('');
    }
  
    function getItemIdFromElement(item) {
      return $(item)
        .data('id');
    }
  
    function generateError(message) {
      return `
        <section class='error-section'>
       <button aria-label="close" id="cancel-error">X</button>
        <h4>${message}</h4>
        </section>
        `;
  
    }
  
  
    function handleErrorExit() {
      $('.error-container').on('click', 'button', function (event) {
        store.error = null;
        render();
      });
    }
  
    function addHelper(obj) {
      if (obj.adding) {
        return `
        <form banner='form' id='add-bookmark-form' class="">
        <div class="input-section" aria-label="create-bookmark">
          <label for="title">Title</label><br>
          <input type="text" id="title" placeholder="  title" name='title' ><br>
          <label for="url">URL</label><br>
          <input type="url" id="url" placeholder="  url" name='url' ><br>
          <label for="description">Description</label><br>
          <input type="text" id="description" placeholder="  description" name='desc' ><br>
          <label for="rating">Rating</label><br>
          <input type="number" id="rating" placeholder=" 1-5" name='rating'  min="1" max="5" ><br>
          <button class="submit-button" type="submit">Submit</button>
          </div>
    </form>
        `;
      } else {
        return `<button id="add-bookmark">Add Bookmark</button>
        `;
      }
    }
  
    
    function expandedHelper(bookmark) {
      if (bookmark.expanded) {
        return `<div class="">${bookmark.desc}</div>
        <div class=""><a href="${bookmark.url}" target="_blank">Visit ${bookmark.title}!</a></div> `;
      } else
        return '';
    }
  
    function starMaker(obj) {
      switch (obj.rating) {
      case 1:
        return '<span class=star>★</span> ';
      case 2:
        return '<span class=star>★★</span> ';
      case 3:
        return '<span class=star>★★★</span> ';
      case 4:
        return '<span class=star>★★★★</span> ';
      default:
        return '<span class=star>★★★★★</span> ';
  
      }
    }
  
    // handles expanding the bookmarks
    function handleExpand() {
      $('.bookmark-list').on('click', 'div', function (event) {
        const id = getItemIdFromElement(event.currentTarget);
  
        store.lists.map(bookmark => {
          if (bookmark.id === id) {
            bookmark.expanded = !bookmark.expanded;
          }
          render();
        });
      });
    }
  
    // handle editing rating testing
    function handleEditRating() {
      $('.bookmark-list').on('click', '.star', function (event) {
        const id = getItemIdFromElement(event.currentTarget);
        const newData = $(event.currentTarget).find('.star').val();
  
        api.findAndUpdate(id, newData)
          .then((bookmark1) => {
            store.findAndUpdate(id, bookmark1);
            render();
          })
          .catch(err => {
  
            store.setError(err.message);
            render();
          });
      });
    }
  
  
    function handleDelete() {
      $('.bookmark-list').on('click', 'button', function (event) {
        const id = getItemIdFromElement(event.currentTarget);
  
        api.deleteBookmark(id)
          .then((bookmark1) => {
            store.findAndDelete(id, bookmark1);
            render();
          })
          .catch(err => {
  
            store.setError(err.message);
            render();
          });
      });
    }
  
  
    // handle drop down filter
  
    function handleDropDown() {
      $('.dropdown-filter').on('change', function (event) {
        const rate = $(':selected').val();
        store.minRating = rate;
        render();
      });
    }
  
  
    // handling adding bookmark
    function handleAddBookmark() {
      $('.button-section').on('submit', 'form', function (event) {
        event.preventDefault();
        const newBookmark = $(event.target).serializeJson();
  
        api.createBookmark(newBookmark)
          .then(newBookmark1 => {
            store.addBookmark(newBookmark1);
            store.adding = false;
            render();
          })
          .catch(err => {
            store.setError(err.message);
            render();
          });
  
      });
    }
  
    $.fn.extend({
      serializeJson: function () {
        const formData = new FormData(this[0]);
        const o = {};
        formData.forEach((val, name) => {
          if (name === 'rating' && val === '') {
            return;
          }
          o[name] = val;
        });
        return JSON.stringify(o);
      }
    });
  
    //sets store.adding = true
    function addButton() {
      $('.button-section').on('click', '#add-bookmark', function (event) {
        store.adding = true;
        render();
      });
    }
  
    function render() {
      let bookmarks2 = [...store.lists];
  
      if (store.minRating) {
        bookmarks2 = bookmarks2.filter(i => i.rating >= store.minRating);
      }
      const bookmarkString = generateBookMarkList(bookmarks2);
      const form = addHelper(store);
  
      if (store.error) {
        const errorMessage = generateError(store.error);
  
        $('.error-container').html(errorMessage);
      } else {
        $('.error-container').empty();
      }
  
  
      $('.button-section').html(form);
      $('.bookmark-list').html(bookmarkString);
    }
  
  
    function eventListener() {
      handleAddBookmark();
      addButton();
      handleExpand();
      handleDelete();
      handleErrorExit();
      handleDropDown();
      handleEditRating(); // handle edit test
    }
  
  
    return {
      eventListener,
      render
    };
  
  
  }());