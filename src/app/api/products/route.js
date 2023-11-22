import getproducts from "@/lib/products";


export function GET() {
    let products = getproducts();
    return Response.json(products)
}


export async function POST(request) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let products = getproducts();
    let sig = Math.max(...products.map(u => u.id)) + 1

    const newUser = await request.json()
    products.push({ id: sig, ...newUser })
    return Response.json(products)
}

