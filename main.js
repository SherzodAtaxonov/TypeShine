let inp =document.getElementById('inp')
let btn =document.getElementById('btn')
let ul =document.getElementById('ul')
let soat = document.getElementById('soat')
let p =document.getElementById('p')
let pp =document.getElementById('pp')

let edit =document.getElementById('edit')
let inpEdit =document.getElementById('inpEdit')
let btnEdit =document.getElementById('btnEdit')

let editId

let getData = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []
console.log(getData);
time()
btn.addEventListener('click',(d)=>{
    d.preventDefault()
    let val =inp.value.trim()
    if(val.length==0){
       p.textContent='Error...'
       setTimeout(()=>{
        p.textContent=''
       },2000)
    }else{
        getData.push({ism:val, yosh:30})
        localStorage.setItem('list', JSON.stringify(getData))
        inp.value=''
    }
    time()    
    edit.classList.add('hiden')
})

function editIten(itn){
    
    
    edit.classList.remove('hiden')
    editId = itn

}
btnEdit.addEventListener('click',(e)=>{
    e.preventDefault()
    let valEdit = inpEdit.value.trim()
       if(valEdit.length==0){
       pp.textContent='Error...'
       setTimeout(()=>{
        pp.textContent=''
       },2000)
        
    }else{
         getData.splice(editId,1,{ism:valEdit, yosh:30})

    localStorage.setItem('list', JSON.stringify(getData))
    time()
    edit.classList.add('hiden')
        inp.value=''

    }
  
})

function delet(i){
    let fildata= getData.filter((item, index)=>{
        return i != index 
    })
    getData=fildata
    localStorage.setItem('list', JSON.stringify(getData))
    time()
}  

function time(){
    
    let sana = new Date()
    
    
    let vaqt =sana.getHours()
    let min = sana.getMinutes()
    let secunt =sana.getSeconds()
    
    ul.innerHTML =''
    getData.forEach((item, index)=>{

        ul.innerHTML += `<li>
        <span>${item.ism}</span>
        <div class="img">
        
        <span>${vaqt}:${min}:${secunt}</span>
        <i class="fa-solid fa-pen" onclick=(editIten(${index}))></i>
        <i class="fa-solid fa-trash" onclick=(delet(${index}))></i>
        </div>
        </li>
        </li>  `
    })
    }




