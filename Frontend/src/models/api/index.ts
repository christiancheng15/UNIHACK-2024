export interface IAPIRequest {
    method: string,
    endpoint: string,
    data?: any,
    params?: any,
    showSuccessModal?: boolean | null,
    validationFunction?: ((data: any) => any) | null,
    onError?: ((data: any) => any) | null,
    disableErrorDialog?: boolean | null,
}

export interface IApiRequestProps {
    showSuccessModal?: boolean | null,
    disableErrorDialog?: boolean | null | undefined,
}


export default interface IError {
    msg: string
}