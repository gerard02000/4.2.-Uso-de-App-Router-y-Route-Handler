import getproducts from "@/lib/products";

export function GET(request, { params }) {
    let products = getproducts();
    let usuario = products.find(user => products.id == params.id)

    return Response.json(usuario)
}

export async function PUT(request, { params }) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let products = getproducts();
    // Obtenemos posición    
    const pos = products.findIndex(products => products.id == params.id)

    // Modificamos usuario
    const newproducts = await request.json()
    products.splice(pos, 1, { id: Number(params.id), ...newproducts })

    return Response.json(products)
}


export function DELETE(request, { params }) {
    let products = getproducts();
    // Obtenemos posición    
    const pos = products.findIndex(products => products.id == Number(params.id))

    // Eliminamos usuario
    if (pos != -1)  // Si es encontrado
        products.splice(pos, 1)

    return Response.json(products)
}