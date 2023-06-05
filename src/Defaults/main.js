export function giveAlert(alert, color, from) {
    let body = document.createElement("div"),
      text = document.createElement("p"),
      response = document.createElement("button"),
      admin = document.createElement("p"),
      overllay = document.createElement("div");
    overllay.style.cssText =
      "position:absolute;cursor:pointer;z-index:99998;width:100vw;height:100vh;background-color:#00000030;top:0;left:0;";
    text.textContent = alert;
    response.innerText = "OK";
    admin.textContent = from || "Admins" + " Says";
    // let clicked = ;
    overllay.addEventListener("click", function () {
      body.remove();
      overllay.remove();
    });
    response.addEventListener("click", function () {
      body.remove();
      overllay.remove();
    });
    response.style.cssText = `width:100px;background-color:${
      color || "#0050b2"
    };padding:5px 10px;cursor:pointer;border:0;align-self:end;border-radius:10px;color:#fff;`;
    body.style.cssText =
      "display:flex;z-index:999999;padding:30px;align-items:start;position:absolute;top:0;left:50%;transform:translateX(-50%);width:500px;max-width:90%;background-color:#fff;border-radius:5px;flex-direction:column;justify-content:space-evenly;";
    body.append(admin, text, response);
    document.body.append(body, overllay);
  }
  