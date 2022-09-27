/*
 * @Author: 小石头
 * @Date: 2022-09-21 10:44:14
 * @LastEditors: 小石头
 * @LastEditTime: 2022-09-23 15:48:00
 * @Description: 
 */
import Taro from '@tarojs/taro';
import { useCallback } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast, useRouter } from "taro-hooks";
import logo from "./hook.png";

import "./index.less";

const Index = () => {
  const env = useEnv();
  const [_, { setTitle }] = useNavigationBar({ title: "Taro Hooks" });

  const router = useRouter();

  console.log('router: ', router);

  const [show] = useModal({
    title: "Taro Hooks!",
    showCancel: false,
    confirmColor: "#8c2de9",
    confirmText: "支持一下",
    mask: true
  });
  const [showToast] = useToast({ mask: true });

  const handleModal = useCallback(() => {
    show({ content: "不如给一个star⭐️!" }).then(() => {
      showToast({ title: "点击了支持!" });
    });
  }, [show, showToast]);

  const goHome = () => {
    Taro.redirectTo({
        url: '/pages/home/index'
    });
  }

  return (
    <View className="wrapper">
      <Image className="logo" src={logo} />
      <Text className="title">为Taro而设计的Hooks Library</Text>
      <Text className="desc">
        目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近40+Hooks!
        并结合ahook适配Taro!
      </Text>
      <View className="list">
        <Text className="label">运行环境</Text>
        <Text className="note">{env}</Text>
      </View>
      <Button className="button" onClick={() => setTitle("Taro Hooks Nice!")}>
        设置标题
      </Button>
      <Button className="button" onClick={handleModal}>
        使用Modal
      </Button>
      <Button className="button" onClick={goHome}>去首页</Button>
    </View>
  );
};

export default Index;
