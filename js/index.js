document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector(".header").classList.toggle("open")
    })
	var swiper = new Swiper(".mySwiper", {
		spaceBetween: 20,
		pagination: {
		  el: ".swiper-pagination",
		  clickable: true,
		},
	  });
	  document.querySelectorAll(".how__step").forEach(function(step){
		step.addEventListener("click", function(event){
			const path=event.currentTarget.dataset.path
			console.log(path)
			document.querySelectorAll(".section__how_bottom").forEach(function(tabContent){
				tabContent.classList.remove("active")
			})
			document.querySelector(`[data-target="${path}"]`).classList.add("active")
		})
	  })

	  
})