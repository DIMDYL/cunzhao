<template>
  <div class="servicebox background">
    <h1>我们能为您做什么？</h1>
    <img src="@/assets/imgs/wechat.png" alt="微信图标" />
    <p>价格优美，欢迎咨询！</p>
    <div class="service">
      <h2>海报设计</h2>
      <p>
        提供专业的海报设计服务，包括抠图、修图、节日宣传、促销海报、社团纳新海报、宣传单、菜单、名片、易拉宝、展板、专业设计及跨境电商图等。
      </p>
      <p>请提供以下信息：主题、文案、您喜欢的风格（可附上参考例图）及所需尺寸。</p>
    </div>

    <div class="service">
      <h2>网站开发</h2>
      <p>我们提供全面的网站开发服务，包括：</p>
      <ul>
        <li>HTML、CSS、JavaScript网页制作</li>
        <li>Spring Boot管理系统、博客系统、维修系统</li>
        <li>Vue.js、Axios、Java、Redis、Spring Boot、Spring Cache、SSM</li>
      </ul>
      <p>所有服务均可定制，以满足您的具体需求。</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.servicebox {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  img {
    width: 300px;
    margin-bottom: 20px;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: bold;
    color: #333;
  }

  .service {
    margin: 20px 0;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 80%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      transform: scale(1.02); /* 鼠标悬停放大效果 */
    }
    h2 {
      margin-bottom: 10px;
      font-size: 22px;
      font-weight: semi-bold;
      color: #555;
    }

    p {
      margin: 10px 0;
      line-height: 1.6;
      color: #666;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 10px 0;

      li {
        margin: 5px 0;
        line-height: 1.5;
        color: #444;
      }
    }
  }
}
</style>
