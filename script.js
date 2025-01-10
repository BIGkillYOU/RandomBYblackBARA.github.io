function randomizeBars() {
    // สร้างอาเรย์ของค่าที่เป็นไปได้ (10%, 20%, 30%, ... 90%)
    const possibleHeights = [10, 30, 50, 70, 90, 110];
    
    // สุ่มแท่งทั้งหมดโดยไม่ให้ค่าเหมือนกัน
    for (let i = 1; i <= 6; i++) {
        // เลือกค่าจากอาเรย์ที่ยังไม่ถูกใช้
        const randomIndex = Math.floor(Math.random() * possibleHeights.length);
        const randomHeight = possibleHeights[randomIndex];
        
        // ตั้งค่าความสูงของแท่ง
        document.getElementById(`bar${i}`).style.height = randomHeight + "%";
        
        // แสดงเปอร์เซ็นต์ของแท่งที่สุ่ม
        document.getElementById(`percentage${i}`).textContent = randomHeight;
        
        // เอาค่าที่เลือกไปออกจากอาเรย์
        possibleHeights.splice(randomIndex, 1);
    }
}
