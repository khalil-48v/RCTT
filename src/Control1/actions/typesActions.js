

const OObj = {
    ADD_PRODUCT: "ADD_PRODUCT",
    DELETE_PRODUCT: "DELETE_PRODUCT",
    UPDATE_PRODUCT: "UPDATE_PRODUCT",
    GET_PRODUCT_CATEGORY: " GET_PRODUCT_CATEGORY"
}

export const { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, GET_PRODUCT_CATEGORY } = OObj
export function ADD_PRODUCT(prd) {
    return {
        type: ADD_PRODUCT,
        payload: prd
    }
}

export function DELETE_PRODUCT(prd) {
    return {
        type: DELETE_PRODUCT,
        payload: prd
    }
}
export function UPDATE_PRODUCT(prd) {
    return {
        type: UPDATE_PRODUCT,
        payload: prd
    }
}
export function GET_PRODUCT_CATEGORY(cat) {
    return {
        type: GET_PRODUCT_CATEGORY,
        payload: cat
    }
}



