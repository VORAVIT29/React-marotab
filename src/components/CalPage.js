import { useEffect, useState } from "react";
import axios from "axios";


function CallPage() {
    const [posts, setPosts] = useState([]);

    async function getAPI() {
        const id = { idHost: 2 };
        // console.log(id);

        // Rest Http API
        const hostNamePython = 'http://localhost:5000';
        await axios.post(`${hostNamePython}/api/get-data`, id)
            .then(response => {
                if (response.status === 200) {
                    setPosts(response.data);
                }
            })
            .catch(error => {
                console.log('Error =>', error.message);
            })
    };

    useEffect(() => {
        getAPI();
    }, []);

    const elementList = posts.map(post => {
        return (
            <tr>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.age}</td>
            </tr>
        );
    });

    return (
        <div>
            <h4>
                Select Data Table Info Miter
            </h4>
            <br />
            <table border="3">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {elementList}
                </tbody>
            </table>
        </div>
    );
}

export default CallPage;