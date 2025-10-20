// Ambil elemen form dan input
const form = document.getElementById("validationForm");
const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("successMessage");

// Fungsi validasi nama
function validateNama() {
  const namaValue = namaInput.value.trim();
  const namaError = document.getElementById("namaError");

  if (namaValue === "") {
    namaInput.classList.add("error");
    namaInput.classList.remove("success");
    namaError.classList.add("show");
    return false;
  } else {
    namaInput.classList.remove("error");
    namaInput.classList.add("success");
    namaError.classList.remove("show");
    return true;
  }
}

// Fungsi validasi email
function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailError = document.getElementById("emailError");
  // Regex untuk validasi format email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    emailError.textContent = "Email harus diisi";
    emailInput.classList.add("error");
    emailInput.classList.remove("success");
    emailError.classList.add("show");
    return false;
  } else if (!emailRegex.test(emailValue)) {
    emailError.textContent = "Format email tidak valid (contoh: nama@domain.com)";
    emailInput.classList.add("error");
    emailInput.classList.remove("success");
    emailError.classList.add("show");
    return false;
  } else {
    emailInput.classList.remove("error");
    emailInput.classList.add("success");
    emailError.classList.remove("show");
    return true;
  }
}

// Fungsi validasi password
function validatePassword() {
  const passwordValue = passwordInput.value;
  const passwordError = document.getElementById("passwordError");

  if (passwordValue === "") {
    passwordError.textContent = "Password harus diisi";
    passwordInput.classList.add("error");
    passwordInput.classList.remove("success");
    passwordError.classList.add("show");
    return false;
  } else if (passwordValue.length < 8) {
    passwordError.textContent = "Password minimal 8 karakter";
    passwordInput.classList.add("error");
    passwordInput.classList.remove("success");
    passwordError.classList.add("show");
    return false;
  } else {
    passwordInput.classList.remove("error");
    passwordInput.classList.add("success");
    passwordError.classList.remove("show");
    return true;
  }
}

// Event listener untuk validasi real-time
namaInput.addEventListener("blur", validateNama);
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);

// Event listener untuk input (menghapus pesan error saat mengetik)
namaInput.addEventListener("input", function () {
  if (namaInput.classList.contains("error")) {
    validateNama();
  }
});

emailInput.addEventListener("input", function () {
  if (emailInput.classList.contains("error")) {
    validateEmail();
  }
});

passwordInput.addEventListener("input", function () {
  if (passwordInput.classList.contains("error")) {
    validatePassword();
  }
});

// Event listener untuk submit form
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah form submit secara default

  // Validasi semua input
  const isNamaValid = validateNama();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  // Jika semua validasi berhasil
  if (isNamaValid && isEmailValid && isPasswordValid) {
    // Tampilkan pesan sukses
    successMessage.classList.add("show");

    // Log data form (dalam aplikasi nyata, data akan dikirim ke server)
    console.log("Form Data:");
    console.log("Nama:", namaInput.value);
    console.log("Email:", emailInput.value);
    console.log("Password:", passwordInput.value);

    // Reset form setelah 2 detik
    setTimeout(function () {
      form.reset();
      namaInput.classList.remove("success");
      emailInput.classList.remove("success");
      passwordInput.classList.remove("success");
      successMessage.classList.remove("show");
    }, 2000);
  } else {
    // Sembunyikan pesan sukses jika ada error
    successMessage.classList.remove("show");
  }
});
