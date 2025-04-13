// 线上信箱表单提交事件
const mailboxForm = document.getElementById('mailbox-form');
mailboxForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // 这里可以使用 AJAX 或 Fetch API 将数据发送到服务器
    // 为了简化，使用 alert 模拟提交
    alert(`姓名：${name}\n邮箱：${email}\n主题：${subject}\n内容：${message}\n已提交到线上信箱！`);

    // 清空表单
    mailboxForm.reset();
});

// 显示/隐藏点评表单
const writeReview = document.getElementById('write-review');
const reviewForm = document.getElementById('review-form');
writeReview.addEventListener('click', function () {
    reviewForm.classList.toggle('hidden');
});

// 游客点评表单提交事件
reviewForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const reviewName = document.getElementById('review-name').value;
    const rating = document.getElementById('rating').value;
    const reviewContent = document.getElementById('review-content').value;
    const reviewImage = document.getElementById('review-image').files[0];

    // 创建新的点评元素
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('border', 'border-gray-300', 'p-4', 'rounded-md', 'mb-4');
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>';
        }
    }
    reviewElement.innerHTML = `
        <p class="font-bold">${reviewName}</p>
        <div class="text-yellow-400">
            ${starsHtml}
        </div>
        <p>${reviewContent}</p>
    `;
    if (reviewImage) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = '游客上传图片';
            img.classList.add('mt-2');
            reviewElement.appendChild(img);
        };
        reader.readAsDataURL(reviewImage);
    }

    // 添加到点评列表
    const reviewsList = document.getElementById('reviews-list');
    reviewsList.appendChild(reviewElement);

    // 清空表单
    reviewForm.reset();
    reviewForm.classList.add('hidden');
});