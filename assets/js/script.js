document.addEventListener('DOMContentLoaded', function () {
  // Add click event listener to each "View Tracks" button
  var viewTracksButtons = document.querySelectorAll('.btn-view-tracks');
  viewTracksButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Get the album details from the data attributes
      var albumName = button.getAttribute('data-album-name');
      var albumArt = button.getAttribute('data-album-art');
      // var albumDescription = button.getAttribute('data-album-description');

      // Update the modal title with the album name
      var modalTitle = document.getElementById('viewTracksModalLabel');
      modalTitle.textContent = 'Album Name - ' + albumName;

      // Update the album art in the modal
      var albumName = button.getAttribute('data-album-name');
      var modalAlbumArt = document.getElementById('modalAlbumArt');
      console.log(albumArt);  // Add this line for debugging
      modalAlbumArt.src = albumArt;

     
    });
  });
});

 // Function to set album art and open the purchase modal
 function openPurchaseModal(albumArt, albumName) {
  // Set the album art dynamically
  document.getElementById('purchaseAlbumArt').src = albumArt;
  
  // Open the purchase modal
  $('#purchaseModal').modal('show');
}
//form purchase validation 
function validateForm() {
  var form = document.getElementById("purchaseForm");
  if (form.checkValidity()) {
    // Form is valid, close the modal and refresh the page
    $('#purchaseModal').modal('hide');
    location.reload();
    return true;
  } else {
    // Form is not valid, prevent submission
    alert("Form is not valid. Please check the inputs.");
    return false;
  }
}

function showSuccessAlert() {
  // You can customize the success alert as needed
  alert("Twisties Band - Purchase successful! Thank you for your order.");
}

function changeTrack(src, title) {
    var audioPlayer = document.getElementById('albumPlayer');
    var currentTrack = document.getElementById('currentTrack');

    // source and title
    currentTrack.src = src;
    audioPlayer.load(); // Reload the audio player to apply changes
    audioPlayer.play(); // Automatically start playing the new track
  }

  $(document).ready(function () {
    // Initialize FancyBox
    $('[data-fancybox="gallery"]').fancybox({
      // Add any additional options as needed
    });
  });


  function showSuccessToast() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim();

    // Basic email validation
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    // Display success toast
    var toast = new bootstrap.Toast(document.getElementById('toast'));
    toast.show();

    // Clear the form
    emailInput.value = '';

    return false; // Prevent form submission for demonstration purposes
  }

  function isValidEmail(email) {
    // Basic email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }