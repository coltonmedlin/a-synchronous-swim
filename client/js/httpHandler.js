const fetcher = function() {
  $.get('http://127.0.0.1:3000/direction', () => {
  console.log('success!');
  }).done((data) => {
    console.log(`data: ${data}`);
    SwimTeam.move(data);
  });
}

setInterval(fetcher, 300 );

(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //

  // write ajax get request

  // use setTimeout to call repetitively
  // call swimTeam.move(response)




  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: 'http://127.0.0.1:3000/background.jpg',
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    console.log('SUBMITTED!')
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
