'use client'
import { useEffect } from "react";
import { FilterTabs, Pagination, PropertyCard } from "@/component";
import { setPropertiesData } from "@/redux/slice/propertySlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { API_BASE } from "@/utils/constant";

// ------------------------------------------------

export default function Home({ data }) {
    const dispatch = useAppDispatch();
    const {
        page,
        limit,
        type,
        category,
        minPrice,
        maxPrice,
        minArea,
        maxArea,
        room,
        search,
        propertiesData

    } = useAppSelector((state) => state.properyReducer);
    const queryParams = new URLSearchParams();

    const fetchPropertiesData = async () => {
        if (page) queryParams.append("page", page);
        if (limit) queryParams.append("limit", limit);
        if (type) queryParams.append("type", type);
        if (category) queryParams.append("category", category);
        if (minPrice) queryParams.append("minPrice", minPrice);
        if (maxPrice) queryParams.append("maxPrice", maxPrice);
        if (minArea) queryParams.append("minArea", minArea);
        if (maxArea) queryParams.append("maxArea", maxArea);
        if (room) queryParams.append("room", room);
        if (search) queryParams.append("search", search);

        const url = `${API_BASE}/api/v1/properties${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;

        const fetchData = await fetch(url)
            .then((res) => res.json())
            .catch((err) => console.log("err", err));

        if (fetchData) {
            dispatch(setPropertiesData(fetchData));
        }
    }

    useEffect(() => {
        if (data) {
            dispatch(setPropertiesData(data));
        }
    }, [data])

    useEffect(() => {
        fetchPropertiesData();
    }, [
        page,
        limit,
        type,
        category,
        minPrice,
        maxPrice,
        minArea,
        maxArea,
        room,
        search
    ])

    return (
        <div className="w-full flex justify-center  p-4">
            <div className="w-full max-w-[900px] xl:max-w-[1600px] flex flex-col justify-center items-center gap-16" >
                <FilterTabs />
                <div className="w-full xl:max-w-[900px] 2xl:max-w-[1200px] 3xl:max-w-[1600px] flex flex-wrap gap-10 lg:gap-12 justify-center lg:justify-between xl:justify-start ">
                    {propertiesData?.properties?.length > 0 ? propertiesData?.properties?.map((property) => (
                        <PropertyCard
                            key={property?._id}
                            data={property}
                        />
                    )) : <p>No data available !! </p>}
                </div>
                <Pagination />
            </div>
        </div>
    );
}
