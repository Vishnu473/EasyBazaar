import { CategoryItem, CategoryList } from "@/interfaces/types";
import axiosInstance from "./axiosService"

export const fetchCategories = async():Promise<CategoryList[]> => {
    const response = await axiosInstance.get('/products/categories')
    return response.data;
}

export const fetchCategoryItems = async({url,skip,limit}:CategoryItem):Promise<{products:CategoryItem[],total:number}> => {
    const response = await axiosInstance.get(`${url}?limit=${limit}&skip=${skip}`)
    return response.data;
}