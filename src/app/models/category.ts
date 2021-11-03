import { Metadata } from './dish'
export interface Category {
    _id: string,
    description: string,
    imagePath: string,
    name: string,
    status: string,
    metadata: Metadata
}