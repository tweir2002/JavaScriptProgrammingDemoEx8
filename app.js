function clickHandler()
{
    const inputElement = document.getElementById('firstNameInput');
    const target = document.getElementById('target-p');
    target.innerHTML = inputElement.Value;
}
const button = document.getElementById('btnClickMe');
button.addEventListener('click', clickHandler);
button.addEventListener('mouseover', clickHandler);
const chkMyCheckBox = document.getElementById('chkMyCheckBox');
chkMyCheckBox.addEventListener('change', showCheckBoxState);
function showCheckBoxState(event)
{
    console.log(event)
    const inputElement = document.getElementById('chkMyCheckBox');
    const target = document.getElementById('chkboxState');
    target.innerHTML = inputElement.checked;
}
const vehicleMakes = document.getElementById('vehicleMakes');
vehicleMakes.addEventListener('change', vehicleMakeChange);
function vehicleMakeChange(event)
{
    const index = event.target.selectedIndex;
    const option = event.target.selectedOptions[0];
    const displayElement = document.getElementById('selectedMake');
    console.log(event.target.options[index].value);
    if(index > 0)
    {
        displayElement.innerHTML = 'You selected Make: ${option.text} Id: ${option.value} Index: ${index}';
    }
    else
    {
        displayElement.innerHTML = '';
    }
}
const loginHandler = function()
{
    const user = document.getElementById('userNameInput');
    const pwd = document.getElementById('passwordInput');
    const pwdR = document.getElementById('passwordRepeatInput');
    const p = document.getElementById('login');
    if(pwd.value != pwdR.value)
    {
        p.innerHTML = 'Passwords do not match';
    }
    else
    {
        p.innerHTML = 'User: ${user.value} Pwd: ${pwd.value}';
    }
}
document.getElementById('btnLogin').addEventListener('click', loginHandler);

