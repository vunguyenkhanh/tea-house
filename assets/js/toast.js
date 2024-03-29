export function toast({title, message, type,duration}){
    const main = document.getElementById('toast')
    if(main){
        const toast = document.createElement('div')
        const icons = {
            success:'bx bxs-check-circle',
            waring: 'bx bxs-error-circle',
            error: 'bx bxs-error-circle',

        }
        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);
        
        // Remove toast khi click
        toast.onclick = function(e){
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const delay = Math.floor(duration/1000)
        const icon = icons[type]
        toast.classList.add('toast', `toast--${type}`)
        toast.style.animation = `slideInLeft 0.3s ease, fadeOut 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class='bx bxs-x-circle'></i>
            </div>
        `;
        main.appendChild(toast)
        
    }
}


export function showSuccessToast(){
    toast({
        title:'Success',
        message:'You have successfully registered, please log in to continue',
        type:'success',
        duration:3000
    })
}
export function showSuccessToastSignIn(){
    toast({
        title:'Success',
        message:'Login successful',
        type:'success',
        duration:3000
    })
}
export function showErrorToast(){
    toast({
        title: "Error",
        message: "Registration failed, please review the registration section for possible duplicates",
        type: "error",
        duration: 3000,
    });
}
export function showErrorToastSignIn(){
    toast({
        title: "Error",
        message: "Login failed, please check your username and password",
        type: "error",
        duration: 3000,
    });
}

