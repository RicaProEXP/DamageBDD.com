(function(window, document, undefined) {

	// code that should be taken care of right away
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-5QG625RHB7');

	const toasts = new Toasts({
		offsetX: 20, // 20px
		offsetY: 20, // 20px
		gap: 20, // The gap size in pixels between toasts
		width: 300, // 300px
		timing: 'ease', // See list of available CSS transition timings
		duration: '.5s', // Transition duration
		dimOld: true, // Dim old notifications while the newest notification stays highlighted
		position: 'top-center' // top-left | top-center | top-right | bottom-left | bottom-center | bottom-right
	});

	document.addEventListener("DOMContentLoaded", function() {
		var kycForm = document.getElementById('kycForm');
		if (kycForm){
			kycForm.addEventListener('submit', function(event) {
				event.preventDefault(); // Prevent default form submission

				const formData = new FormData(this);
				const jsonData = Object.fromEntries(formData.entries());

				fetch('/accounts/create', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						// Include CSRF Token if necessary
						'CSRF-Token': formData.get('csrf_token') 
					},
					body: JSON.stringify(jsonData)
				})
					.then(response => response.json())
					.then(data => {
						toasts.push({
							title: 'Success',
							content: data.message,
							style: 'success'
						});
					})
					.catch((error) => {
						toasts.push({
							title: 'Request Failed',
							content: error.message,
							style: 'error'
						});
					});
			});
		}
		const theme = window.localStorage && window.localStorage.getItem("theme");
		var globe = VANTA.GLOBE({
			el: "#preamble",
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.00,
			minWidth: 200.00,
			scale: 1.00,
			size: 1.50,
			scaleMobile: 1.00,
			color: 0x2b04,
			color2: 0x2d6e45,
			backgroundColor: 0xffffff
		})
		hljs.highlightAll();

		const checkbox = document.getElementById("checkbox")
		function changeTheme(theme) {
			try{ document.querySelector('link[href*="/assets/css/highlightjs/"]').remove();
			   }catch(e){
				  
			   };
			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = `/assets/css/highlightjs/${theme}.min.css`;
			document.querySelector("head").append(link);
		}
		function setTheme(newtheme){
			if(newtheme === undefined){
				newtheme  = document.body.classList.contains("dark") ? "dark" : "light";
			}
			
			window.localStorage && window.localStorage.setItem("theme", newtheme);
			if (newtheme === "dark") {
				checkbox.checked = true;
				globe.setOptions({backgroundColor: 0x292c35});
			} else {
				checkbox.checked = false;
				globe.setOptions({backgroundColor: 0xffffff});
			}
			document.body.classList.add(newtheme);
			globe.restart();
			// Select all elements with class test 
			let temp = document.querySelectorAll(".snippet");
			// Apply CSS property to it
			for (let i = 0; i < temp.length; i++) {
				if (newtheme === "dark") {
					temp[i].style.color = "white";
					temp[i].style.backgroundColor = "black";
					temp[i].style.border = "black";
					temp[i].style.borderLeft = "3px solid #55aa00";
					changeTheme("sunburst");
				} else {
					changeTheme("default");
					temp[i].style.color = "black";
					temp[i].style.backgroundColor = "#f3f3f3";
					temp[i].style.border = "#ddd";
					temp[i].style.borderLeft = "3px solid #55aa00";
				}
			}
		}
		setTheme(theme);
		checkbox.addEventListener("change", () => {
			document.body.classList.toggle("dark");
			setTheme();

		})

	});

})(window, document, undefined);
