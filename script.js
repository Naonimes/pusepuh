const dataThreads = [
    { judul: "Vibes Landscape ala Scene Film", author: "akumahmasihpemula", gambar: "image/opera.jpg" },
    { judul: "Ada yang Bikin Komik Sendiri?", author: "YesKing67", gambar: "image/komik.jpg" },
    { judul: "Karakter Original", author: "Kape", gambar: "image/kape.jpg" },
    { judul: "Fanart Haruhi", author: "Kyon", gambar: "image/haruhi.jpg" }
];

function tampilkanData() {
    const wadah = document.getElementById("thread-container");
    if (!wadah) return;

    let elemenHTML = "";
    for (let i = 0; i < dataThreads.length; i++) {
        elemenHTML += `
            <div class="bg-white shadow-md rounded-lg p-6 border border-gray-300 text-center">
                <img src="${dataThreads[i].gambar}" alt="${dataThreads[i].judul}" class="w-full rounded mb-2">
                <h3 class="font-bold text-lg">${dataThreads[i].judul}</h3>
                <p class="text-sm text-gray-600">Oleh: ${dataThreads[i].author}</p>
            </div>
        `;
    }
    wadah.innerHTML = elemenHTML;
}

$(document).ready(function() {
    tampilkanData();

    $("#toggle-search").on("click", function() {
        $("#search-form").slideToggle();
    });

    $("form").on("submit", function(event) {
        const inputJudul = $("input[type='text']").val();
        
        if (inputJudul === "") {
            alert("Judul tidak boleh kosong!");
            event.preventDefault();
        } else {
            alert("Thread berhasil diunggah!");
        }
    });
});