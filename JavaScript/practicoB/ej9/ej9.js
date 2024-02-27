// capturamos las respustas del HTML

function check() {


        let opcionA = document.getElementById('opcionA');
        let opcionB = document.getElementById('opcionB');
        let opcionC = document.getElementById('opcionC');
        let opcionD = document.getElementById('opcionD');

        let opcionSI = document.getElementById('opcionSI');
        let opcionNO = document.getElementById('opcionNO');

        let opcionYes = document.getElementById('opcionYes');
        let opcionNOo = document.getElementById('opcionNOo');


        if (opcionA.checked == false && opcionB.checked == false && opcionC.checked == false && opcionD.checked == false) {
                alert("conteste la pregunta 1")
                return false
        }

        if (opcionSI.checked == false && opcionNO.checked == false) {
                alert("conteste la pregunta 2")
                return false
        }
        if (opcionYes.checked == false && opcionNOo.checked == false) {
                alert("conteste la pregunta 3")
                return false
        }


        if ((opcionC.checked == true || opcionD.checked == true) && opcionNO.checked == true && opcionNOo.checked == true) {
                alert('Usted está calificado para acceder al préstamo')

        } else {
                alert('Usted no está calificado para acceder al préstamo, por favor acérquese a la entidad bancaria para asesorarlo')

        }

}


