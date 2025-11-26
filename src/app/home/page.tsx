

export default async function page(){
    await new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Please wait");
        },2000);
    })
    return (
        <div>
            
        </div>
    )
}