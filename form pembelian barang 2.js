function hasil() {
  var nama = document.getElementById("nama_barang").value;
  var harga = document.forms["form"]["harga"].value;
  var jumlah = document.forms["form"]["jumlah"].value;
  var total = harga * jumlah;
  switch (nama) {
    case "monitor":
      harga = 500000;
      document.getElementById("harga").innerHTML = harga;
      document.getElementById("total").innerHTML = total;
      break;
    case "hardisk":
      harga = 150000;
      document.getElementById("harga").innerHTML = harga;
      document.getElementById("total").innerHTML = total;
      break;
    case "mouse":
      harga = 100000;
      document.getElementById("harga").innerHTML = harga;
      document.getElementById("total").innerHTML = total;
      break;
    default:
  }
  var status = document.getElementById("status").value;
  var diskon = 0.1;
  var bayar;
  if (status == "pelanggan") {
    bayar = total - total * diskon;
    document.getElementById("bayar").innerHTML = bayar;
    document.getElementById("diskon").innerHTML = diskon = "10%";
  } else {
    bayar = total;
    document.getElementById("bayar").innerHTML = bayar;
    document.getElementById("diskon").innerHTML = diskon = "0%";
  }
}