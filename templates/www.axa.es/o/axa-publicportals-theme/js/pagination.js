
$(document).ready(function() {
  if(typeof DATA_SOURCE !== 'undefined'){
    let dataSourceLength = DATA_SOURCE.length;
    $('#list').pagination({
      dataSource: DATA_SOURCE,
      pageSize: 1, //here put number of items per page,
      pageRange: 1,
      callback: function(data, pagination) {
        // template method of yourself
        var html = __createRoomCard(data);
        $('#Z').html(html);
      },
      afterPaging: function() {
          let total = dataSourceLength;
          let active = $('.paginationjs-page.active').attr('data-num');
          if(active == 1) {
              $('.paginationjs-prev a').html('<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 15L2 8L9 1" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round"/></svg>');
              $('.paginationjs-next a').html('<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L8 8L1 15" stroke="#00008F" stroke-width="1.5" stroke-linecap="round"/></svg>');
          }else {
              if(active == total) {
                  $('.paginationjs-prev a').html('<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 15L2 8L9 1" stroke="#00008F" stroke-width="1.5" stroke-linecap="round"/></svg>');
                  $('.paginationjs-next a').html('<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L8 8L1 15" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round"/></svg>');
              }else {
                  $('.paginationjs-prev a').html('<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 15L2 8L9 1" stroke="#00008F" stroke-width="1.5" stroke-linecap="round"/></svg>');
                  $('.paginationjs-next a').html('<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L8 8L1 15" stroke="#00008F" stroke-width="1.5" stroke-linecap="round"/></svg>');
              }
          }
      }
    })
  }
  
});