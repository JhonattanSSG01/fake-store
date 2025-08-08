const axios = require('axios');

import API_CONFIG from "@/utils/apiConfig";
import { ResponseApi } from "@/utils/types";
import { AxiosError } from "axios";

const productsService = async (url?: string, param?: string): Promise<ResponseApi> => {
    const URL = param !== undefined ? `${url}/${param}` : API_CONFIG.PRODUCT;

    try {
        const response = await axios.get(API_CONFIG.PRODUCTS);

         let message = "Success";
        let status = 200;

        return {
            message: message,
            status: status,
            data: response.data,
        };
    } catch (error) {
        let message = "Unexpected error";
        let status = 500;

        if (axios.isAxiosError(error)) {
            const err = error as AxiosError;

            if (err.response) {
                status = err.response.status;
                message =
                    status === 404
                        ? "Country not found"
                        : status === 500
                            ? "Server error"
                            : err.message;
            } else {
                message = "Network error or no response";
            }
        }

        return {
            message,
            status,
            data: [],
        };

    };
};

export default productsService;