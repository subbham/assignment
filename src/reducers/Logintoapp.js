const initialstate = {}
const Logintoapp = (state = initialstate, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            let login = {
                username: "hruday@gmail.com",
                password: "hruday123"
            }
            return state = login;

        default: return {}
    }
}

export default Logintoapp

