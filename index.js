const addButtonEl = document.querySelector('#add-button');
const inputEl = document.querySelector('#todo-input');
const listEl = document.querySelector('#todo-list');
const ENTER_KEY = 13;


addButtonEl.addEventListener('click', e => {
  const itemEl = document.createElement('div');
  itemEl.textContent = inputEl.value;
  listEl.appendChild(itemEl);
  inputEl.value = ''; //input 비우기
  inputEl.focus(); //input 포커스 세팅

  itemEl.addEventListener('click', e => {
    if (itemEl.classList.contains('complete')) {
      itemEl.classList.remove('complete');
    } else {
      itemEl.classList.add('complete');
    }
  });

//
  function showDeleteIcon(){
    const removeButtonEl = document.createElement('button');
    itemEl.appendChild(removeButtonEl);
    removeButtonEl.textContent = 'X';
  }


  removeButtonEl.addEventListener('click', e => {
    //할일 항목 지우기
    listEl.removeChild(itemEl);
  });

});


//사용가 편하고 예쁘게 쓸수있도록
//rgb챌린지 개선
//todolist 개선
//깃헙주소

//선택과제 - 오목게임 만들기 격자데이터(2차원배열)
