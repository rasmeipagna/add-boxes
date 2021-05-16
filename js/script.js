var boxes = document.getElementById("boxes");
var last_box = boxes.firstElementChild;
var marketplace_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.6 1.6H8.4c-.4 0-.7.3-.7.7v2.5h8.5V2.3c.1-.4-.2-.7-.6-.7z" fill="var(--color-default)"/><path d="M19.8 10.2H4.2c-.6 0-1 .4-1 1v10.2c0 .6.4 1 1 1l15.7.1c.6 0 1-.4 1-1V11.3c-.1-.7-.5-1.1-1.1-1.1z" fill="var(--color-dark)"/><path d="M9.2 13.6c-1.2 0-2.3-.7-2.9-1.8-.5 1.1-1.6 1.8-2.9 1.8h-.2C1.1 13.5-.1 11.2.8 9.3l3-5.1c.3-.6.8-1 1.5-1h13.5c.6 0 1.2.4 1.5 1l3 5.1c.8 1.9-.4 4.1-2.5 4.2h-.2c-1.2 0-2.3-.7-2.9-1.8-.7 1.6-2.6 2.2-4.2 1.5-.7-.3-1.2-.8-1.5-1.5-.5 1.2-1.6 1.9-2.8 1.9z" fill="var(--color-default)"/><g><path d="M13.3 22.4v-5.1c0-.3.1-.5.3-.5h4c.1 0 .3.2.3.5v5.1" fill="var(--color-default)"/></g></svg>';
var crowdfunding_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.5 15.4H1.5c-.7 0-1.4.6-1.4 1.3V18c0 .7.6 1.4 1.4 1.4l21 .1c.7 0 1.4-.6 1.4-1.3v-1.3c0-.8-.6-1.5-1.4-1.5z" fill="var(--color-dark)"/><circle cx="4.8" cy="9.6" r="2.4" fill="var(--color-dark)"/><path d="M.1 16.5c0-2 2.1-3.6 4.7-3.6s4.7 1.6 4.7 3.6" fill="var(--color-dark)"/><circle cx="19.2" cy="9.7" r="2.4" fill="var(--color-dark)"/><path d="M14.5 16.5c0-2 2.1-3.6 4.7-3.6s4.7 1.6 4.7 3.6" fill="var(--color-dark)"/><circle cx="12" cy="8" r="3.5" fill="var(--color-default)"/><path d="M5.2 17.9c0-2.9 3.1-5.3 6.8-5.3 3.7 0 6.8 2.4 6.8 5.3" fill="var(--color-default)"/><path d="M5.2 17.9h13.5v1.4H5.2z" fill="var(--color-default)" transform="matrix(1 .00338 -.00338 1 .063 -.04)"/></svg>';

const Box = class {
  constructor(text, color, icon) {
    this.text = text;
    this.color = color;
    this.icon = icon;
  }
};

function changeText() {
  var index = boxes.childElementCount + 1;
  if  (index % 2 == 0) {
    return "quickstart marketplace";
  } else {
    return "quickstart crowdfunding";
  }
}

function changeColor() {
  var blueColor = "#23339b";
  return blueColor;
}

function changeIcon() {
  var index = boxes.childElementCount + 1;
  if  (index % 2 == 0) {
    return marketplace_icon;
  } else {
    return crowdfunding_icon;
  }
}

function createNewBox() {
  var cloned_box = last_box.cloneNode(true);
  newBox = new Box(changeText(), changeColor(), changeIcon());
  cloned_box.querySelector(".title").innerHTML = newBox.text;
  cloned_box.querySelector(".link-text").innerHTML = newBox.text;
  cloned_box.querySelector(".link-text").style.color = newBox.color;
  cloned_box.querySelector(".link").style.fill = newBox.color;
  cloned_box.querySelector(".box-head>svg").innerHTML = changeIcon(last_box);
  boxes.prepend(cloned_box);
};