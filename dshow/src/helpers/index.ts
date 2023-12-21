export const getProducts = async() => {
    const res = await fetch("http://fakestoreapiserver.reactbd.com/smart");
    if(!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
};