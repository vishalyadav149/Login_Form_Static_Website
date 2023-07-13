function validateForm(){
    
    let email = document.getElementById('emailid').value;
    let password = document.getElementById('pass').value;
  
    // Reset error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
   
    if (email == "")
    {
        document.getElementById('emailError').textContent = 'Enter email';
        if(password == "")
        {
            document.getElementById('passwordError').textContent = 'Enter password';
            return false;
        }
        else if(password !="Vishal@123"){
            document.getElementById('passwordError').textContent = 'Enter valid password';
            return false;
        }
    }
    else if (email !="vishal.y@sankeysolutions.com"){
        document.getElementById('emailError').textContent = 'Enter valid email';
        if(password == "")
        {
            document.getElementById('passwordError').textContent = 'Enter password';
            return false;
        }
        else if(password !="Vishal@123"){
            document.getElementById('passwordError').textContent = 'Enter valid password';
            return false;
        }
        
    }
    else if (email =="vishal.y@sankeysolutions.com"){
        if(password == "")
        {
            document.getElementById('passwordError').textContent = 'Enter password';
            return false;
        }
        else if(password !="Vishal@123"){
        document.getElementById('passwordError').textContent = 'Enter valid password';
        return false;
        }
        
    }

    document.getElementById('emailid').value = '';
    document.getElementById('pass').value = '';

}

  

  
  