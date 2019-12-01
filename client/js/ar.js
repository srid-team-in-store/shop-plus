import AR from "../view/Ar.html";
import "../style/ar.less";

const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = AR;

    const category = location.hash.split("=")[1];
    switch (category) {
    case "kitchen":
        document.getElementById("ar-product").src = "https://i.imgur.com/iplSA2J.png";
        break;
    case "fruit":
        document.getElementById("ar-product").src = "https://i.imgur.com/DxUhMVA.png";
        break;
    case "drink":
        document.getElementById("ar-product").src = "https://i.imgur.com/PHegVmF.png";
        break;
    case "crafts":
        document.getElementById("ar-product").src = "https://i.imgur.com/VBAJZts.png";
        break;
    case "snacks":
        document.getElementById("ar-product").src = "https://i.imgur.com/UOISGxU.png";
        break;
    default:
    }

    document.getElementById("ar-back").addEventListener("click", () => {
        window.history.go(-1);
    });

    document.getElementById("ar-close").addEventListener("click", () => {
        window.location.hash = "/navigation";
    });

    let cnt = 1;
    document.getElementById("ar-container").addEventListener("click", () => {
        if(cnt === 1) {
            document.getElementById("ar-image").src = "https://i.imgur.com/w7pPAAn.png";
            document.getElementById("ar-turn").src = "https://i.imgur.com/2UshUA6.png";
            document.getElementById("ar-text").textContent = "Turn Left at the second corner";
            cnt++;
        } else if(cnt === 2) {
            document.getElementById("ar-turn").style.visibility = "hidden";
            document.getElementById("ar-text").textContent = "You find it!";
            switch (category) {
            case "kitchen":
                document.getElementById("ar-image").src = "https://i.imgur.com/5Djpvgw.png";
                break;
            case "fruit":
                document.getElementById("ar-image").src = "https://i.imgur.com/IgpjR4Z.png";
                break;
            case "drink":
                document.getElementById("ar-image").src = "https://i.imgur.com/olO9L8p.png";
                break;
            case "crafts":
                document.getElementById("ar-image").src = "https://i.imgur.com/wjHx9Tc.png";
                break;
            case "snacks":
                document.getElementById("ar-image").src = "https://i.imgur.com/OpMW0Bj.png";
                break;
            default:
                break;
            }
            // document.getElementById("ar-next").style.visibility = "hidden";
        }
    });
};

const ar = {
    render,
};

export default ar;
