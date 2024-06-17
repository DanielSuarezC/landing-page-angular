export const productList: product[] = [
    {id: 1, name: 'Lavandina', price: 10, description: 'Botella de 1 Litro'},
    {id: 2, name: 'Detergente', price: 7, description: 'Dura 120 lavados'},
    {id: 3, name: 'Limpia Vidrios', price: 9, description: 'Tus vidrios transparentes'},
    {id: 4, name: 'QuitaGrasa', price: 6},
    {id: 5, name: 'Perfumina', price: 15, description: 'El olor a campo más realista'}


]

export interface product{
    id: number | String;
    name: String;
    price: number;
    description?: String;
}