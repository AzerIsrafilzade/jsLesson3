

// const let var

// var btn = document.querySelector(".navbar-buttonu")




//Interview suali
// var global scopedur, var istifade etmirik
// const - html-den bir shey secende const-dan istifade edeceyik
// let - qiymeti deyishdirmeyi icaze verir "for" ile ishledilir
// yaratmaq, yeniden yaratmaq, qiymetini deyishmek (ashagidaki let-e bax)
// let ve const-i yaratmaq ucun tekrar yazmaq olmaz

// let isOnline = true
// isOnline = false
// for (let i=0; i<10; i++) 


// block scope elementler - let ve const-i tekrar ashgidaki kimi yazmaq olar

// {let telebe = "Elgun"

// }

// {let telebe = "Elmar"

// }

// []-array, {}-obyekt bunlar kompleks ve ya referans tipler adlanir
// primitiv tipler "" stringler

const telebeler = [

{ 
ad:"Elmar",
 soyad: "Misirzade", 
 education: "ADA Ûniversity", 
 isEducated: true,
 age: 20

},

{ 
 ad:"Elgun",
 soyad: "Resulov", 
 education: "WCU Ûniversity", 
 isEducated: true,
 age: 21

},

{ 
    ad:"Fidan",
    soyad: "Sultanli", 
    education: "AZtu Ûniversity", 
    isEducated: true,
    age: 19
   
   },

//    Array methods (W3 school-da ketodlara bxmaq olar) - Push pop ansaq kvadrat moterizenin icinde yazilir
//    consol.log () bize sehflere baxmaq ucun lazim olur - node ile terminaldan baxmaq

    telebeler.push ({
    ad: "Anvar", 
    soyad: "Khalid", 
    education: "ADA University", 
    tehsillidirMi: true, 
    age: 27

   }),

    
   const tbodyTeqi = document.querySelector ("tbody")

//i++ increment
//1 = i+1 i+=1 i++ (++i i-- --i bunlari arasdirmaq)

for(let i=0; i<telebeler. length; i++) {
    tbodyTeqi. innerHTML  += `
    <tr>
    <td>${telebeler[i].ad} </td>
    <td>${telebeler[i].soyad}</td>
    <td>${telebeler[i].education}</td>
    <td>${telebeler[i].tehsillidirMi ? '<span class="text-success">Tehsil alir</span>' : '<span class="text-danger">Akademiyadan xaric olu</span>' }</td>
    <td>${telebeler[i].age}</td>
    </tr>`
}
//  x=10
//  x+=20 
// cut dirnaq icerisinde cut dirnaq yazmaq olmaz, ferqli dirnaqda yazilmalidir

// if default olaraq true-dur
if(telebeler[i].tehsillidirMi){
console. log("tehsillidir")
}

else {
    console.log("tehsilli deyil")
}

// one line killer
// ? if-i bildirir, : else-i bildirir
telebeler[i].tehsillidirMi ? console. log("tehsilli deyil") : console.log("tehsilli deyil")

]