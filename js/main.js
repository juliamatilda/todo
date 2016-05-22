$(document).ready(function() {

//Variables
var taskInput = $('.new-task');
var addButton = $('.btn');
var incomplete = $('.incomplete-tasks');
var completed= $('.completed-tasks');




//add input to list
$('.btn').click(function(e){
  var val = $('.form-control').val();
  listItem = '<li class="circle"><input type="text">' + val + '</li>';
 $('input').focus();
  $('ul.incomplete-tasks').prepend(listItem);
      $('.form-control').val('');



//on click remove and prepend
 $('.circle').on('click', this, function(){
   $(this).remove();
   $('ul.completed-tasks').prepend(this);
      $(this).addClass('check delete');

  //click on delete
  $('.delete').on('click', this, function(){
    $(this).remove();
  })

 });

      });

//clear all
  $('.clearAll').on('click', function(){
    $('ul').empty();
  })

        });
