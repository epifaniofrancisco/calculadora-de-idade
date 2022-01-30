var meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function eBissexto(ano) {
	if (ano % 4 == 0 || (ano % 100 == 0 && ano % 400 == 0)) {
		meses[1] = 29;
	} else {
		meses = 28;
	}
}

function dataHoje() {
	let now = new Date();

	let atuais = {
		ano: now.getFullYear(),
		mes: now.getMonth() + 1,
		data: now.getDate(),
	};

	return atuais;
}

function pegarData() {
	let dataNascimento = new Date(document.querySelector("#date").value);

	let infoNascimento = {
		ano: dataNascimento.getFullYear(),
		mes: dataNascimento.getMonth() + 1,
		data: dataNascimento.getDate(),
	};

	return infoNascimento;
}

function validarData(nascimento, actual) {
	if (
		nascimento.ano >= actual.ano ||
		nascimento.mes >= actual.mes ||
		nascimento.data >= actual.data
	) {
		alert("Informe uma data menor.");
		window.location.href = "index.html";
	}
}

function calcular() {
	var nascimento = pegarData();
	var actual = dataHoje();
	let ano, mes, dia;

	eBissexto(actual.ano);
	validarData(nascimento, actual);

	ano = actual.ano - nascimento.ano;

	if (actual.mes >= nascimento.mes) {
		mes = actual.mes - nascimento.mes;
	} else {
		ano--;
		mes = 12 + actual.mes - nascimento.mes;
	}

	if (actual.data >= nascimento.data) {
		dia = actual.data - nascimento.data;
	} else {
		mes--;
		let dias = meses[actual.mes - 2];
		dia = dias + actual.data - nascimento.data;

		if (actual.data < 0) {
			mes = 11;
			ano--;
		}
	}

	mostrarResultados(ano, mes, dia);
}

function mostrarResultados(ano, mes, dia) {
	document.getElementById("ano").textContent = ano;
	document.getElementById("mes").textContent = mes;
	document.getElementById("dia").textContent = dia;
}
