import axios from "axios";
import axiosConfig from "./axiosConfig";

class API {
    constructor() {}

    //  working good
    async getCatetoryList() {
        const res = await axiosConfig.get("/api/meals/category");
        return res.data;
    }

    //  working good
    async getAutoSuggetion(limit = 5, value) {
        const a = [];
        const res = await axiosConfig.get(
            `/api/meals/autosuggestion?value=${value}`
        );
        for (let i = 0; i < res.data.length && i < limit; i++) {
            a.push(res.data[i].strMeal);
        }
        return a;
    }

    async getMeal(state, limit) {
        const data = await fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?s"
        );
        const jsonData = await data.json();
        const { meals } = jsonData;
        const tempMeal = [];
        for (let i = state; i < state + limit; i++) {
            tempMeal.push(meals[i]);
        }
        return tempMeal;
    }

    async getMealPagination(length, state, limit) {
        return (
            await axiosConfig.get(
                `/api/meals/mealpagination?limit=${limit}&state=${state}&length=${length}`
            )
        ).data;
    }
}

const api = new API();
const apiBase = "www.themealdb.com/api/json/v1/1";
export { apiBase };
export default api;
