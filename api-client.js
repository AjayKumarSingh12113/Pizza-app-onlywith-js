// export function apicall(URL){
//     const promise= fetch(URL);
//     return promise;
// }

export async function apicall(URL){
    try{
    const response= await fetch(URL);// yeh sync/blocked hai to yeh apni agli line ko chalene nhi dega 
    // eske liye hame esko async bana padega eske function ko. nhi banayege to eske code faat jaiyega.
    return response;
    }
    catch(err){
        throw err;
    }
}