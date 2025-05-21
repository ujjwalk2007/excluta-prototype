const root = document.getElementById('root');

root.innerHTML = `
  <h1>EXCLUTA - AI Video Generator (Prototype)</h1>
  <label>Enter Script Text:</label><br>
  <textarea rows="4" cols="50" placeholder="Type your video script here..."></textarea><br><br>

  <label>Select Avatar:</label>
  <select>
    <option value="avatar1">Avatar 1</option>
    <option value="avatar2">Avatar 2</option>
  </select><br><br>

  <button onclick="alert('Video generation simulated')">Generate Video</button><br><br>

  <video width="300" controls>
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
`;
