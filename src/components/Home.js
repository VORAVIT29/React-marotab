function Home() {
    return (
        // <h1>
        //     Home Page
        // </h1>
        <div>
            <img src="./images/icon_wab.png" alt="asd" />
            <img src="./images/bg-img-2.jpg" />
            <h1>มาร์โรแทบ</h1>
            <p>
                เว็บไซต์สำหรับเจ้าของหอพัก ช่วยคำนวณค่าไฟฟ้า
                ในแต่ละเดือนด้วยกล้องโทรศัพท์มือถือ
                ลดระยะเวลาการจดค่าไฟฟ้าตามห้องพัก
            </p>
            <img src="./images/bg-01.png" />
            <h1>ใบเสร็จรอบเดือน ทุกวันที่ 1 ของแต่ละเดือน</h1>
            <input type="search" />
            <label >Room Number</label>
            <table border="1" >
                <thead>
                    <tr>
                        <th colSpan="3">ใบเสร็จ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>นายจำลอง    ประเสริฐพงษ์ </td>
                        <td>01/01/2566</td>
                        <td>Down load</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Home;