class Forms {
	constructor(id,controls) {
		this.form = this.fForm(id);
		this.controls = this.controls();
		this.errMessage = [{
			type:'minLength',
			lable:'to short'
		}];
this.initEvents(this.controls)
		console.log(this.form);
	}
	fForm(id) {
		
		return document.getElementById(id);
	}
	controls(){
		return this.form.querySelectorAll('.elem__input')
	}
initEvents(array){
array.forEach((elem)=>{
elem.addEventListener('input',()=>{
	console.log(elem.checkValidity());
	console.log(elem.validity);
	elem.setCustomValidity("I expect an e-mail, darling!");
	
},false)
})
}
	validate(input){
return input.checkValidity()
	}

}
const registerForm = new Forms('register')

