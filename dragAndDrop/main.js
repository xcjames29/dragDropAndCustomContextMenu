


const dragArea = document.querySelectorAll(".dragArea");


const cardEl = document.querySelectorAll(".options")

cardEl.forEach(e => {
    e.addEventListener("dragstart", (evt) => {
        console.log("drag start");
        e.classList.add("dragging");
    })
    e.addEventListener("dragend", (evt) => {
        console.log("drag end");
        e.classList.remove("dragging");
    })
});


dragArea.forEach(area => {
    area.addEventListener("dragover", (e) => {
        e.preventDefault();
        let total = area.querySelectorAll(".options");
        let dragContainer = document.getElementById("doing").clientHeight + 20;
        console.log(e.clientY, dragContainer - area.clientHeight, dragContainer, area.clientHeight, total.length > 0 ? total[0].clientTop : "");
        if (total.length > 0) {
            let hasSet = false;
            total.forEach((option, index) => {
                let height = option.clientHeight + (dragContainer - area.clientHeight) + (index * 90);
                console.log("height?", height)
                if (!hasSet && e.clientY <= height + 35) {
                    hasSet = true;
                    area.insertBefore(document.querySelector(".dragging"), option);
                }
                else if (!hasSet && index + 1 === total.length) {
                    if(e.clientY > height + 35){
                        hasSet = true;
                        area.appendChild(document.querySelector(".dragging"));
                    }
                  
                }
            })
        }
        else area.appendChild(document.querySelector(".dragging"));
    })
})



