// Data penjualan
const data = {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    datasets: [{
        label: '2022',
        data: [4007, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)'
    },
    {
        label: '2023',
        data: [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)'
    }]
};

// Konfigurasi diagram
const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Membuat objek diagram
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);