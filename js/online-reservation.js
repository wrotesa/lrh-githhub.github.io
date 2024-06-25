        // 动态显示当前日期和时间
        document.addEventListener('DOMContentLoaded', function() {
            function displayDateTime() {
                var now = new Date();
                var dateTimeString = now.toLocaleDateString() + " " + now.toLocaleTimeString();
                document.getElementById('currentDateTime').innerText = dateTimeString;
            }
            displayDateTime(); // 页面加载时立即显示
            setInterval(displayDateTime, 1000); // 每秒更新一次
        });