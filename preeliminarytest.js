const inventarisGudang = {
  data: [
    { id: "B001", nama: "Buku Tulis", stok: 150, harga: 5000 },
    { id: "P002", nama: "Pulpen Gel", stok: 200, harga: 3000 },
    { id: "B003", nama: "Buku Gambar", stok: 80, harga: 8000 },
    { id: "P004", nama: "Pensil Warna", stok: 120, harga: 12000 }
  ],

  tambahBarang(barang) {
    const existing = this.data.find(item => item.id === barang.id);
    if (existing) {
      throw new Error(`ID Duplikat: Barang dengan id ${barang.id} sudah ada.`);
    }
    this.data.push(barang);
    return barang;
  },

  cariBarang(id) {
    const barang = this.data.find(item => item.id === id);
    if (!barang) {
      throw new Error(`ID ${id} tidak ditemukan di inventaris.`);
    }
    return barang;
  },

  updateStock(id, jumlahBaru) {
    const index = this.data.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error(`ID ${id} tidak ditemukan untuk update stok.`);
    }
    this.data[index].stok = jumlahBaru;
    return this.data[index];
  },

  totalNilaiInventaris() {
    return this.data.reduce((total, item) => total + (item.stok * item.harga), 0);
  }
};

console.log("Total nilai inventaris:", inventarisGudang.totalNilaiInventaris());

inventarisGudang.tambahBarang({ id: "B005", nama: "Spidol", stok: 50, harga: 7000 });

console.log(inventarisGudang.cariBarang("P002"));

inventarisGudang.updateStock("B001", 180);

console.table(inventarisGudang.data);