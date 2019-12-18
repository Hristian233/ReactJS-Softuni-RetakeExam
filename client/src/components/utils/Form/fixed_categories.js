const fuelTypes = [
    {
        "_id": 1,
        "name": "Gasoline"
    },
    {
        "_id": 2,
        "name": "Diesel"
    },
    {
        "_id": 3,
        "name": "Hybrid Gasoline-Electro"
    },
    {
        "_id": 4,
        "name": "Hybrid Diesel-Electro"
    },
    {
        "_id": 5,
        "name": "LPG"
    }
    ,
    {
        "_id": 6,
        "name": "Electro"
    }
]

const price = [
    {
        "_id":0,
        "name":"Any",
        "array":[]
    },
    {
        "_id":1,
        "name":"$0 to $1000",
        "array":[0,1000]
    },
    {
        "_id":2,
        "name":"$1000 to $5000",
        "array":[1000,5000]
    },
    {
        "_id":3,
        "name":"$5000 to $1000",
        "array":[5000,1000]
    },
    {
        "_id":4,
        "name":"$10000 to $30000",
        "array":[10000,30000]
    },
    {
        "_id":5,
        "name":"More than $50000",
        "array":[50000,1500000]
    }
]


export {
    fuelTypes,
    price
}