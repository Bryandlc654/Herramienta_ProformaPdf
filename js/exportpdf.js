

    function pdfexport() {
      //input
      var inname = document.getElementById("inname").value;
      var indireccion = document.getElementById("indireccion").value;
      var inruc = document.getElementById("inruc").value;
      var indate = document.getElementById("indate").value;
      var cant1 = document.getElementById("cant1").value;
      var descripcion1 = document.getElementById("descripcion1").value;
      var prec1 = document.getElementById("prec1").value;
      var result1 = document.getElementById("result1").value;
      var cant2 = document.getElementById("cant2").value;
      var descripcion2 = document.getElementById("descripcion2").value;
      var prec2 = document.getElementById("prec2").value;
      var result2 = document.getElementById("result2").value;
      var subtotal = document.getElementById("sub_total").value;
      var igv = document.getElementById("igv").value;
      var total = document.getElementById("total").value;
      let imageInput = document.getElementById('imageInput');

      var doc = new jsPDF();
      

      doc.text("Nombre del cliente: " + inname, 10, 10);
      doc.text("Direccion: " + indireccion, 10, 20);
      doc.text("RUC: " + inruc, 10, 30);
      doc.text("Fecha: " + indate, 10, 40);
      doc.text("Cantidad " + cant1, 10, 50);
      doc.text("Descripcion " + descripcion1, 10, 60);
      doc.text("Precio " + prec1, 10, 70);
      doc.text("Total " + result1, 10, 80);
      doc.text("Cantidad " + cant2, 10, 90);
      doc.text("Descripcion " + descripcion2, 10, 100);
      doc.text("Precio " + prec2, 10, 110);
      doc.text("Total " + result2, 10, 120);

      doc.text("Subtotal " + subtotal, 10, 130);
      doc.text("igv " + igv, 10, 140);
      doc.text("Total " + total, 10, 150);


      doc.save("Proforma.pdf");
    }