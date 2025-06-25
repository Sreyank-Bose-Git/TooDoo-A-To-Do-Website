let select = document.getElementById("Select");
let form = document.getElementById("form");
let elements = document.getElementById("elements");
let tools = document.getElementById("Tools");
let size = document.getElementById("size");
let xpos = document.getElementById("xpos");
let ypos = document.getElementById("ypos");
let color = document.getElementById("color");
let menubutton = document.getElementById("menu");

let darkmode = 0;

let customtext = "";
let chknum = 10;
let txtnum = 2;

let additem = 100;

function addElement() {
    if(select.value == "CheckList") {
        while(true) {
            customtext = prompt("Name Of Checkbox");
            if(customtext == "") {
                continue; 
            }
            else {
                break;
            }
        }
        if (customtext != null) {  
            form.innerHTML += `<input style="" type="checkbox" id="chk${chknum}" name="chk${chknum}">
            <label id="chkl${chknum}" for="chk${chknum}">${customtext}</label><br>`;

            document.getElementById(`chk${chknum}`).style.position = "relative";
            document.getElementById(`chkl${chknum}`).style.position = "relative";
            document.getElementById("opt1").innerHTML += `<option value="${chknum}" id="chkop${chknum}">${customtext}</option>`;
            chknum *= 10;
        }
    }
    if(select.value == "Text") {
        while(true) {
            customtext = prompt("Name Of Text");
            if(customtext == "") {
                continue; 
            }
            else {
                break;
            }
        }
        if (customtext != null) {  
            form.innerHTML += `<label style="color:black;" id="txtl${txtnum}">${customtext}</label>
            <input style="" type="text" id="txt${txtnum}" name="txt${txtnum}"><br>`;

            document.getElementById(`txt${txtnum}`).style.position = "relative";
            document.getElementById(`txtl${txtnum}`).style.position = "relative";

            document.getElementById("opt2").innerHTML += `<option value="${txtnum}" id="txtop${txtnum}">${customtext}</option>`;
            txtnum *= 9;
        }
    }
}
size.addEventListener("mousemove", function (){
    if(elements.value != "Select") {
        size.removeAttribute("disabled")
        size.innerHTML = "";
    }
    else {
        size.setAttribute("disabled", "false");
        size.innerHTML = "";
    }
});
xpos.addEventListener("mousemove", function (){
    if(elements.value != "Select") {
        xpos.removeAttribute("disabled");
        xpos.innerHTML = "";
    }
    else {
        xpos.setAttribute("disabled", "false");
        xpos.innerHTML = "";
    }
});
ypos.addEventListener("mousemove", function (){
    if(elements.value != "Select") {
        ypos.removeAttribute("disabled");
        ypos.innerHTML = "";
    }
    else {
        ypos.setAttribute("disabled", "false");
        ypos.innerHTML = "";
    }
});
color.addEventListener("mousemove", function (){
    if(elements.value != "Select") {
        color.removeAttribute("disabled");
        color.innerHTML = "";
    }
    else {
        color.setAttribute("disabled", "false");
        color.innerHTML = "";
    }
});

size.addEventListener("input", function (){
    
    if (parseInt(elements.value) % 10 == 0) {
        document.getElementById(`chk${elements.value}`).style.fontSize = `${size.value / 4}px`;
        document.getElementById(`chkl${elements.value}`).style.fontSize = `${size.value}px`;
        document.getElementById(`chkl${elements.value}`).style.marginLeft = `${size.value / 8}px`;
    }
    else {
        document.getElementById(`txt${elements.value}`).style.fontSize = `${size.value}px`;
        document.getElementById(`txtl${elements.value}`).style.fontSize = `${size.value}px`;
        document.getElementById(`txtl${elements.value}`).style.marginLeft = `${size.value / 8}px`;
    }
});
xpos.addEventListener("input", function() {
    if (parseInt(elements.value) % 10 == 0) {
        document.getElementById(`chk${elements.value}`).style.left = `${xpos.value}px`;
        document.getElementById(`chkl${elements.value}`).style.left = `${xpos.value}px`;
    }
    else {
        document.getElementById(`txt${elements.value}`).style.left = `${xpos.value}px`;
        document.getElementById(`txtl${elements.value}`).style.left = `${xpos.value}px`;
    }
});
ypos.addEventListener("input", function() {
    if (parseInt(elements.value) % 10 == 0) {
        document.getElementById(`chk${elements.value}`).style.top = `${ypos.value}px`;
        document.getElementById(`chkl${elements.value}`).style.top = `${ypos.value}px`;
    }
    else {
        document.getElementById(`txt${elements.value}`).style.top = `${ypos.value}px`;
        document.getElementById(`txtl${elements.value}`).style.top = `${ypos.value}px`;
    }
});
color.addEventListener("input", function() {
    if (parseInt(elements.value) % 10 == 0) {
        document.getElementById(`chkl${elements.value}`).style.color = `${color.value}`;
    }
    else {
        document.getElementById(`txtl${elements.value}`).style.color = `${color.value}`;
    }
});
function deleteItem() {
    if (parseInt(elements.value) % 10 == 0) {
        document.getElementById(`chk${elements.value}`).parentNode.removeChild(document.getElementById(`chk${elements.value}`));
        document.getElementById(`chkl${elements.value}`).parentNode.removeChild(document.getElementById(`chkl${elements.value}`));
        try {
            document.getElementById(`chkop${elements.value}`).setAttribute("hidden", "false").setAttribute("disabled", "false");
        }
        catch(err) {

        }
        elements.value = "Select";
    }
    else {
        document.getElementById(`txt${elements.value}`).parentNode.removeChild(document.getElementById(`txt${elements.value}`));
        document.getElementById(`txtl${elements.value}`).parentNode.removeChild(document.getElementById(`txtl${elements.value}`));
        try {
            document.getElementById(`txtop${elements.value}`).setAttribute("hidden", "false").setAttribute("disabled", "false");
        }
        catch(err) {
            
        }
        
        elements.value = "Select";
    }
}
function openMenu() {
    darkmode = prompt("Set DarkMode? Yes(1) or No(0):")
    if(darkmode == 0) {
        document.getElementById("body").style.backgroundColor = "#FFFFFF";
    }
    else if(darkmode == 1) {
        document.getElementById("body").style.backgroundColor = "#000000";
    }
}
