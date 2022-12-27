function przesuwaniePrzecinka(liczba, notacjaPoczatkowa, notacjaKoncowa) {
	
	if (!liczba.includes(".")) {
		liczba += ".";
	}
	
	var i = 0;
	var roznica = Math.abs(notacjaPoczatkowa - notacjaKoncowa);
	
	var miejscePrzecinka = liczba.indexOf(".");
	var dlugoscLiczby = liczba.length;
	var liczbaJakoTablica = Array.from(liczba);
	var czyPrzecinekJest_W_PoprawnymMiejscu = 1, czyMoznaDodacZero = 1;
	
	
	if (notacjaPoczatkowa > notacjaKoncowa) {//przesuwamy przecinek w prawo
		
		for (i = 0; i < roznica; i++) {
			
			if (miejscePrzecinka < liczbaJakoTablica.length-1) {
				liczbaJakoTablica[miejscePrzecinka] = "";
				miejscePrzecinka += 2;
				czyMoznaDodacZero = 0;
				liczbaJakoTablica.splice(miejscePrzecinka, 0, ".");
				
			}
			
			
			if (miejscePrzecinka == liczbaJakoTablica.length-1) {
				liczbaJakoTablica[miejscePrzecinka] = "";
				miejscePrzecinka = miejscePrzecinka + 9999999999;
			}
			
			
			if (miejscePrzecinka > liczbaJakoTablica.length-1) {
				
				if (czyMoznaDodacZero == 1) {
					liczbaJakoTablica = liczbaJakoTablica.toString().replaceAll(",", "");
					liczbaJakoTablica += "0";
				}
				
				else {czyMoznaDodacZero = 1;}
			}
			
			
			
			
		}
		
	}
	
	
	
	
	
	
	else if (notacjaPoczatkowa < notacjaKoncowa) {//przesuwamy przecinek w lewo
		
		
		for (i = 0; i < roznica; i++) {
			
			if (miejscePrzecinka > 0) {
				
				liczbaJakoTablica[miejscePrzecinka] = "";
				miejscePrzecinka -= 1;
				
				liczbaJakoTablica.splice(miejscePrzecinka, 0, ".");
				
			}
			
			
			if (miejscePrzecinka < 0) {
				liczbaJakoTablica = liczbaJakoTablica.toString().replaceAll(",", "");
				liczbaJakoTablica = "0" + liczbaJakoTablica;
			}
			
			
			if (miejscePrzecinka == 0) {
				if (i == roznica) {liczbaJakoTablica[miejscePrzecinka] = "";}
				else {czyPrzecinekJest_W_PoprawnymMiejscu = 0;}
				
				miejscePrzecinka = miejscePrzecinka - 2;
			}
			
		}
		
		if (czyPrzecinekJest_W_PoprawnymMiejscu == 0) {liczbaJakoTablica = "0." + liczbaJakoTablica.toString().replaceAll(".", "");}
		//liczbaJakoTablica = "0." + liczbaJakoTablica.toString().replaceAll(".", "");
	}
	
	
	return liczbaJakoTablica.toString().replaceAll(",", "");
				
				
	
	
}








function myFunction() {
	
	var liczba = document.getElementById('liczba').value
	
	var notacjaPoczatkowa = parseInt(document.getElementById('potega1').value);
	var notacjaKoncowa = parseInt(document.getElementById('potega2').value);
	
	var wynik = przesuwaniePrzecinka(liczba, notacjaPoczatkowa, notacjaKoncowa);
	var miejscePrzecinka = wynik.indexOf(".");
	
	var i = 0;
	while(wynik.charAt(0) === "0") {wynik = wynik.substring(1);}
	
	if (wynik[0] == ".") {wynik = "0" + wynik;}
	
	if (!wynik.includes(".")) {wynik += ".";}
	
	while(wynik.charAt(wynik.length-1) === "0" && wynik.length-1 > miejscePrzecinka) {wynik = wynik.slice(0, -1);}
	
	if (wynik.charAt(wynik.length-1) === ".") {wynik = wynik.slice(0, -1);}
	
	document.getElementById("wynik").innerHTML = `X = ${wynik}`;
	
}