const cakeList = [{
    id: 1,
    nama: "Full Chocholate",
    sku: "115",
    kategori: "Kue Dewasa",
    rasa: "Cokelat",
    harga: "299.000",
    amount: 299000,
    rangeHarga: "IDR 299.000 - IDR 499.000",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    cakeImage: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?cs=srgb&dl=pexels-abhinav-goswami-291528.jpg&fm=jpg'
},
{
    id: 2,
    nama: "Mix Cake",
    sku: "116",
    kategori: "Kue Dewasa",
    rasa: "Cokelat",
    harga: "199.000",
    amount: 199000,
    rangeHarga: "IDR 199.000 - IDR 399.000",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    cakeImage: 'https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?cs=srgb&dl=pexels-eric-montanah-1414234.jpg&fm=jpg'
},
{
    id: 3,
    nama: "Chocholate Vanilla Cake",
    sku: "135",
    kategori: "Kue Dewasa",
    rasa: "Cokelat & Vanila",
    harga: "499.000",
    amount: 499000,
    rangeHarga: "IDR 499.000 - IDR 599.000",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    cakeImage: 'https://images.pexels.com/photos/6619859/pexels-photo-6619859.jpeg?cs=srgb&dl=pexels-polina-kovaleva-6619859.jpg&fm=jpg'
},
{
    id: 4,
    nama: "Chocholate Strawberry",
    sku: "114",
    kategori: "Kue Dewasa",
    rasa: "Cokelat & Strawberry",
    harga: "299.000",
    amount: 299000,
    rangeHarga: "IDR 299.000 - IDR 699.000",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    cakeImage: "https://images.pexels.com/photos/5946037/pexels-photo-5946037.jpeg?cs=srgb&dl=pexels-any-lane-5946037.jpg&fm=jpg"
},
{
    id: 5,
    nama: "Fruit Pancake",
    sku: "125",
    kategori: "Kue Dewasa",
    rasa: "Fruit",
    harga: "299.000",
    amount: 299000,
    rangeHarga: "IDR 299.000 - IDR 399.000",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    cakeImage: "https://images.pexels.com/photos/7664374/pexels-photo-7664374.jpeg?cs=srgb&dl=pexels-solodsha-7664374.jpg&fm=jpg"
},
{
    id: 6,
    nama: "Fruit Cake",
    sku: "215",
    kategori: "Kue Dewasa",
    rasa: "Fruit",
    harga: "299.000",
    amount: 299000,
    rangeHarga: "IDR 299.000 - IDR 399.000",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    cakeImage: "https://images.pexels.com/photos/4109791/pexels-photo-4109791.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4109791.jpg&fm=jpg"
},
{
    id: 7,
    nama: "Pancake Strawberry",
    sku: "415",
    kategori: "Kue Dewasa",
    rasa: "Stawberry",
    harga: "299.000",
    amount: 299000,
    rangeHarga: "IDR 299.000 - IDR 350.000",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    cakeImage: 'https://images.pexels.com/photos/1998632/pexels-photo-1998632.jpeg?cs=srgb&dl=pexels-kristina-paukshtite-1998632.jpg&fm=jpg'
},
{
    id: 8,
    nama: "Fruit Pancake",
    sku: "165",
    kategori: "Kue Dewasa",
    rasa: "Fruit",
    harga: "299.000",
    amount: 299000,
    rangeHarga: "IDR 299.000 - IDR 469.000",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    cakeImage: "https://images.pexels.com/photos/7144336/pexels-photo-7144336.jpeg?cs=srgb&dl=pexels-monstera-7144336.jpg&fm=jpg"
},
{
    id: 9,
    nama: "Macaroon",
    sku: "105",
    kategori: "Kue Dewasa",
    rasa: "Cokelat",
    harga: "248.000",
    amount: 248000,
    rangeHarga: "IDR 248.000 - IDR 500.000",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    cakeImage: "https://images.pexels.com/photos/5423253/pexels-photo-5423253.jpeg?cs=srgb&dl=pexels-mariah-green-5423253.jpg&fm=jpg"
},
{
    id: 10,
    nama: "Mix Cake",
    sku: "165",
    kategori: "Kue Dewasa",
    rasa: "Cokelat",
    harga: "199.000",
    amount: 199000,
    rangeHarga: "IDR 199.000 - IDR 499.000",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    cakeImage: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?cs=srgb&dl=pexels-dmitry-zvolskiy-1721932.jpg&fm=jpg"
}
]

export default cakeList