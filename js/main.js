document.getElementById("phone").addEventListener("input", function () {
    // Удаляем все символы, не удовлетворяющие условию (цифры и + ( ) -)
    this.value = this.value.replace(/[^0-9+\(\)\-]/g, "");
});
