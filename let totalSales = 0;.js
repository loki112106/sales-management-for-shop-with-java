let totalSales = 0;

function addTransaction() {
    const item = document.getElementById('item').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);

    if (item && quantity && price) {
        const total = quantity * price;

        const table = document.getElementById('transactionsTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${item}</td>
            <td>${quantity}</td>
            <td>${price.toFixed(2)}</td>
            <td>${total.toFixed(2)}</td>
        `;

        totalSales += total;
        document.getElementById('totalSales').innerText = totalSales.toFixed(2);

        // Clear input fields
        document.getElementById('quantity').value = '';
        document.getElementById('price').value = '';
    } else {
        alert('Please fill in all fields');
    }
}
