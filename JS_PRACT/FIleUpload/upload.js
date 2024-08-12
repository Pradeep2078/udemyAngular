document.getElementById('uploadForm').addEventListener('submit', function(event) {
    // event.preventDefault(); // Prevent form from submitting the traditional way

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0]; // Get the selected file
    console.log("LKJHGFDfgh----->  ",file)

    if (!file) {
        document.getElementById('message').textContent = 'Please select a file to upload.';
        return;
    }

    const formData = new FormData();
    formData.append('file', file);
    console.log("bchcccccccccccccc------> ",formData)

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/upload', true); // Replace '/upload' with your server endpoint

    // Update progress bar
    xhr.upload.addEventListener('progress', function(event) {
        if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            document.getElementById('progress-container').style.display = 'block';
            document.getElementById('progress-bar').style.width = percentComplete + '%';
        }
    });

    // Handle response
    // xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('message').textContent = 'File uploaded successfully!';
        } else {
            document.getElementById('message').textContent = 'File upload failed.';
        }
        // document.getElementById('progress-container').style.display = 'none';
    // };
    console.log("ffhhhhhhhhhhhhhhhhh------------> ",formData)
    xhr.send(formData);
});
