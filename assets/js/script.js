document.addEventListener('DOMContentLoaded', function () {
  var viewTracksButtons = document.querySelectorAll('.btn-view-tracks');
  var modalAlbumArt = document.getElementById('modalAlbumArt');
  var modalAlbumDescription = document.getElementById('modalAlbumDescription');
  var currentTrack = document.getElementById('currentTrack');
  var albumPlayer = document.getElementById('albumPlayer');
  var songList = document.getElementById('songList');

  viewTracksButtons.forEach(function (viewTracksButton) {
      viewTracksButton.addEventListener('click', function () {
          var albumName = viewTracksButton.getAttribute('data-album-name');
          var albumArt = viewTracksButton.getAttribute('data-album-art');
          var songs = JSON.parse(viewTracksButton.getAttribute('data-songs'));

          modalAlbumArt.src = albumArt;
          modalAlbumDescription.textContent = albumName;

          // Clear existing song list
          songList.innerHTML = '';

          // Populate song list
          songs.forEach(function (song) {
              var listItem = document.createElement('li');
              listItem.className = 'list-group-item';

              // Create play button
              var playButton = document.createElement('button');
              playButton.textContent = 'Play';
              playButton.className = 'btn btn-sm btn-success me-2';

              // Add click event to play the selected song
              playButton.addEventListener('click', function () {
                  currentTrack.src = song.path;
                  albumPlayer.load();
                  albumPlayer.play();
              });

              // Create stop button
              var stopButton = document.createElement('button');
              stopButton.textContent = 'Stop';
              stopButton.className = 'btn btn-sm btn-danger';

              // Add click event to stop the music
              stopButton.addEventListener('click', function () {
                  albumPlayer.pause();
              });

              // Add play and stop buttons to the list item
              listItem.appendChild(playButton);
              listItem.appendChild(stopButton);

              // Add song name to the list item
              listItem.appendChild(document.createTextNode(' ' + song.name));

              // Add list item to the song list
              songList.appendChild(listItem);
          });
      });
  });

  // Handle modal close event
  var closeModalButton = document.querySelector('[data-bs-dismiss="modal"]');
  closeModalButton.addEventListener('click', function () {
      albumPlayer.pause();
  });
});

function changeTrack(src, title) {
  var audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.src = path;
  // audioPlayer.play();

  var audioPlayer = document.getElementById('albumPlayer');
  var currentTrack = document.getElementById('currentTrack');

  // source and title
  currentTrack.src = src;
  audioPlayer.load(); // Reload the audio player to apply changes
  audioPlayer.play(); // Automatically start playing the new track
}


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