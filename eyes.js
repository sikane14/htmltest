document.addEventListener("DOMContentLoaded", function () {
    var eyesblink = [400, 450, 380, 500, 570, 950];
    
    var ctx = document.getElementById("eyesblinkChart").getContext("2d")

    var myChart = new Chart(ctx, {
        type: "line", 
        data: {
            labels: ["1", "2", "3", "4", "5", "6"], 
            datasets: [{
                label: "eyesblink",
                data: eyesblink, 
                backgroundColor: "rgba(75, 192, 192, 0.2)", 
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1 
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true 
                }
            }
        }
    });
});
