export interface RequestConfig<B, P> {
    url: string
    method: string
    body?: B | unknown
    params?: P | unknown
}
