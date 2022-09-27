/*
 * @Author: 小石头
 * @Date: 2022-09-23 15:44:39
 * @LastEditors: 小石头
 * @LastEditTime: 2022-09-26 17:30:09
 * @Description:
 */

import { useRouter } from "taro-hooks";
import { View, Text } from "@tarojs/components";

const Home = () => {
  const router = useRouter();

  console.log("router: ", router);

  return (
    <View>
      <Text>Welcome</Text>
    </View>
  );
};

export default Home;
