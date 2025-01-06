document.addEventListener('DOMContentLoaded', function() {
    const message = document.querySelector('.message p');
    message.addEventListener('click', function() {
      alert('Welcome to the Koperasi Application!');
    });
  });
  const form = document.getElementById('registrasi-form');
const pesanError = document.getElementById('pesan-error');

form.addEventListener('submit'), (e) => {
    e.preventDefault();}
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const konfirmasiPassword = document.getElementById('konfirmasi-password').value.trim();

    if (nama === '' || email === '' || password === '' || konfirmasiPassword === '') {
        pesanError.innerText = 'Semua field harus diisi!';
        return;
    }

    if (password !== konfirmasiPassword) {
        pesanError.innerText = 'Password dan konfirmasi password tidak cocok!';
        return;
    }

fetch('/registrasi', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nama,
        email,
        password
    })
})
.then((res) => {
    if (!res.ok) {
        throw new Error('Gagal registrasi!');
    }
    return res.json();
})
.then((data) => {
    if (data.success) {
        pesanError.innerText = 'Registrasi berhasil!';
        window.location.href = 'http://127.0.0.1:5500/UAS2/transaksi.html'; 
    } else {
        pesanError.innerText = 'Gagal registrasi!';
    }
})
.catch((err) => {
    pesanError.innerText = err.message;
})
