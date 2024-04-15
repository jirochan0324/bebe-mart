// h12345@gmail.com
// 12345

let sendButton1 = document.getElementById('button1')
let sendButton2 = document.getElementById('button2')
let nameDisplay = document.getElementById('userName')
let mailForm = document.getElementById('mail')
let mailLabel = document.querySelector('.step1 .placeholder')
let userPass = document.getElementById('pass')
let passLabel = document.querySelector('.step2 .form .placeholder')
let slide1 = document.querySelector('.step1')
let slide2 = document.querySelector('.step2')
let address = mailForm.value
let userName = 'aa'
let mailError = document.querySelector('.stepSlide .step1>p')
let passError = document.querySelector('.stepSlide .step2>p')
let visible = document.getElementById('visible')


mailForm.addEventListener('focus', function () {
  mailLabel.classList.add('focused')
  mailError.classList.remove('red')
  mailError.innerText = 'お客様の○○アカウントを使用します。'
})

mailForm.addEventListener('blur', function () {
  if (mailForm.value === '') {
    mailLabel.classList.remove('focused')
  }
})

userPass.addEventListener('focus', function () {
  passLabel.classList.add('focused')
  passError.classList.remove('red')
  passError.innerText = '続行するにはパスワードを入力してください。'
})

userPass.addEventListener('blur', function () {
  if (userPass.value === '') {
    passLabel.classList.remove('focused')
  }
})

visible.addEventListener("click", (e) => {

  if (userPass.type === 'password') {

    // (5)パスワードを表示する
    userPass.type = 'text';
    // visible.textContent = '非表示';

  } else {

    // (6)パスワードを非表示にする
    userPass.type = 'password';
    // visible.textContent = '表示';
  }
});

// mailForm.addEventListener('keyup', function () {
//   address = mailForm.value
//   if (address == 'h12345@gmail.com') {
//     userName = 'たなかたろう'
//     nameDisplay.innerText = userName
//   } else {
//     nameDisplay.innerText = ''
//   }
// })
const [a, b] = [123, 1234];

sendButton1.addEventListener('click', function () {
  send1()
});

mailForm.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    send1()
  }
});

sendButton2.addEventListener('click', function () {
  send2()
})

userPass.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    send2()
  }
});
// export { userName as default};

function send1() {
  address = mailForm.value
  if (address == 'h12345@gmail.com') {
    slide1.classList.add('slide')
    slide2.classList.add('slide')
  } else if (address === '') {
    mailError.classList.add('red')
    mailError.innerText = 'メールアドレスを入力してください。'
  } else {
    mailError.classList.add('red')
    mailError.innerText = 'このメールアドレスは登録されていません。'
  };
}

function send2() {
  let pass = userPass.value
  if (pass == '12345' && address == 'h12345@gmail.com') {
    // open('login.html', '_top', 'communism')
    window.open("sm.html")
  } else if (pass === '') {
    passError.classList.add('red')
    passError.innerText = 'パスワードを入力してください。'
  } else {
    passError.classList.add('red')
    passError.innerText = 'パスワードが一致しません。'
  }
}