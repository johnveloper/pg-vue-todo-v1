var app = {
  init: function() {
    // Bind any events that are required on startup. Common events are: load', 'deviceready', 'offline', and 'online'.
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function() {
    console.log('Device is ready!');
  }
};