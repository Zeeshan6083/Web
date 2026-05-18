function getDataFromStorage() {
    const data = JSON.parse(localStorage.getItem("passwords")) [] || [];

    const ShowData = document.getElementById("passwordData");

      console.log(data);

    if(data.length <= 0) {
        ShowData.innerHTML = `
            <tr>
                <td colspan = "3">
                    No password saved
                </td>
            </tr>
        `;
    }

    data.forEach((element) => {
        const TR = document.createElement("tr");

        TR.innerHTML = `
            <td>${element.WebsiteName}</td>
            <td>${element.UserName}</td>
            <td>${element.Password}</td>
        `;

        ShowData.appendChild(TR);
    });


}
getDataFromStorage();