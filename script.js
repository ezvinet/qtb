function imagePreview(input){
	let error = document.querySelector("#error"); 
	
	error.innerHTML = ""; 
	error.style.display = "none"; 

	document.querySelector(".preview span").style.display = "none";
	document.querySelector(".preview").style.backgroundColor = "transparent";
	document.querySelector(".file-info").innerHTML = "";

	if(input.files){ 
		let file = input.files[0]; 
		console.log(input.files);

		let reader = new FileReader(); 
		reader.readAsDataURL(file); 

		reader.onload = function(){ 
			if(reader.readyState == 2){ 
				document.getElementById("image").src = reader.result;
				
			}
		}

		if(file.size > 1024 * 1024 * 2){ 
			error.style.display = "block";
			error.innerHTML = "File must be smaller than 2MB"; 
			return false; 
		}

		let allowedImageTypes = ["image/jpeg", "image/gif", "image/png"];
		if(!allowedImageTypes.includes(file.type)){ 
			error.style.display = "block";
			error.innerHTML = "Allowed file type's are: [ .jpg .png .gif ]"; 
			return false;
		}

		let fileInfo = `
			<ul>
				
			</ul>
		`;
		document.querySelector('.file-info').innerHTML = fileInfo;
	}
}
function imagePreview1(input){
	let error = document.querySelector("#error1"); 
	
	error.innerHTML = ""; 
	error.style.display = "none"; 

	document.querySelector(".preview1 span").style.display = "none";
	document.querySelector(".preview1").style.backgroundColor = "transparent";
	document.querySelector(".file1-info1").innerHTML = "";

	if(input.files){ 
		let file = input.files[0]; 
		console.log(input.files);

		let reader = new FileReader(); 
		reader.readAsDataURL(file); 

		reader.onload = function(){ 
			if(reader.readyState == 2){ 
				document.getElementById("image1").src = reader.result;
				
			}
		}

		if(file.size > 1024 * 1024 * 2){ 
			error.style.display = "block";
			error.innerHTML = "File must be smaller than 2MB"; 
			return false; 
		}

		let allowedImageTypes = ["image/jpeg", "image/gif", "image/png"];
		if(!allowedImageTypes.includes(file.type)){ 
			error.style.display = "block";
			error.innerHTML = "Allowed file type's are: [ .jpg .png .gif ]"; 
			return false;
		}

		let fileInfo = `
			<ul>
				
			</ul>
		`;
		document.querySelector('.file1-info1').innerHTML = fileInfo;
	}
}