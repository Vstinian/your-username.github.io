// 获取输入框和搜索按钮元素
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// 监听搜索按钮的点击事件
searchButton.addEventListener('click', function () {
    // 获取用户输入的关键词
    const keyword = searchInput.value.trim();

    if (keyword !== '') {
        // 遍历搜索索引
        for (let i = 0; i < searchIndex.length; i++) {
            const item = searchIndex[i];
            if (item.content.includes(keyword)) {
                // 找到匹配的内容，跳转到对应的页面
                window.location.href = item.url;
                return;
            }
        }
        // 没有找到匹配的内容，给出提示
        alert('未找到相关内容，请尝试其他关键词。');
    }
});