const imagearray = [
  { money: 500, moneyimage: `images/500.jpg` },
  { money: 200, moneyimage: `images/200.jpg` },
  { money: 100, moneyimage: `images/100.jpg` },
  { money: 50, moneyimage: `images/50.jpg` },
  { money: 20, moneyimage: `images/20.jpg` },
  { money: 10, moneyimage: `images/10.jpg` },
  { money: 5, moneyimage: `images/5.jpg` },
  { money: 1, moneyimage: `images/1.jpg` },
];

const container = document.createElement("div");
container.classList.add("container");
const inp = document.createElement("input");
inp.classList.add("inp");
inp.type = "number";
const btn = document.createElement("button");
btn.classList.add("btn");
btn.type = "submit";
btn.textContent = "Yarat";
const div = document.createElement("div");
div.classList.add("div");
const images = document.createElement("div");
images.classList.add("images");

container.append(inp, btn, div, images);
document.body.append(container);

let netice = "";
btn.addEventListener("click", () => {
  let azn = inp.value
  imagearray.map((a) => {
    let say = Math.trunc(azn / a.money);
    azn = azn - say * a.money;
    if (say > 0) {
      for (let i = 0; i < say; i++) {
        const imgdiv = document.createElement("div");
        imgdiv.classList.add("imgdiv");
        const img = document.createElement("img");
        img.src = a.moneyimage;
        imgdiv.append(img);
        images.append(imgdiv);
        netice += `${a.money} den ${say} eded `;
        let showscreen = `${netice}`;
        div.textContent = showscreen;
      }
    }
  });
});
