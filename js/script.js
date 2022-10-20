function btnExibirMenu() {
	var listaMenu = document.querySelector('.menu-mobile').style.display
	if (listaMenu == 'none') {
		document.querySelector('.menu-mobile').style.display = 'block';
	} else {
		document.querySelector('.menu-mobile').style.display = 'none';
	}
}
