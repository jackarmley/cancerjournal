/**
 * App
 */

$(function(){
  $('.menu-trigger').click(function(e){
      var $self = $(this),
          activeClass = 'is-active',
          active = true;
          active = true;
      $self.parent().addClass(activeClass);
      e.preventDefault();
  });

})

var API_URL = "http://localhost:3001";

// Define logged in user
current_user_id = 1;


function getObject(otype, id){
  var url = API_URL + "/" + otype + "/"+ id.toString() +".json";
  var result = null;
  $.ajax({
      url: url,
      type: 'get',
      dataType: 'html',
      async: false,
      success: function(data) {
        data = jQuery.parseJSON( data );
          result = data.data.attributes;
      }
   });
  return result;
}

function getUser(id){
  return getObject('users', id);
}
function getPost(id){
  return getObject('blog-posts', id);
}
function getAppointment(id){
  return getObject('appointments', id);
}

// Create a new object and post to the server
function createObject(otype, attributes){
  var url = API_URL + "/" + otype;
  var result = null;
  console.log(attributes)
  $.ajax({
      url: url,
      type: 'post',
      // headers: {'Content-Type': "application/json"},
      dataType: 'json',
      // contentType: "application/json; charset=utf-8",
      processData: true,
      contentType: 'application/vnd.api+json',
      // contentType: "application/json; charset=utf-8",
      async: false,
      data: JSON.stringify(attributes),
      success: function(data) {
        data = jQuery.parseJSON( data );
          result = data.data.attributes;
      }
   });
   return result;
}


// Function to serialize a form to JSON
// (from http://stackoverflow.com/questions/1184624/convert-form-data-to-javascript-object-with-jquery)
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

// When you submit the New Post app, create one on the server
$(function(){
  $("form#newBlogPostForm").on("submit", function( event ){

    event.preventDefault();

    var post = $( this ).serializeObject();
    post.user_id = current_user_id;

    createObject('blog-posts', {data: {"blog_post": post}});

  });
})
