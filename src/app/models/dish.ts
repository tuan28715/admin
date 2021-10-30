export interface Dish {
    id: string,
    name: string,
    price: number,
    description: string,
    imagePath: string,
    type: string,
    status: string,
    metadata: Metadata
}
export interface Metadata {
    actor: string,
    created: string,
    updated: string
}