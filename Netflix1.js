        const slider =
            document.querySelector(".slider-wrapp");
        const prev =
            document.querySelector("#prev");
        const next =
            document.querySelector("#next");

        next.addEventListener("click", () => {
            slider.scrollBy({left: 500, behavior: "smooth"});
        });

        prev.addEventListener("click", () => {
            if (slider.scrollLeft + slider.clientWidth < slider.scrollWidth){
             slider.scrollBy ({left: -500, behavior: "smooth"});
            }
        });
