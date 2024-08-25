<script setup lang="ts">

</script>

<template>
  <div id="about-us" class="border-solid bg-[#F8F7F7] m-auto" style="
    width: 70vw;z-index: 52;
    margin-top: -45px;">
    <div class="flex justify-between gap-8 w-full">
      <div style="padding: 50px 50px 40px;" class="flex-[4]">
        <h2 class="color-[#280071] font-size-[38px] mb-[16px]">关于我们</h2>
        <div class="line-height-[26px]">
          <p>成都工鼎科技公司创立于2016年，是业内领先的工业通信产品与解决方案提供商。2018年成为西门子PROFINET技术合作伙伴与产品代理商。2023年成为首批西门子边缘产品价值合作伙伴。</p>
          <br><br>
          <p>公司创始人在西门子、汇川科技等国内外工业、电子电气巨头的研发、销售领域有多年的工作经验与技术、市场积累。</p>
          <br><br>
          <p class="break-all">公司专注于Profinet/Profibus工业通信产品，控制器与工业边缘解决方案的开发。已形成包括Profinet/Profibus远程IO模块、高密度步进驱动器、基于PC与嵌入式系统的Profinet工业以太网协议栈、Profinet/Profibus/Modbus/TCP多协议网关、边缘智能实验室管理系统、边缘智能检测系统等一系列产品。</p>
          <br>
        </div>
      </div>
      <div class="bg-[#F0EFEF] flex-[2]">
        <div class="rounded-1 -mt-11 m-auto mb-3.5 w-24 h-24 overflow-hidden bg-no-repeat bg-cover bg-white border-2 border-solid border-white" style="background-image: url('/gd/gd_logo.svg');" />
        <div class="flex-row font-size-[18px] text-left pl-8 pr-8 pb-8">
          <h2 class="font-size-[28px] color-[darkgrey] text-center">联系我们</h2>
          <br>
          <img :src="'/gd/wechart-qrcode.jpg'" alt="" class="w-[60%] m-auto">
          <br>
          <p class="pl-[40px]"><b>电话：</b>186 2823 2011</p>
          <p class="pl-[40px]"><b>邮箱：</b>peng.zhang@gdi-tech.net</p>
          <p class="pl-[40px]"><b>地址：</b>四川省成都市双流区新通大道777号 时尚大厦607</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
