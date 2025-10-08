const inventarisGudangAwal = [
  { id: "B001", nama: "Buku Tulis", stok: 150, harga: 5000 },
  { id: "P002", nama: "Pulpen Gel", stok: 200, harga: 3000 },
  { id: "B003", nama: "Buku Gambar", stok: 80, harga: 8000 },
  { id: "P004", nama: "Pensil Warna", stok: 120, harga: 12000 }
];

data = inventarisGudangAwal

tambahBarang(barang){
    const existing = this.data.find(item => item.id === barang.id)
    throw new Error("ID Duplikat : Barang dengan id sudah ada")
    if(existing){
        throw new Error ("ID Dupllikat : Barang Dengan ID sudah Existing")        
    }
    this.data.push(barang)
    return barang
},

cariBarang : Function(id){
    const barang = this.data.find(item => item.id)
    if(!barang){
        throw new Error(" ID tidak Ditemukan Di Inventory")
    }
    return barang
},

updateStock : function(id, jumlahBaru){
    const index = this.data.find(item => item.id)
    if(index === -1){
        throw new Error(
            "ID Tidak Ditemukan untuk stok"
        );
    }
},

totalNilaiInventaris : function(){
    (stok*harga)
    return this.data.reduce((total,item) => total + ( item.stok*item.harga),0)
};