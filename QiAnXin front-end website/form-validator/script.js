
//定义变量，选取各元素
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // 使用HTML容器API接口检查表单输入是否有效
  isValid = form.checkValidity();
  // 如果输入无效
  if (!isValid) {
    // 错误消息提示
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  // 检查两次输入是否相同
  if (password1El.value === password2El.value) {
    // 如果输入匹配，提示值相同，边框变绿
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    // 如果不匹配, 输入边框变红色
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }
  // 如果表单输入有效&密码正确
  if (isValid && passwordsMatch) {
    // 成功时提示文本
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    password: form.password.value,
  };
  // 打印用户数据
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // 有效表单
  validateForm();
  // 如果有效，提交表单
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// 事件监听
form.addEventListener('submit', processFormData);
  }
}

