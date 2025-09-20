let select = document.getElementById("Select");
let form = document.getElementById("form");
let elements = document.getElementById("elements");
let tools = document.getElementById("Tools");
let size = document.getElementById("size");
let xpos = document.getElementById("xpos");
let ypos = document.getElementById("ypos");
let color = document.getElementById("color");
let menubutton = document.getElementById("menu");
let body = document.getElementById("body");

let darkmode = 0;
let gridpattern = 0;

let is = [];

let ctx = [];

let map = new Map();

let customtext = "";

let chknum = 10;
let txtnum = 9;
let ptnum = 7;
let ptctx = 0;

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
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = `chk${chknum}`;
            checkbox.name = `chk${chknum}`;
            checkbox.style.position = "relative";

            const label = document.createElement("label");
            label.id = `chkl${chknum}`;
            label.setAttribute("for", `chk${chknum}`);
            label.textContent = customtext;
            label.style.position = "relative";

            label.style.marginLeft = "20px";

            form.appendChild(checkbox);
            form.appendChild(label);
            form.appendChild(document.createElement("br"));

            if(darkmode == 1) {
                label.style.color = "white";
            }

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
            const label = document.createElement("label");
            label.id = `txtl${txtnum}`;
            label.textContent = customtext;
            label.style.color = "black";
            label.style.position = "relative";
                    
            const input = document.createElement("input");
            input.type = "text";
            input.id = `txt${txtnum}`;
            input.name = `txt${txtnum}`;
            input.style.position = "relative";

            label.style.marginRight = "20px";

            if(darkmode == 1) {
                label.style.color = "white";
            }
                    
            form.appendChild(label);
            form.appendChild(input);
            form.appendChild(document.createElement("br"));


            document.getElementById(`txt${txtnum}`).style.position = "relative";
            document.getElementById(`txtl${txtnum}`).style.position = "relative";

            document.getElementById("opt2").innerHTML += `<option value="${txtnum}" id="txtop${txtnum}">${customtext}</option>`;
            txtnum *= 9;

            
        }
    }
    if(select.value == "Paint") {
        while(true) {
            customtext = prompt("Name Of Paint");
            if(customtext == "") {
                continue; 
            }
            else {
                break;
            }
        }
        if (customtext != null) {  
            const canvas = document.createElement("canvas");
            canvas.id = `pt${ptnum}`;
            canvas.width = 100;
            canvas.height = 100;
            canvas.style.backgroundColor = "gray";
            canvas.style.display = "inline-block";
            canvas.style.position = "relative";
            canvas.style.cursor = "default";
            form.appendChild(canvas);
            form.appendChild(document.createElement("br"));
            ctx.push(canvas.getContext("2d"));

            document.getElementById(`pt${ptnum}`).style.position = "relative";
            document.getElementById(`pt${ptnum}`).style.position = "relative";

            document.getElementById("opt3").innerHTML += `<option value="${ptnum}" id="ptop${ptnum}">${customtext}</option>`;
            
            map.set(ptnum, ptctx);
            console.log(map);

            is.push(false);
            
            canvas.addEventListener("mousedown",function(event) {
                if(`pt${elements.value}` == canvas.id) {
                    is[map.get(Number(elements.value))] = true;
                    const rect = canvas.getBoundingClientRect();
                    console.log(map.get(Number(elements.value)));

                    ctx[map.get(Number(elements.value))].beginPath();
                    ctx[map.get(Number(elements.value))].moveTo(event.clientX - rect.left, event.clientY - rect.top);
                }
            });
            canvas.addEventListener("mousemove", function(event) {
                if(`pt${elements.value}` == canvas.id) {
                    if (!is[map.get(Number(elements.value))]) return;
                    const rect = canvas.getBoundingClientRect();
                    ctx[map.get(Number(elements.value))].lineTo(event.clientX - rect.left, event.clientY - rect.top);
                    ctx[map.get(Number(elements.value))].stroke();
                }
            });
            canvas.addEventListener("mouseup", () => {
                is[map.get(Number(elements.value))] = false;
            });
            canvas.addEventListener("mouseleave", () => {
                is[map.get(Number(elements.value))] = false;
            });

            ptnum *= 7;
            ptctx += 1;
        }
    }
}
document.addEventListener("mousemove", function (){
    if(elements.value != "Select") {
        size.removeAttribute("disabled")
        size.innerHTML = "";
    }
    else {
        size.setAttribute("disabled", "false");
        size.innerHTML = "";
    }
});
document.addEventListener("mousemove", function (){
    if(elements.value != "Select") {
        xpos.removeAttribute("disabled");
        xpos.innerHTML = "";
    }
    else {
        xpos.setAttribute("disabled", "false");
        xpos.innerHTML = "";
    }
});
document.addEventListener("mousemove", function (){
    if(elements.value != "Select") {
        ypos.removeAttribute("disabled");
        ypos.innerHTML = "";
    }
    else {
        ypos.setAttribute("disabled", "false");
        ypos.innerHTML = "";
    }
});
document.addEventListener("mousemove", function (){
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
    else if(parseInt(elements.value) % 9 == 0) {
        
        document.getElementById(`txt${elements.value}`).style.fontSize = `${size.value}px`;
        document.getElementById(`txtl${elements.value}`).style.fontSize = `${size.value}px`;
        document.getElementById(`txtl${elements.value}`).style.marginLeft = `${size.value / 8}px`;
    }
    else if(parseInt(elements.value) % 7 == 0) {
        document.getElementById(`pt${elements.value}`).style.width = `${size.value}px`;
        document.getElementById(`pt${elements.value}`).style.height = `${size.value}px`;
        document.getElementById(`pt${elements.value}`).width = Number(size.value);
        document.getElementById(`pt${elements.value}`).height = Number(size.value);
    }
});
xpos.addEventListener("input", function() {
    if (parseInt(elements.value) % 10 == 0) {
        document.getElementById(`chk${elements.value}`).style.left = `${xpos.value}px`;
        document.getElementById(`chkl${elements.value}`).style.left = `${xpos.value}px`;
    }
    else if(parseInt(elements.value) % 9 == 0) {
        document.getElementById(`txt${elements.value}`).style.left = `${xpos.value}px`;
        document.getElementById(`txtl${elements.value}`).style.left = `${xpos.value}px`;
    }
    else if(parseInt(elements.value) % 7 == 0) {
        document.getElementById(`pt${elements.value}`).style.left = `${xpos.value}px`;
    }
});
ypos.addEventListener("input", function() {
    if (parseInt(elements.value) % 10 == 0) {
        document.getElementById(`chk${elements.value}`).style.top = `${ypos.value}px`;
        document.getElementById(`chkl${elements.value}`).style.top = `${ypos.value}px`;
    }
    else if(parseInt(elements.value) % 9 == 0) {
        document.getElementById(`txt${elements.value}`).style.top = `${ypos.value}px`;
        document.getElementById(`txtl${elements.value}`).style.top = `${ypos.value}px`;
    }
    else if(parseInt(elements.value) % 7 == 0) {
        document.getElementById(`pt${elements.value}`).style.top = `${ypos.value}px`;
    }
});
color.addEventListener("input", function() {
    if (parseInt(elements.value) % 10 == 0) {
        document.getElementById(`chkl${elements.value}`).style.color = `${color.value}`;
    }
    else if(parseInt(elements.value) % 9 == 0) {
        document.getElementById(`txtl${elements.value}`).style.color = `${color.value}`;
    }
    else if(parseInt(elements.value) % 7 == 0) {
        document.getElementById(`pt${elements.value}`).style.backgroundColor = `${color.value}`;
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
    else if (parseInt(elements.value) % 9 == 0) {
        document.getElementById(`txt${elements.value}`).parentNode.removeChild(document.getElementById(`txt${elements.value}`));
        document.getElementById(`txtl${elements.value}`).parentNode.removeChild(document.getElementById(`txtl${elements.value}`));
        try {
            document.getElementById(`txtop${elements.value}`).setAttribute("hidden", "false").setAttribute("disabled", "false");
        }
        catch(err) {
            
        }
        
        elements.value = "Select";
    }
    else if (parseInt(elements.value) % 7 == 0) {
        console.log(elements.value);
        document.getElementById(`pt${elements.value}`).parentNode.removeChild(document.getElementById(`pt${elements.value}`));
        try {
            document.getElementById(`ptop${elements.value}`).setAttribute("hidden", "false").setAttribute("disabled", "false");
        }
        catch(err) {
            
        }
        
        elements.value = "Select";
    }
}
function openMenu() {
    darkmode = prompt("Set DarkMode? Yes(1) or No(0):")
    if(darkmode == 0) {
        body.style.backgroundColor = "#FFFFFF";
    }
    else if(darkmode == 1) {
        body.style.backgroundColor = "#000000";
    }
    gridpattern = prompt("Set Grid Pattern? Yes(1) or No(0):")
    if(gridpattern == 1) {
        if(darkmode == 0) {
            body.style.backgroundImage = "linear-gradient(to bottom, #000000, transparent 1px), " + "linear-gradient(to right, #000000, transparent 1px)";
        }
        else if(darkmode == 1) {
            body.style.backgroundImage = "linear-gradient(to bottom, #FFFFFF, transparent 1px), " + "linear-gradient(to right, #FFFFFF, transparent 1px)";
        }
    }
    if(gridpattern == 0) {
        body.style.backgroundImage = "none";
    }
}
function renameItem() {
    if(parseInt(elements.value) % 10 == 0) {
        document.getElementById(`chkl${elements.value}`).innerHTML = prompt("New Name For Item");
    }
    else if(parseInt(elements.value) % 9 == 0) {
        document.getElementById(`txtl${elements.value}`).innerHTML = prompt("New Name For Item");
    }
}
function savePage() {
    alert("Right Click On The Screen And Click On Save Page As");
}

let isDragging = false;
let startX, startY;      // Initial mouse positions
let startLeft, startTop; // Initial element positions

function isDragAllowed(target) {
    const tag = target.tagName.toLowerCase();
    const nonDraggableTags = ["canvas", "div", "input", "button", "select", "textarea", "label"];
    if (nonDraggableTags.includes(tag)) return false;

    return body.contains(target);
}

body.addEventListener("mousedown", function(e) {
    if (!isDragAllowed(e.target)) return;

    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    // Get current position of the element
    const rect = form.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;
    console.log("Start!!!!!");
    console.log("Element: ", startLeft, ":", startTop);
    console.log("Mouse1: ", startX, ":", startY);
});

body.addEventListener("mouseup", function(e) {
    if (isDragging) {
        isDragging = false;
        console.log("End!!!!!");
    }
});

body.addEventListener("mousemove", function(e) {
    if (isDragging) {
        const currentX = e.clientX;
        const currentY = e.clientY;

        const deltaX = currentX - startX;
        const deltaY = currentY - startY;

        const newLeft = startLeft + deltaX;
        const newTop = startTop + deltaY;

        console.log("Mouse2: ", currentX, ":", currentY);
        console.log("Delta: ", deltaX, ":", deltaY);
        console.log("New Position: ", newLeft, ":", newTop);

        form.style.position = "absolute";
        form.style.left = `${newLeft}px`;
        form.style.top = `${newTop}px`;

        if (gridpattern == 1) {
            body.style.backgroundPosition = `${newLeft}px ${newTop}px`;
        }
    }
});
