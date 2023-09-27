export const handleGet = async (url) => {
    try {
        const response = await fetch(`http://localhost:5000${url}`);
        const jsonResponse = await response.json();
        return jsonResponse;
    }
    catch (err) {
        console.log(err, "ERROR");
        throw err;
    }
}