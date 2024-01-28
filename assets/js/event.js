function openTicketModal(eventName, venue, date, imagePath) {
    // Set modal content dynamically
    document.getElementById('modalEventImage').src = imagePath;
    document.getElementById('modalEventName').innerText = eventName;
    document.getElementById('modalEventVenue').innerText = 'Venue: ' + venue;
    document.getElementById('modalEventDate').innerText = 'Date: ' + date;
  }


  
  function purchaseTickets() {
    // Add logic to handle the ticket purchase, e.g., validate inputs, make API calls, etc.
    // For demonstration purposes, you can just close the modal here.
    $('#buyTicketModal').modal('hide');}