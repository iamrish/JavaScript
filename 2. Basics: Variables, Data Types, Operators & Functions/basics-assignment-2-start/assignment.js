function showAlert()
{
    alert("Text of my choice")
}

function showAlert1(name)
{
    alert(name)
}

function showAlert2(str1, str2, str3)
{
    alert(str1 + str2 + str3)
}
const task3Element = document.getElementById('task-3');
task3Element.addEventListener("click", showAlert)
showAlert()
showAlert1("Rishabh")
showAlert2("Rishabh ", "Malhotra ", "Nice")