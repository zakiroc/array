let array = [1,2,3,4];
alert ('boshlanish arrayning uzunligi 4')
array = array.map(num =>{
    switch(num){
        case 1:return"apple"
        case 2:return"banana"
        case 3:return"melon"
        case 4:return"orange"
        default:return num;
    
    }
})
console.log(array);
if (confirm("sizning arrayningizdan malumotlarini olib tashamoqchimisiz?")){
    array.pop()
    console.log(array);
    alert('orange malumot ochildi')
    

}else{
    console.log('hech narsa ochirilmadi')
    alert('hech narsa ochirilmadi.')
}

    





