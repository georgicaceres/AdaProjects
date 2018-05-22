exports.signo = function(m,d){

	let day = parseInt(d);

	if (isNaN(day)){ return 'Ingrese un dia valido'}

	switch(m){

		case '1':

			if( day >= 20){

				return "Acuario";

			}else{

				return "Capricornio";
			}

		break;

		case '2':
			if( day >= 21){

				return "Otro nada";

			}else{

				return "Nada";
			}

		break;

		case '3':
			if( day >= 21){

				return "Lala";

			}else{

				return "Lolo";
			}

		break;

		case '4':
			if( day >= 21){

				return "Chau";

			}else{

				return "Lolilo";
			}

		break;

		case '5':
			if( day >= 21){

				return "Lyhf";

			}else{

				return "Luuu";
			}

		break;

		case '6':
			if( day >= 21){

				return "Lsdfsf";

			}else{

				return "Lerr";
			}

		break;

	}

}
