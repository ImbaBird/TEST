<template>
  <div>
    <Form :model="setting" :label-width="120">
      <FormItem label="自动切换">
        <Switch v-model="setting.autoplay">
          <span slot="open">开</span>
          <span slot="close">关</span>
        </Switch>
      </FormItem>
      <FormItem label="圆形指示器">
        <Switch v-model="setting.radiusDot">
          <span slot="open">开</span>
          <span slot="close">关</span>
        </Switch>
      </FormItem>
      <FormItem label="自动切换速度">
        <Slider v-model="setting.autoplaySpeed" :min="300" :max="10000" :step="100"></Slider>
      </FormItem>
      <FormItem label="指示器位置">
        <RadioGroup v-model="setting.dots" type="button">
          <Radio label="inside">内部</Radio>
          <Radio label="outside">外部</Radio>
          <Radio label="none">不显示</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="切换箭头">
        <RadioGroup v-model="setting.arrow" type="button">
          <Radio label="hover">悬停时显示</Radio>
          <Radio label="always">一直显示</Radio>
          <Radio label="never">不显示</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="指示器触发方式">
        <RadioGroup v-model="setting.trigger" type="button">
          <Radio label="click">点击</Radio>
          <Radio label="hover">悬停</Radio>
        </RadioGroup>
      </FormItem>
    </Form>

    <Carousel
      v-model="value3"
      :autoplay="setting.autoplay"
      :autoplay-speed="setting.autoplaySpeed"
      :dots="setting.dots"
      :radius-dot="setting.radiusDot"
      :trigger="setting.trigger"
      :arrow="setting.arrow">
      <CarouselItem>
        <div class="demo-carousel">1</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">3</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">4</div>
      </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value3: 0,
        setting: {
          autoplay: false,
          autoplaySpeed: 2000,
          dots: 'inside',
          radiusDot: false,
          trigger: 'click',
          arrow: 'hover'
        }
      }
    },
  }
</script>
<style>
  .demo-carousel{
    width: 100%;
    height: 100px;
  }
</style>
