function changeSafety() {
  // Toggle
  var _safeToggle = document.getElementById("safe_toggle");
  if (_safeToggle.checked) {
     document.getElementById("node_me").style.borderColor = "#81C073";
     document.getElementById("home_feedback").innerHTML = "";
  } else {
    document.getElementById("node_me").style.borderColor = "#D16969";
    document.getElementById("home_feedback").innerHTML = "Family has been notified.";
  }
}

function sendSafetyRequest() {
  document.getElementById("modal_feedback").innerHTML = "Safety request has been sent.";
}
