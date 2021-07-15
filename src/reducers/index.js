import { combineReducers } from "redux";
import Logintoapp from "./Logintoapp";
import DashboardDatashow from "./DashboardDatashow";
const rootReducer = combineReducers({
    Logintoapp: Logintoapp,
    DashboardDatashow: DashboardDatashow
})

export default rootReducer;