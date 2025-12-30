export async function apiUser(url, timeOut = 400){
    const controller = new AbortController();    
    const id  = setTimeout(() => controller.abort(), timeOut);
    return await 
    fetch(
        url, 
        {
            signal: controller.signal
        }
    ).finally(() => clearTimeout(id));
}