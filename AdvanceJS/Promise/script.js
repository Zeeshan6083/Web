async function getData(value) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value === 3) {
                reject("Error Occured");
            }
            else{
                console.log("Data sent", value);
                resolve("Query Solved");
            }
        } , 5000);
        
    });
}


// getData(1)
// .then(() => getData(2))
// .then(() => getData(3)).then(() => getData(4)).then(() => getData(5)).catch((err) => console.log(err));

await getData(1)
await getData(2)
await getData(3)
await getData(4)await getData(5)
