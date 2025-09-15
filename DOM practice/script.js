function register(){

            userNameInputValue = document.querySelector("#userName").value;
            emailInputValue = document.querySelector('#email').value;
            passwordInputValue = document.querySelector('#password').value;

            if(userNameInputValue.trim().length > 0 ){
                document.querySelector("#userMsg").innerHTML = `<div class="alert alert-primary" role="alert">
                                                                    Well Done
                                                                </div>`
            }else{
                document.querySelector("#userMsg").innerHTML = `<div class="alert alert-primary text-center" role="alert">
                                                                     
                                                                     Plese enter your valid name
                                                                </div>`
            }
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
            if(emailPattern.test(emailInputValue)){
                document.querySelector("#emailuserMsg").innerHTML = `<div class="alert alert-primary" role="alert">
                                                                    email address added successfully
                                                                </div>`
            }else{
                document.querySelector("#emailuserMsg").innerHTML = `<div class="alert alert-primary text-center" role="alert"> 
                                                                     email address is not in pattern
                                                                </div>`
            }

            if(passwordInputValue.trim().length >= 6){
                document.querySelector("#passwordalert").innerHTML = `<div class="alert alert-primary" role="alert">
                                                                    Well Done
                                                                </div>`
            }else{
                document.querySelector("#passwordalert").innerHTML = `<div class="alert alert-primary text-center" role="alert">
                                                                     
                                                                     Plese enter your valid Password
                                                                </div>`
            }
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelector("#changeTheme").addEventListener('click', ()=>{
                console.log(document.body.classList)
                if(document.body.classList.contains('bg-light')){
                document.body.classList.remove('bg-light', 'text-dark') 
                document.querySelector('body').classList.add('bg-dark', 'text-primary')
            }
             else {
            document.body.classList.remove('bg-dark', 'text-primary')

            document.querySelector('body').classList.add('bg-light', 'text-dark')
             }
        
            })
        })

