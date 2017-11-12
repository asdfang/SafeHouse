function sendSafetyRequest() {
  document.getElementById("modal_feedback").innerHTML = "Safety request has been sent.";
}

function changeSafety() {
  (document.getElementById("view_toggle").checked) ? changeNodeSafety() : changeTableSafety();
}

function changeNodeSafety() {
  // Toggle
  var _safeToggle = document.getElementById("safe_toggle");
  if (_safeToggle.checked) {
     document.getElementById("node_me").style.borderColor = "#81C073";
     document.getElementById("home_feedback").innerHTML = "";
     document.getElementById("toggle_text").innerHTML = "Safe";
     document.getElementById("toggle_text").style.marginLeft = 0;
  } else {
    document.getElementById("node_me").style.borderColor = "#D16969";
    document.getElementById("home_feedback").innerHTML = "Family has been notified.";
    document.getElementById("toggle_text").innerHTML = "Not Safe";
    document.getElementById("toggle_text").style.marginLeft = -10;
  }
}

function changeTableSafety() {
  var _safeToggle = document.getElementById("safe_toggle");
  if (_safeToggle.checked) {
    document.getElementById("my-safety-status").style.color = "#81C073";
    document.getElementById("my-safety-status").style.backgroundColor = "white";
    document.getElementById("my-safety-status").innerHTML = "SAFE";
    document.getElementById("notify-family").innerHTML = "";
    document.getElementById("toggle_text").innerHTML = "Safe";
    document.getElementById("toggle_text").style.marginLeft = 0;
  } else {
    document.getElementById("my-safety-status").style.backgroundColor = "#D16969";
    document.getElementById("my-safety-status").style.color = "white";
    document.getElementById("my-safety-status").innerHTML = "SAFE?";
    document.getElementById("notify-family").innerHTML = "Family has been notified.";
    document.getElementById("toggle_text").innerHTML = "Not Safe";
    document.getElementById("toggle_text").style.marginLeft = -10;
  }
}

function toggleView() {
  var _viewToggle = document.getElementById("view_toggle");
  document.getElementById("view_mode").innerHTML = (_viewToggle.checked) ? node_view : table_view;
  _viewToggle.checked ? changeNodeSafety() : changeTableSafety();
}

const node_view = `
  <div style=\"text-align: center; padding-top: 20px; margin-bottom: 20px; position: absolute;\">
    <p id=\"home_feedback\" style=\"position: relative; left: 50px; bottom: 30px;\"></p>
  </div>
  <div class="home_main_container">
    <div class="row">
      <a href="modal.html"><div class="circle_node" style="background-image: url('./images/scott_profile_image.jpg'); border-color: #D16969;"></div></a>
      <a href="modal.html"><div class="circle_node" style="background-image: url('./images/junwon_profile_image.jpg'); border-color: #81C073;"></div></a>
      <a href="modal.html"><div class="circle_node" style="background-image: url('./images/sean_profile_image.jpg'); border-color: #D16969;"></div></a>
    </div>
    <div class="middle_row">
      <a href="modal.html"><div class="circle_node middle_node" style="background-image: url('./images/alex_profile_image.jpg'); border-color: #81C073;"></div></a>
      <a href="modal.html"><div id="node_me" class="circle_node node_me" style="background-image: url('./images/andres_profile_image.PNG'); border-color: #81C073;"></div></a>
      <a href="modal.html"><div class="circle_node middle_node" style="background-image: url('./images/vivian_profile_image.jpg'); border-color: #81C073;"></div></a>
    </div>
    <div class="row">
      <a href="modal.html"><div class="circle_node" style="background-image: url('./images/diana_profile_image.jpg'); border-color: #81C073;"></div></a>
      <a href="modal.html"><div class="circle_node" style="background-image: url('./images/mark_profile_image.jpg'); border-color: #81C073;"></div></a>
      <a href="modal.html"><div class="circle_node" style="background-image: url('./images/daniel_profile_image.jpg'); border-color: #D16969;"></div></a>
    </div>
  </div>
`;

const table_view = `
  <div class="table_container">
    <a href="modal.html">
      <div class="row_container">
        <div class="table_row">
          <p class="name-in-table">Andres Kim</p>
          <p class="update-info" style="color: #b3b3b3">Last Updated 11/03/2017</p>
        </div>
        <div class="safe-info">
          <p style="color: #81C073">SAFE</p>
        </div>
      </div>
    </a>
    <a href="modal.html">
      <div class="row_container">
        <div class="table_row">
          <p class="name-in-table">Alex Fang</p>
          <p class="update-info" style="color: #b3b3b3">Last Updated 11/03/2017</p>
        </div>
        <div class="safe-info">
          <p style="color: #81C073">SAFE</p>
        </div>
      </div>
    </a>
    <a href="modal.html">
      <div class="row_container">
        <div class="table_row">
          <p class="name-in-table">Vivian Chen</p>
          <p class="update-info" style="color: #b3b3b3">Last Updated 11/03/2017</p>
        </div>
        <div class="safe-info">
          <p style="background-color: #D16969; color: white">SAFE?</p>
        </div>
      </div>
    </a>
    <a href="modal.html">
      <div class="row_container">
        <div class="table_row">
          <p class="name-in-table">Junwon Jang</p>
          <p class="update-info" style="color: #b3b3b3">Last Updated 11/03/2017</p>
        </div>
        <div class="safe-info">
          <p style="color: #81C073">SAFE</p>
        </div>
      </div>
    </a>
    <a href="modal.html">
      <div class="row_container">
        <div class="table_row">
          <p class="name-in-table">Reginald Foster</p>
          <p class="update-info" style="color: #b3b3b3">Last Updated 11/03/2017</p>
        </div>
        <div class="safe-info">
          <p style="background-color: #D16969; color: white">SAFE?</p>
        </div>
      </div>
    </a>
    <a href="modal.html">
      <div class="row_container">
        <div class="table_row">
          <p class="name-in-table">ME</p>
          <p class="update-info" style="color: #b3b3b3">Last Updated 11/03/2017</p>
        </div>
        <div class="safe-info">
          <p id="my-safety-status" style="color: #81C073">SAFE</p>
        </div>
      </div>
    </a>
    <div class="row_container">
      <p id="notify-family"></p>
    </div>
  </div>
`;

toggleView();
