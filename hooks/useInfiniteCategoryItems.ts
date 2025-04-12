import { CategoryItemResponse } from "@/interfaces/types"
import { fetchCategoryItems } from "@/services/apiService";
import { useInfiniteQuery } from "@tanstack/react-query"

export const useInfiniteCategoryItems = (url: string, limit = 5) => {
    return useInfiniteQuery<CategoryItemResponse>({
        queryKey: ['categoryItems', url],
        initialPageParam: 0,
        queryFn: async ({ pageParam}) => {
            const { products, total } = await fetchCategoryItems({
                url,
                skip: pageParam,
                limit,
            });
            return { products, total, skip: pageParam, limit };
        },
        getNextPageParam: (lastPage, allPages) => {
            const nextSkip = lastPage.skip + lastPage.limit;
            return nextSkip < lastPage.total ? nextSkip : undefined;
        },
        staleTime: 1000 * 60 * 5,
    });
};