import './style.css'

const query = (el: string) => document.querySelector(el);

// const header: HTMLElement = query("#header")! as HTMLElement;
// header.innerHTML = "";




// EXIBIR BOTÃO DE CONTRIBUIÇÃO FLUTUANTE
const btnContribute: HTMLButtonElement = query("#btnContribute")! as HTMLButtonElement;
const btnContributeFixed: HTMLButtonElement = query("#btnContributeFixed")! as HTMLButtonElement;

window.addEventListener("scroll", () => {
    const rectBtnContribute = btnContribute.getBoundingClientRect();

    if ((rectBtnContribute.y + (rectBtnContribute.height / 2)) <= 0) {
        btnContributeFixed.classList.add("fix");
    } else {
        btnContributeFixed.classList.remove("fix");
    }
});

// MOUSE SCROLL HORIZONTAL 
const el  = document.querySelectorAll<HTMLElement>(".container-h-scroll");

el.forEach((el : HTMLElement) => {
    el.addEventListener("wheel", (event : WheelEvent) => {
        event.preventDefault();
        
        // valor dinamico conforme atributo width dos cards(childs)
        const pas:number = parseFloat(el.getAttribute("data-scroll-pas") || "60");
        
        el.scrollBy({
            left: (event.deltaY < 0) ? (-pas) : pas,
            behavior: 'smooth',
        });
        
    });
});