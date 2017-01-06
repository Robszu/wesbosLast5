const datas = document.querySelectorAll('[data-time]');

function logT(e) {
  console.log(this.dataset);
}

datas.forEach(data => data.addEventListener('click', logT));
