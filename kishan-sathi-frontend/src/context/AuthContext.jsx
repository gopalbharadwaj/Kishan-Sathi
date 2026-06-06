import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const [user, setUser] = useState(null);

    const [token, setToken] =
        useState(
            localStorage.getItem("token")
        );

    // Persist Login

    useEffect(() => {

        const savedUser =
            localStorage.getItem("user");

        if (savedUser) {

            setUser(
                JSON.parse(savedUser)
            );

        }

    }, []);

    // Login

    const login = (
        userData,
        jwtToken
    ) => {

        setUser(userData);

        setToken(jwtToken);

        localStorage.setItem(
            "user",
            JSON.stringify(userData)
        );

        localStorage.setItem(
            "token",
            jwtToken
        );

    };

    // Logout

    const logout = () => {

        setUser(null);

        setToken(null);

        localStorage.removeItem("user");

        localStorage.removeItem("token");

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () => useContext(AuthContext);