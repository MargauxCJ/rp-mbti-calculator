export interface Type {
    id: number;
    wing: number[];
    int: number;
    desint: number
}

const Type : Type[] = [
    { id : 1, wing: [9,1], int: 7, desint: 4},
    { id : 2, wing: [1,3], int: 4, desint: 8},
    { id : 3, wing: [2,4], int: 6, desint: 9},
    { id : 4, wing: [3,5], int: 1, desint: 2},
    { id : 5, wing: [4,6], int: 8, desint: 7},
    { id : 6, wing: [5,7], int: 9, desint: 3},
    { id : 7, wing: [6,8], int: 5, desint: 1},
    { id : 8, wing: [7,9], int: 2, desint: 5},
    { id : 9, wing: [8,1], int: 3, desint: 6},
]