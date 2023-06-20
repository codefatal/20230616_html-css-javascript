
function check_pw(){
    var password = document.getElementById('passwd').value;
    var strongPassword = new RegExp('^[A-Z][a-zA-Z0-9]{5,12}|^[A-Z][a-zA-Z0-9_]{5,12}');
    if(password != '' && !strongPassword.test(password)){
        alert("조건에 맞게 입력해주세요.");
    }
 
    if(document.getElementById('passwd').value != '' && document.getElementById('passwdCheck').value != ''){
        if(document.getElementById('passwd').value != document.getElementById('passwdCheck').value){
            alert("동일하게 입력해주세요.");
            document.getElementById('passwd').value = '';
            document.getElementById('passwdCheck').value = '';
            return false;
        }
    }
}

function onCheck(){
    var int_check = document.querySelectorAll('input[name=check]:checked').length;

    if(int_check == 0) {
        alert("체크박스를 하나 이상 선택해주세요.");
        return false;
    } else {
        return true;
    }
}

function idCheck() {
    var id_check = document.getElementById('user_id').value;
    var checkID = "asdf";
    if(id_check == checkID) {
        alert("중복된 ID입니다.");
        document.getElementById('user_id').value = '';
    } else {
        alert("사용 가능한 ID입니다.");
    }
}