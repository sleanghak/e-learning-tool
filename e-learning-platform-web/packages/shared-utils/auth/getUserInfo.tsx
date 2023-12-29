import fetcher from "../api/getDataApi";

const getUserInfo = async (url: string) => {
    try {
        const res = await fetcher(
            url, "user_token"
        );

        return res;
    } catch (error) {
        console.log("Error looking for user");
    }
};

export default getUserInfo;
