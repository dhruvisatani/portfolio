
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = "";
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5
                  }s `;
          }
      });
      burger.classList.toggle("toggle");
  });
  
};

navSlide();



function DownloadFile(fileName) {
    //Set the File URL.
    var url = "Files/" + fileName;

    //Create XMLHTTP Request.
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    req.onload = function () {
        //Convert the Byte Data to BLOB object.
        var blob = new Blob([req.response], { type: "application/octetstream" });

        //Check the Browser type and download the File.
        var isIE = false || !!document.documentMode;
        if (isIE) {
            window.navigator.msSaveBlob(blob, fileName);
        } else {
            var url = window.URL || window.webkitURL;
            link = url.createObjectURL(blob);
            var a = document.createElement("a");
            a.setAttribute("download", fileName);
            a.setAttribute("href", link);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };
    req.send();
};