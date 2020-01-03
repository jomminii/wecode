const btn = document.querySelector(".button");
const template = document.querySelector("#template");
const idInput = document.querySelector("#id-input");
const textInput = document.querySelector("#text-input");
const ul = document.querySelector("#print-section");

function listup() {
  const li = document.createElement("li");
  const content = document.importNode(template.content, true);
  const id = content.querySelector("#id");
  const textPrinted = content.querySelector("#text-printed");

  // default 문장 숨기기
  document.querySelector(".no-text").style.display = "none";

  // 아이디나 내용에 아무것도 없으면 아래 과정을 진행하지 않음(빈 리스트가 쌓이는 것을 방지)
  if (idInput.value !== "" && textInput.value !== "") {
    content.querySelector("#id").textContent = "ID : " + idInput.value;
    idInput.value = "";
    content.querySelector("#text-printed").textContent =
      "내용 : " + textInput.value;
    textInput.value = "";

    li.appendChild(id);
    li.appendChild(textPrinted);
    ul.appendChild(li);
  } else {
  }
}
btn.addEventListener("click", listup);

/*1. 버튼을 클릭하면 "안녕하세요"를 alert로 출력하시오. */

const oneBtn = document.querySelector("#one_btn");
function alert_01() {
  alert("안녕하세요");
}

oneBtn.addEventListener("click", alert_01);

/*2. 버튼을 클릭하면 현재 날짜/시간을 alert로 출력하시오. */
const twoBtn = document.querySelector("#two_btn");
function alert_02() {
  const date = new Date();
  alert(date);
}

twoBtn.addEventListener("click", alert_02);

/*3. 파일명을 입력해서 버튼을 눌러서 hwp파일 인지 확인해서 p태그 사이에 결과를 출력하시오. */

const threeBtn = document.querySelector("#three_btn");
function alert_03() {
  const hwpChk = document.querySelector("#hwpChk");
  if (hwpChk.value.indexOf(".hwp") !== -1) {
    document.querySelector("#three_p").textContent = "hwp 맞음";
  } else if (hwpChk.value.indexOf(".hwp" === -1)) {
    document.querySelector("#three_p").textContent = "hwp 아님";
  }
}

threeBtn.addEventListener("click", alert_03);

/*4. 주민번호(13자리)를 입력받아서 생년월일을 추출하여 alert로 출력하시오. */

const four_btn = document.querySelector("#four_btn");
const four_p = document.querySelector("#four_p");
function alert_04() {
  const bthChk = document.querySelector("#bthChk");
  if (
    bthChk.value.length !== 13 ||
    Number.isInteger(Number(bthChk.value)) !== true
  ) {
    four_p.textContent = "이게 아니에요";
  } else if (String(bthChk.value).length === 13) {
    four_p.textContent =
      String(bthChk.value).slice(0, 2) +
      "년" +
      String(bthChk.value).slice(2, 4) +
      "월" +
      String(bthChk.value).slice(4, 6) +
      "일";
  }
}

four_btn.addEventListener("click", alert_04);

/*5. 점수를 입력받아서 버튼을 누르면 A~F학점을 alert로 출력하시오. (문자열이 입력되면 다시 입력받도록 하시오.) */

const five_btn = document.querySelector("#five_btn");
const five_p = document.querySelector("#five_p");
const gradeChk = document.querySelector("#gradeChk");
function alert_05() {
  if (Number.isInteger(Number(gradeChk.value)) !== true) {
    five_p.textContent = "이게 아니에요 숫자 ㄱㄱ";
  } else if (gradeChk.value >= 80) {
    five_p.textContent = "잘했네요";
  } else if (gradeChk.value >= 60) {
    five_p.textContent = "평타치셨네요";
  } else if (gradeChk.value >= 40) {
    five_p.textContent = "망하셨네요";
  } else {
    five_p.textContent = "이게 점수인가요";
  }
}

five_btn.addEventListener("click", alert_05);

/*6. 다음과 같은 형태를 for문으로 출력하시오.
 */
const six_btn = document.querySelector("#six_btn");
const six_p = document.querySelector("#six_p");
const six_print = document.querySelector("#six_print");
function alert_06() {
  let result = "";
  let htmlResult = "";

  for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 5; j++) {
      // 반복 한번마다 별을 하나씩 누적
      result = result + six_print.value;
      //</br>을 반복된 별 마지막에 넣어야해서 htmlResult를 새로 만듦
      htmlResult = htmlResult + result + "</br>";
    }

    // 큰 한칸 넘어갈때 초기화
    result = "";
  }
  six_p.innerHTML = htmlResult;
}

six_btn.addEventListener("click", alert_06);

/*7. 다음과 같은 형태를 for문으로 출력하시오. */
const seven_btn = document.querySelector("#seven_btn");
const seven_p = document.querySelector("#seven_p");
const seven_print = document.querySelector("#seven_print");
function alert_07() {
  let result = "";
  let htmlResult = "";

  for (let i = 1; i <= seven_print.value; i++) {
    result = result + "###" + "</br>" + "%%%" + "</br>";
  }
  seven_p.innerHTML = result;
}

seven_btn.addEventListener("click", alert_07);

/* 8. 다음과 같은 형태를 for문으로 출력하시오.*/
const eight_btn = document.querySelector("#eight_btn");
const eight_p = document.querySelector("#eight_p");

function alert_08() {
  let result = "";
  let htmlResult = "";

  for (let i = 1; i <= 2; i++) {
    for (let j = 5; j >= 1; j--) {
      for (let k = 1; k <= j; k++) {
        // j 만큼 별을 합쳐서 만듦
        result = result + "*";
      }
      //</br>을 반복된 별 마지막에 넣어야해서 htmlResult를 새로 만듦
      htmlResult = htmlResult + result + "</br>";

      //다음 칸 넘어갈때 초기화
      result = "";
    }

    // 큰 한칸 넘어갈때 초기화
    result = "";
  }
  eight_p.innerHTML = htmlResult;
}

eight_btn.addEventListener("click", alert_08);

/* 9. 버튼1을 누르면 배경색을 red. 버튼2를 누르면 배경색을 blue로 변경되게 하시오. */
const nine_btn_blue = document.querySelector("#nine_btn_blue");
const nine_btn_yellow = document.querySelector("#nine_btn_yellow");
const nine_btn_original = document.querySelector("#nine_btn_original");

function blue() {
  document.body.style.backgroundColor = "blue";
}
function yellow() {
  document.body.style.backgroundColor = "lightyellow";
}

function original() {
  document.body.style.backgroundColor = "";
}
nine_btn_blue.addEventListener("click", blue);
nine_btn_yellow.addEventListener("click", yellow);
nine_btn_original.addEventListener("click", original);

/*10. naver버튼을 누르면 naver로 daum버튼을 누르면 daum으로 이동하게 하시오.

따로 작성 필요 없음, a href로 해결
 */

/*11. 핸드폰번호를 입력받아서 국번이 010,011,017,016,018,019인지 체크하는 프로그램을 작성하시오. input text는 3개 사용. */
const eleven_btn = document.querySelector("#eleven_btn");
const eleven_p = document.querySelector("#eleven_p");
const eleven_01 = document.querySelector("#eleven_01");
const eleven_02 = document.querySelector("#eleven_02");
const eleven_03 = document.querySelector("#eleven_03");

function alert_11() {
  if (
    ["010", "011", "016", "017", "018", "019"].indexOf(eleven_01.value) !== -1
  ) {
    eleven_p.textContent = "국번이 리스트에 있습니다.";
  } else {
    eleven_p.textContent = "국번이 리스트에 없습니다. ";
  }
}

eleven_btn.addEventListener("click", alert_11);

/* 12. 두개의 숫자를 input text로 받아서 곱셈한 결과를 p태그에 출력하는 프로그램을 작성하시오.*/
const twelve_btn = document.querySelector("#twelve_btn");
const twelve_p = document.querySelector("#twelve_p");
const twelve_01 = document.querySelector("#twelve_01");
const twelve_02 = document.querySelector("#twelve_02");

function alert_12() {
  if (
    Number.isInteger(Number(twelve_01.value)) === true &&
    Number.isInteger(Number(twelve_02.value)) === true
  ) {
    twelve_p.textContent = twelve_01.value * twelve_02.value;
  } else {
    twelve_p.textContent = "숫자가 아닌데요";
  }
}

twelve_btn.addEventListener("click", alert_12);

/* 13. 남성, 여성중 한 개만 선택하도록 radio button을 만들고, 버튼을 누르면 선택한 값이 alert로 출력되도록 작성하시오. */
const thirteen_ele = document.getElementsByName("sex");

const thirteen_p = document.querySelector("#thirteen_p");
const thirteen_01 = document.querySelector("#thirteen_01");
const thirteen_02 = document.querySelector("#thirteen_02");

function alert_13() {
  for (i = 0; i < thirteen_ele.length; i++) {
    if (thirteen_ele[i].checked) {
      alert(thirteen_ele[i].value);
    }
  }
}
for (i = 0; i < thirteen_ele.length; i++) {
  thirteen_ele[i].onclick = alert_13;
}

const naver = document.querySelector("#naver");

naver.addEventListener("click", function() {
  window.open("https://www.w3schools.com");
});
