<script>
    const btnCarregarDados = document.getElementById("btn-carregar-dados");
    const dadosContainer = document.getElementById("dados");

    btnCarregarDados.addEventListener("click", () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                // Armazena os dados em localStorage
                localStorage.setItem("dados", JSON.stringify(data));

                // Exibe os dados na tela
                dadosContainer.innerText = JSON.stringify(data, null, 2);
            });
    });
</script>
