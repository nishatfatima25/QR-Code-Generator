const inp = document.querySelector('#qrInput');
const genBtn = document.querySelector('#generateBtn');
const qrPopup = document.querySelector('#qrPopup');
const qrImg = document.querySelector('#qrImg');
const downloadBtn = document.querySelector('#downloadBtn');
const closeBtn = document.querySelector('#closeBtn');
const mainContainer = document.querySelector("#mainContainer");
const clearBtn = document.querySelector("#clearBtn");

const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

genBtn.addEventListener('click', ()=>{

    if(!inp.value || inp.value==" "){
        alert("Enter text or URL first!")
    }
    else{
        const imgUrl = url+inp.value;
        qrImg.setAttribute('src', imgUrl);
        setTimeout(()=>{
            qrPopup.classList.add('show');
            mainContainer.classList.add('opacity');
        },1000)
    }
    
});

downloadBtn.addEventListener('click',() => {
    const imgUrl = url+inp.value;
    fetch(imgUrl)
    .then((res) => res.blob())
    .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'qr.jpg';
        link.click();
    })
});

closeBtn.addEventListener('click', ()=>{
    qrPopup.classList.remove('show');
    mainContainer.classList.remove('opacity');
})

clearBtn.addEventListener('click', ()=>{
    inp.value="";
})




//blob (binary large object) : converts url or response data in file like object
// are particularly used for working with file data without needing to save it on a server
//provide a way to work with file data directly in the browser 
//creating a blob:
// URL.createObjectURL()
//          ^
//          |  
// <a href=" " download>Download</a>
