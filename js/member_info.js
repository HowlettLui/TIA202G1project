$(document).ready(function () {
  // 切換至編輯模式
  $('#editBtn').click(function () {
      $('#viewMode').addClass('d-none');
      $('#editMode').removeClass('d-none');
  });

  // 切換回顯示模式
  $('#cancelBtn').click(function () {
      $('#editMode').addClass('d-none');
      $('#viewMode').removeClass('d-none');
  });

  // 儲存資料並切換回顯示模式
  // TODO: 後端要再補
  $('#saveBtn').click(function () {
      // 獲取輸入框中的值
      const name = $('#name').val();
      const userid = $('#userid').val();
      const accout = $('#accout').val();
      const email = $('#email').val();
      const phone = $('#phone').val();

      // 更新顯示模式中的內容
      $('#viewName').text(name);
      $('#viewUserid').text(userid);
      $('#viewAccout').text(accout);
      $('#viewEmail').text(email);
      $('#viewPhone').text(phone);

      // 切換回顯示模式
      $('#editMode').addClass('d-none');
      $('#viewMode').removeClass('d-none');
  });
});