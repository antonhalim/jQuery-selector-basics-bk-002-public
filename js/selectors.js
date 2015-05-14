'use-strict';
$(document).ready(function(){
  h1Selector();
  liInOlSelector();
  linkSelector();
  imageSelector();
  checkboxInputSelector();
});

function h1Selector(){
  return $("h1")
};

function liInOlSelector(){
  return $("ol li")
};

function linkSelector(){
  // an id of box4 and a class of box5.'
  return $("#box4, #box5 a")
};

function imageSelector(){
  // alt text equal to "cat sleeping"'
  return $('img[alt=\"cat sleeping\"]')
};

function checkboxInputSelector(){
  //should select all checkbox inputs and wrap them with a span that has the class of pinky using the wrap method
  $( 'input[type=\"checkbox\"]' ).wrap( "<span class='pinky'></span>" );
};
