function find(arr){
    const map = new Map();
    let minIndex = 0;
    for(let i=0; i<arr.length; i++)
    {
        if(map.has(arr[i]))
        {
            map[arr[i]]++;
        }
        map.set(arr[i], 1);
    }

}