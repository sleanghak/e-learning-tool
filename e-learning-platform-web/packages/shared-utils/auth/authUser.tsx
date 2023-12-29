import axios from "axios";
import catchErrors from "./../exception/catchErrors";
import jsCookie from "js-cookie";
import { setCookie } from "nookies";



export const registerUser = async (
    username: string,
    email: string,
    password: string | number,
    dateOfBirth: Date | string,
    tel: string | number,
    gender: string,
    setError: any,
    setLoading: any,
    router: any
) => {
    try {
        const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signup`,
            {
                username,
                email,
                password,
                dateOfBirth,
                gender,
                role: "user",
                tels: [tel],
            }
        );
        router.push("/auth/signin");
    } catch (error) {
        setError(catchErrors(error)?.toString());
    }
    setLoading(false);
};

export const loginUser = async (email: string, password: string, setError: any, setLoading: any) => {
    setLoading(true);
    try {
        const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signin`,
            { email, password }
        );
        if (res.status != 200) return setError(res.data);
        // console.log(res.data?.data.roles[0])
        if (res.data?.data.role == "ROLE_USER") {
            setToken(res.data.data);
        } else {
            setError("You are admin");
        }
    } catch (error) {
        console.info(error);
        setError(catchErrors(error).toString());
    }
    setLoading(false);
};

export const redirectUser = (ctx, location) => {
    if (ctx.req) {
        ctx.res.writeHead(302, { Location: location });
        ctx.res.end();
    } else {
        if (typeof window !== "undefined") {
            // Client-side-only code
            window.location.href = location;
        }
    }
};

const setToken = (token: string) => {
    if (token) {
        setCookie(null, "token_user", token);
        jsCookie.set("token_user", JSON.stringify(token));
    }
    if (typeof window !== "undefined") {
        // Client-side-only code
        window.location.href = "/home"; // after login navigation
    }
};

export const logoutUser = (email: string) => {
    jsCookie.set("user_email", email.toString());
    jsCookie.remove("token_user");
    window.location.href = "/";
};
