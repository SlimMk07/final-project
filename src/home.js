function load(){
    const loginBtn = document.getElementById('login');
    const signupBtn = document.getElementById('signup');

    loginBtn.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;
        Array.from(e.target.parentNode.parentNode.classList).find((element) => {
            if(element !== "slide-up") {
                parent.classList.add('slide-up')
            }else{
                signupBtn.parentNode.classList.add('slide-up')
                parent.classList.remove('slide-up')
            }
        });
    });

    signupBtn.addEventListener('click', (e) => {
        let parent = e.target.parentNode;
        Array.from(e.target.parentNode.classList).find((element) => {
            if(element !== "slide-up") {
                parent.classList.add('slide-up')
            }else{
                loginBtn.parentNode.parentNode.classList.add('slide-up')
                parent.classList.remove('slide-up')
            }
        });
    });
    
    const connect = document.getElementById("connect")
        
        connect.addEventListener('click',(e)=>{let login=document.getElementById("form-structor") 
        console.log("display1", login.style.display)
        login.style.display=="none" ? login.style.display="block":login.style.display="none"
        console.log("display2", login.style.display)
    })

}

validation=()=>{
    let name=document.getElementById('name').value
    let comm=document.getElementById('commentaire').value
    let email1=document.getElementById('email').value
    let regexemail=/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/


    if(name==='')
    {
        document.getElementById("msgname").innerHTML = "invalid Name ! ";
    }
    else 
    document.getElementById("msgname").innerHTML = '<i class="fas fa-thumbs-up"></i>';


    if(email1==='' || (regexemail.test(email1)===false))
    {
        document.getElementById("msgmail").innerHTML = "invalid E-mail !";
    }
    else
    document.getElementById("msgmail").innerHTML = '<i class="fas fa-thumbs-up"></i>';

    if(comm==='')
    {
        document.getElementById("msgcomm").innerHTML = "Leave a comment !";   
    }
    else 
    document.getElementById("msgcomm").innerHTML = '<i class="fas fa-thumbs-up"></i>';

}

