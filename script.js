// เริ่มสร้างกราฟเมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener("DOMContentLoaded", function () {
    // ตัวอย่างข้อมูลความเร็ว
    var speeds = [60, 70, 65, 75, 80, 85]; // ตัวอย่างข้อมูลความเร็ว
    
    // สร้างตำแหน่งที่แสดงกราฟ
    var ctx = document.getElementById("speedChart").getContext("2d");

    // สร้างกราฟ
    var myChart = new Chart(ctx, {
        type: "line", // ประเภทของกราฟ
        data: {
            labels: ["1", "2", "3", "4", "5", "6"], // ตัวอย่างชื่อแกน x
            datasets: [{
                label: "Speed", // ชื่อกราฟ
                data: speeds, // ข้อมูลความเร็ว
                backgroundColor: "rgba(75, 192, 192, 0.2)", // สีพื้นหลังกราฟ
                borderColor: "rgba(75, 192, 192, 1)", // สีเส้นกราฟ
                borderWidth: 1 // ความหนาของเส้นกราฟ
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // เริ่มต้นแกน y ที่ค่า 0
                }
            }
        }
    });
});
