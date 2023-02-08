document.querySelectorAll('.views-image-1').forEach(image_1 =>{
	image_1.addEventListener('click'. () =>{
		var src =image_1.getAttribute('src');
		document.querySelector('.views-image-1').src = src;
	});
});
