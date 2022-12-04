let inputs=document.querySelectorAll('input')
let go=document.querySelector('.go')
go.addEventListener('click',outwindow)
function outwindow(){
if(inputs[0].value===''|| inputs[1].value==='')
{
    window.alert('您未输入密码或帐号，请输入')
}
}