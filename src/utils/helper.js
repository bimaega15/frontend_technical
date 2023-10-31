export const ucwords = (str) => {
  // Memeriksa apakah input adalah string
  if (typeof str !== 'string') {
    return str;
  }

  // Memecah teks menjadi kata-kata
  var words = str.split(' ');

  // Mengonversi setiap kata menjadi huruf kapital di awal
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length > 0) {
      words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  }

  // Menggabungkan kata-kata yang telah diubah kembali menjadi sebuah string
  return words.join(' ');
};

export const API_URL_LOCAL = 'http://localhost:3000/api';
export const API_URL_GLOBAL = 'http://localhost:3000';
