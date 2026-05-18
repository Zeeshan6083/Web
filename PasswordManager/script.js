document.getElementById("passfrom"),addEventListener("submit", (e) => {
  e.preventDefault();

  const sitename = document.getElementById("sitename").value.trim();
    const userName = document.getElementById("userName").value.trim();
    const password = document.getElementById("password").value.trim();

    const packet = {
        WebsiteName : websiteName,
        UserName : userName,
        Password : password
     };
    }


});



document.getElementById("passform").addEventListener("reset", (e) => {
    event.preventDefault();
    document.getElementById("sitename").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("password").value = "";
  });

  funtion saveToLocalStorage(packet) {
    const oldData = JSON.parse(localStorage.getItem("passwords"));


    const newData = oldData(packet);
    
    const packetString = JSON.stringify(packet);

    localStorage.setItem("passwords", packetString);