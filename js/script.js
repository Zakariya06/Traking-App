

async function getApiData(trakNum) {
    console.log(trakNum)
    let response = await fetch(`https://monpetittraqueur.com:3537/api/${trakNum}`);
    let data = await response.json()
    let trakingAppContent = `
         <div class="trakingCardContainer">
              <button class="trakingTopBtn" id="trakingNumberBtn">#${trakNum}</button>
              <div class="trakingCardContent">
                <div class="trakingCardContentItem activeTrakingCardContentItem">
                  <div class="trakingCardContentIconContainer">
                    <div class="trakingSelectIcon">
                      <img src="./img/traking-uncheck-icon.svg" alt="img" class="trakingSelectIconImg" />
                      <img src="./img/traking-check-icon.svg" alt="img" class="trakingSelectIconImg checkIcon" />
                      <div class="activeTrakingSelectIcon"></div>
                    </div>
                    <div class="trakingCardContentTextContainer">
                      <h3 class="mdHeading">${data.historique[0].action}</h3>
                      <p class="smHeading">${data.historique[0].date}</p>
                    </div>
                  </div>

                  <a href="#" class="trakingCardContentBtn">
                    See Details
                    <img src="./img/traking-arrow-icon.svg" alt="img" class="trakingCardContentBtnImg" />
                  </a>
                </div>
                <div class="trakingCardContentItem activeTrakingCardContentItem">
                  <div class="trakingCardContentIconContainer">
                    <div class="trakingSelectIcon">
                      <img src="./img/traking-uncheck-icon.svg" alt="img" class="trakingSelectIconImg" />
                      <img src="./img/traking-check-icon.svg" alt="img" class="trakingSelectIconImg checkIcon" />
                      <div class="activeTrakingSelectIcon"></div>
                    </div>
                    <div class="trakingCardContentTextContainer">
                      <h3 class="mdHeading">${data.historique[1].action}</h3>
                      <p class="smHeading">${data.historique[1].date}</p>
                    </div>
                  </div>

                  <a href="#" class="trakingCardContentBtn">
                    See Details
                    <img src="./img/traking-arrow-icon.svg" alt="img" class="trakingCardContentBtnImg" />
                  </a>
                </div>
                <div class="trakingCardContentItem">
                  <div class="trakingCardContentIconContainer">
                    <div class="trakingSelectIcon">
                      <img src="./img/traking-uncheck-icon.svg" alt="img" class="trakingSelectIconImg" />
                      <img src="./img/traking-check-icon.svg" alt="img" class="trakingSelectIconImg checkIcon" />
                      <div class="activeTrakingSelectIcon"></div>
                    </div>
                    <div class="trakingCardContentTextContainer">
                      <h3 class="mdHeading">${data.historique[2].action}</h3>
                      <p class="smHeading">${data.historique[2].date}</p>
                    </div>
                  </div>

                  <a href="#" class="trakingCardContentBtn">
                    See Details
                    <img src="./img/traking-arrow-icon.svg" alt="img" class="trakingCardContentBtnImg" />
                  </a>
                </div>
                <div class="trakingCardContentItem trakingCardContentItemDisabled">
                  <div class="trakingCardContentIconContainer">
                    <div class="trakingSelectIcon">
                      <img src="./img/traking-uncheck-icon.svg" alt="img" class="trakingSelectIconImg" />
                      <img src="./img/traking-check-icon.svg" alt="img" class="trakingSelectIconImg checkIcon" />
                    </div>
                    <div class="trakingCardContentTextContainer">
                      <h3 class="mdHeading">${data.historique[3].action}</h3>
                      <p class="smHeading">${data.historique[3].date}</p>
                    </div>
                  </div>

                  <a href="#" class="trakingCardContentBtn">
                    See Details
                    <img src="./img/traking-arrow-icon.svg" alt="img" class="trakingCardContentBtnImg" />
                  </a>
                </div>
              </div>

              <div class="trakingBottomBtnContainer">
                <img src="./img/traking-circle-icon.svg" alt="img" class="trakingBottomBtnImg" />
                <div class="trakingBottomBtnTextContainer">
                  <h4 class="mdHeading">Help Center</h4>
                  <p class="smHeading">Everything you need to know</p>
                </div>
              </div>
            </div>
    `
    let trakingTable = document.querySelector("#trakingTable").innerHTML = trakingAppContent;
}

window.addEventListener("DOMContentLoaded", () => {
    getApiData("haCfD6Hvs9P5mXtCjXtw");
})

let trakingNumber = document.querySelector("#trakingNumber")
let trakMainBtn = document.querySelector("#trakMainBtn");
let trakingNumberBtn = document.querySelector("#trakingNumberBtn")

trakMainBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (trakingNumber.value != "") {
        getApiData(trakingNumber.value)
        trakingNumber.value = ""
    }
    else {
        alert("please enter your traking number")
    }
})