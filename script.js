document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const dob = document.getElementById("dob").value;
    const dateObj = new Date(dob);

    const dd = String(dateObj.getDate()).padStart(2, '0');
    const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
    const yy = String(dateObj.getFullYear()).slice(-2);
    const serial = dd + mm + yy;

    const notes = [
        { serial: "120300", price: "₹999", image: "note1.jpg" },  // sample matching DOB
        { serial: "010199", price: "₹1499", image: "note2.jpg" }
    ];

    const match = notes.find(n => n.serial === serial);
    const results = document.getElementById("results");

    if (match) {
        results.innerHTML = `
            <h2>Match Found!</h2>
            <img src="${match.image}" alt="Currency Note" width="200"><br>
            <p>Serial: ${match.serial}</p>
            <p>Price: ${match.price}</p>
            <button onclick="alert('We will contact you for payment.')">Buy Now</button>
        `;
    } else {
        results.innerHTML = `<p>No matching note found. Try another date.</p>`;
    }
});
