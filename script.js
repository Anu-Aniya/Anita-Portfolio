//for span value change
$(document).ready(function() {
  var texts = ["HTML", "CSS", "Bootstrap","Java Script","JQuery"]; // Array of texts to cycle through
  var currentIndex = 0; // Current index of the text array
  
  setInterval(function() {
    $("#mySpan").text(texts[currentIndex]); // Set the text of the span element to the current text
    currentIndex = (currentIndex + 1) % texts.length; // Increment the index and loop back to the beginning if needed
  }, 2000); // 2000 milliseconds = 2 seconds
});

 
//for navigation active on switching the page
// Smooth scrolling when clicking on a navigation item
$(document).on('click','a[href="#"]',function(event){
  event.preventDefault();
  $('html','body').animate({
    scrollTop:$($.attr(this,'href')).offset().top},500
  );
});

//form validatiom//
$(document).ready(function() {
  $('#myForm').submit(function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear any previous error messages
    $('.error').remove();

    // Perform form validation
    var valid = true;

    // Validate name
    var name = $('#name').val();
    if (name.trim() === '') {
      $('<span class="error">Name is required</span>').insertAfter('#name');
      valid = false;
    }

    // Validate email
    var email = $('#email').val();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
      $('<span class="error">Email is required</span>').insertAfter('#email');
      valid = false;
    } else if (!emailRegex.test(email)) {
      $('<span class="error">Invalid email address</span>').insertAfter('#email');
      valid = false;
    }

    // If form is valid, proceed with form submission
    if (valid) {
      // Process the form or make an AJAX request here
      console.log('Form is valid. Submitting...');
      $('#myForm')[0].reset();
      
    }
  });
});

//-------sidebar-------------//


  $(document).ready(function () {
    // Function to open the sidebar
    /*function openSidebar() {
      $(".sidebar").addClass("open");
    }

    // Function to close the sidebar
    function closeSidebar() {
      $(".sidebar").removeClass("open");
    }*/

    $(".menu-icon").click(function () {
     $(".sidebar").slideToggle();
    });
  });
  $(document).ready(function () {

  $(".close-btn").click(function () {
    $(".sidebar").hide();
    });
  });




