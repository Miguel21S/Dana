
const root = "http://localhost:3000/api/";

export const LoginUser = async (user) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    }
    try {
        const response = await fetch(`${root}auth/login`, options);
        const data = await response.json();

        if(!response.ok){
            const errData = await response.json();
            throw new Error(errData.message || 'error unfamiliar')
        }

        if (!data.success) {
            throw new Error(data.message);
        }
        return data;

    } catch (error) {
        console.error("Error in LoginUser:", error.message);
        throw error;

    }
}