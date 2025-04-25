const getDataFromDB = ()=>{
    const jsonData = localStorage.getItem('lawyer') 
   
    return jsonData ? JSON.parse(jsonData) : []
}

const setDataToDB = (id) =>{
    const data = getDataFromDB()
    if(data.includes(id)){
        alert('already exists')
    }else{
        data.push(id)
        localStorage.setItem('lawyer',JSON.stringify(data))
    }
  
}

export {getDataFromDB,setDataToDB}