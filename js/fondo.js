let imageInput = document.getElementById('imageInput');

  // Creamos un nuevo documento PDF
  let pdf = new jsPDF();

  // Añadimos un evento al input para detectar cuando se selecciona una imagen
  imageInput.addEventListener('change', function() {
    // Obtenemos el archivo seleccionado
    let file = this.files[0];

    // Verificamos que el archivo sea una imagen
    if (file.type.match('image.*')) {
      // Creamos un lector de archivos
      let reader = new FileReader();

      // Añadimos un evento al lector para detectar cuando se ha terminado de leer el archivo
      reader.addEventListener('load', function() {
        // Obtenemos la URL de la imagen
        let imageUrl = reader.result;

        // Añadimos la imagen al documento PDF como fondo de la hoja
        pdf.addImage(imageUrl, 'JPEG', 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);

        // Generamos el PDF
        doc.save("Proforma.pdf");
      });

      // Leemos el archivo
      reader.readAsDataURL(file);
    }
  });