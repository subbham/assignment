const initialstate = []
const DashboardDatashow = (state = initialstate, action) => {
    switch (action.type) {
        case "SHOW_DASHBOARD":
            return state = action.payload

        default: return []
    }
}

export default DashboardDatashow;
