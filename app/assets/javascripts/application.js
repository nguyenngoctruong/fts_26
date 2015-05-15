// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .
$(document).ready(function () {

  $('#user_avatar').on('change', function() {
    var size_in_megabytes = this.files[0].size/1024/1024;
    if (size_in_megabytes > 5) {
      alert('Maximum file size is 5MB. Please choose a smaller file.');
      $(this).val("");
    }
  });

  $(".submit_exams").on('click', function () {
    if($("input[type=radio]:checked").size() == 0) {
      alert("Please chosen a category");
      return false;
    }
  });
  
  $("body").on('click','.answer-checkbox', function () {
    $(this).closest(".my-answer").find("input[type='checkbox']")
      .not(this).prop("checked", false);
    $(this).prop("checked", true)
  });

  $.fn.myFunction = function(){ 
        alert('You have successfully defined the function!'); 
  }
});

function remove_fields(link) {
  $(link).prev("input[type=hidden]").prop('value', true);
  $(link).closest('.answer-option').hide();
}

function add_fields(link, association, content) {
  var new_id = new Date().getTime();
  var regexp = new RegExp("new_" + association, "g");
  $(link).parent().prev().append(content.replace(regexp, new_id));
}
